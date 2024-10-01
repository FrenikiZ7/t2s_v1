import Prop from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './PlayerContacts-Styles';
import { MessagesList } from '../../../../../components/elements/ChatElements/MessagesList/MessagesList';
import { Chat } from '../../../../../components/elements/ChatElements/Chat/Chat';

export function PlayerContacts() {
  const { t } = useTranslation();
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSelectedContact = (contact) => {
    setSelectedContact(contact);
  };

  const [contactsMessages, setContactsMessages] = useState([
    {
      id: 1,
      avatar: '/assets/images/profile/spfc.jpg',
      alt: 'São Paulo FC',
      title: 'Sâo Paulo',
      subtitle: 'Vo nadakkkk',
      date: new Date(),
      unread: 1,
      accepted: true,
      active: selectedContact?.id === 1,

      messages: [
        {
          avatar: '/assets/images/logos/vertical-background.png',
          position: 'right',
          type: 'text',
          text: 'Ganha mais um título por favor',
          date: new Date(),
        },
        {
          avatar: '/assets/images/profile/spfc.jpg',
          position: 'left',
          type: 'text',
          text: 'Vo nadakkkk',
          date: new Date(),
        },
      ],
    },

    {
      id: 2,
      avatar: '/assets/images/profile/profile.png',
      alt: 'Reactjs',
      title: 'Léo Pelé',
      subtitle: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
      date: new Date(),
      accepted: false,
      unread: 1,
      active: selectedContact?.id === 2,
      messages: [
        {
          avatar: '/assets/images/profile/profile.png',
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
      alt: 'Reactjs',
      title: 'Wellington Rato',
      subtitle: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
      date: new Date(),
      unread: 0,
      accepted: undefined,
      active: selectedContact?.id === 3,
      messages: [
        {
          avatar: '/assets/images/profile/profile.png',
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

  return (
    <Styled.PlayerContactsContainer>
      <MessagesList
        contactsMessages={contactsMessages}
        onClick={handleSelectedContact}
      />

      {selectedContact && <Chat contact={selectedContact} />}
    </Styled.PlayerContactsContainer>
  );
}

PlayerContacts.propTypes = {};
