import Prop from 'prop-types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChatList } from 'react-chat-elements';
import * as Styled from './PlayerContacts-Styles';
import { ContactCard } from '../../../../../components/elements/ContactCard/ContactCard';
import { VerticalMiniSlide } from '../../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalLongSlide } from '../../../../../components/elements/VerticalLongSlide/VerticalLongSlide';
import 'react-chat-elements/dist/main.css';
// MessageBox component

import { Column } from '../../../../../components/ColumnContainer/Column';
import { Button } from '../../../../../components/elements/Button/Button';
import { theme } from '../../../../../styles/theme';
import { Row } from '../../../../../components/RowContainer/Row';
import { Text } from '../../../../../components/elements/Text/Text';
import { Chat } from '../../../../../components/elements/ChatElements/Chat/Chat';

export function PlayerContacts() {
  const { t } = useTranslation();

  const chatData = [
    {
      avatar: '/assets/images/logos/vertical-background.png',
      alt: 'Reactjs',
      title: 'Facebook',
      subtitle: 'What are you doing?',
      date: new Date(),
      unread: 3,
      className: 'message-item',
    },
  ];

  return (
    <Styled.PlayerContactsContainer>

      <Column>
        <ChatList
          className="chat-list"
          dataSource={chatData}
        />
      </Column>

      <Chat />

    </Styled.PlayerContactsContainer>
  );
}

PlayerContacts.propTypes = {};
