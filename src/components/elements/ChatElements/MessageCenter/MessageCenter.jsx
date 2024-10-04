import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as Styled from './MessageCenter-styles';
import { MessagesList } from '../MessagesList/MessagesList';
import { Chat } from '../Chat/Chat';

export function MessageCenter({ data }) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1050);
  const [contactsMessages, setContactsMessages] = useState([]);

  useEffect(() => {
    const updatedContacts = contactsMessages.map((contact) => ({
      ...contact,
      active: selectedContact?.id === contact.id,
    }));
    setContactsMessages(updatedContacts);
  }, [selectedContact]);

  useEffect(() => {
    setContactsMessages(data);
  }, [data]);

  const handleSelectedContact = (contact) => {
    setContactsMessages((prevData) => {
      const updatedContacts = prevData.map((ctt) => (ctt.id === contact.id
        ? { ...ctt, unread: 0 }
        : ctt));

      const updatedContact = updatedContacts.find((ctt) => ctt.id === contact.id);
      setSelectedContact(updatedContact);

      return updatedContacts;
    });
  };

  const resetSelectedContact = () => {
    setSelectedContact();
  };

  const handleSendMessage = (newMessage) => {
    setContactsMessages((prevData) => {
      const updatedContacts = prevData.map((contact) => (contact.id === selectedContact.id
        ? { ...contact, messages: [...contact.messages, newMessage] }
        : contact));

      const updatedContact = updatedContacts.find((contact) => contact.id === selectedContact.id);
      setSelectedContact(updatedContact);

      return updatedContacts;
    });
  };

  const handleAcceptMessage = (status) => {
    setContactsMessages((prevData) => {
      const updatedContacts = prevData.map((contact) => (contact.id === selectedContact.id
        ? { ...contact, accepted: status }
        : contact));

      const updatedContact = updatedContacts.find((contact) => contact.id === selectedContact.id);
      setSelectedContact(updatedContact);

      return updatedContacts;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1050);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Styled.MessageCenterContainer>

      {isLargeScreen ? (
        <MessagesList
          contactsMessages={contactsMessages}
          onClick={handleSelectedContact}
        />
      ) : (
        <>
          {!selectedContact && (
          <MessagesList
            contactsMessages={contactsMessages}
            onClick={handleSelectedContact}
          />
          )}
        </>
      )}

      {selectedContact && (
        <Chat
          contact={selectedContact}
          sendMessage={handleSendMessage}
          acceptMessage={handleAcceptMessage}
          closeChat={resetSelectedContact}
        />
      )}
    </Styled.MessageCenterContainer>
  );
}

MessageCenter.propTypes = {
  data: Prop.array.isRequired,
};
