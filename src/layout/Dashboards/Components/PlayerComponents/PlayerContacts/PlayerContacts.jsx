import Prop from 'prop-types';
import React, { useState } from 'react';
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

  const contactMessages = [
    {
      id: 1,
      avatar: '/assets/images/logos/vertical-background.png',
      alt: 'Reactjs',
      title: 'Facebook',
      subtitle: 'What are you doing?',
      date: new Date(),
      unread: 3,
      active: selectedContact?.id === 1,
      messages: [
        {
          avatar: '/assets/images/logos/vertical-background.png',
          position: 'right',
          type: 'text',
          text: '5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          date: new Date(),
        },
        {
          avatar: '/assets/images/logos/vertical-background.png',
          position: 'left',
          type: 'text',
          text: '6 -Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          date: new Date(),
        },
      ],
    },
    {
      id: 2,
      avatar: '/assets/images/logos/vertical-background.png',
      alt: 'Reactjs',
      title: 'Facebook',
      subtitle: 'What are you doing?',
      date: new Date(),
      unread: 3,
      active: selectedContact?.id === 2,
      messages: [
        {
          avatar: '/assets/images/logos/vertical-background.png',
          position: 'right',
          type: 'text',
          text: '3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          date: new Date(),
        },
        {
          avatar: '/assets/images/logos/vertical-background.png',
          position: 'left',
          type: 'text',
          text: '4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          date: new Date(),
        },
      ],
    },
    {
      id: 3,
      avatar: '/assets/images/logos/vertical-background.png',
      alt: 'Reactjs',
      title: 'Facebook',
      subtitle: 'What are you doing?',
      date: new Date(),
      unread: 3,
      active: selectedContact?.id === 3,
      messages: [
        {
          avatar: '/assets/images/logos/vertical-background.png',
          position: 'right',
          type: 'text',
          text: '1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          date: new Date(),
        },
        {
          avatar: '/assets/images/logos/vertical-background.png',
          position: 'left',
          type: 'text',
          text: '2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          date: new Date(),
        },
      ],
    },
  ];

  return (
    <Styled.PlayerContactsContainer>
      <MessagesList
        messages={contactMessages}
        onClick={(contact) => handleSelectedContact(contact)}
      />
      {selectedContact && <Chat messages={selectedContact.messages} />}
    </Styled.PlayerContactsContainer>
  );
}

PlayerContacts.propTypes = {};
