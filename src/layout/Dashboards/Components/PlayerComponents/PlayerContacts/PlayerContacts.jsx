import Prop from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './PlayerContacts-Styles';
import { MessagesList } from '../../../../../components/elements/ChatElements/MessagesList/MessagesList';
import { Chat } from '../../../../../components/elements/ChatElements/Chat/Chat';

export function PlayerContacts() {
  const { t } = useTranslation();
  const [selectedContact, setSelectedContact] = useState(null);

  const [contactsMessages, setContactsMessages] = useState([
    {
      id: 1,
      avatar: '/assets/images/profile/spfc.jpg',
      alt: 'São Paulo FC',
      title: 'Sâo Paulo',
      subtitle: 'Ganhar libertadores? vou nadakkkkk',
      date: new Date(),
      unread: 1,
      accepted: undefined,
      active: selectedContact?.id === 1,

      messages: [
        {
          position: 'left',
          type: 'text',
          text: 'Ganhar libertadores? vou nadakkkkk',
          date: new Date(),
        },
      ],
    },

    {
      id: 2,
      avatar: '/assets/images/profile/profile.png',
      alt: 'Léo Pelé',
      title: 'Léo Pelé',
      subtitle: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
      date: new Date(),
      accepted: undefined,
      unread: 1,
      active: selectedContact?.id === 2,
      messages: [
        {
          position: 'left',
          type: 'text',
          text: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
          date: new Date(),
        },
      ],
    },

    {
      id: 3,
      avatar: '/assets/images/users/athletes.png',
      alt: 'Wellington Rato',
      title: 'Wellington Rato',
      subtitle: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
      date: new Date(),
      unread: 1,
      accepted: undefined,
      active: selectedContact?.id === 3,
      messages: [
        {
          position: 'left',
          type: 'text',
          text: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
          date: new Date(),
        },
      ],
    },
  ]);

  useEffect(() => {
    const updatedContacts = contactsMessages.map((contact) => ({
      ...contact,
      active: selectedContact?.id === contact.id,
    }));
    setContactsMessages(updatedContacts);
  }, [selectedContact]);

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

  return (
    <Styled.PlayerContactsContainer>
      <MessagesList
        contactsMessages={contactsMessages}
        onClick={handleSelectedContact}
      />

      {selectedContact && (
        <Chat
          contact={selectedContact}
          sendMessage={handleSendMessage}
          acceptMessage={handleAcceptMessage}
        />
      )}
    </Styled.PlayerContactsContainer>
  );
}

PlayerContacts.propTypes = {};
