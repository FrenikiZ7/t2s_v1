import Prop from 'prop-types';
import React, { useState } from 'react';
import {
  Avatar, ChatItem, ChatList, Input, MessageList,
} from 'react-chat-elements';
import * as Styled from './MessagesList-Styles.js';
import { Text } from '../../Text/Text.jsx';
import { theme } from '../../../../styles/theme.js';
import { Button } from '../../Button/Button.jsx';
import { AuthSearch } from '../../AuthElements/AuthSearch/AuthSearch.jsx';
import 'react-chat-elements/dist/main.css';

export function MessagesList({ contactsMessages, onClick }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelected = (contact) => {
    onClick(contact);
  };

  return (
    <Styled.MessagesListWrapper>

      <Styled.MessagesListHeader>
        <AuthSearch
          name="contactsMessagesSearch"
          id="contactsMessagesSearch"
          onChange={(e) => handleSearch(e)}
          value={searchValue}
          placeholder="Pesquise aqui suas mensagens"
        />
      </Styled.MessagesListHeader>

      <Styled.MessagesWrapper>

        <Styled.MessagesListContainer>
          {contactsMessages.map((contact) => (
            <ChatItem
              key={contact.id}
              avatar={contact.avatar}
              alt={contact.alt}
              title={contact.title}
              subtitle={contact.subtitle}
              date={contact.date}
              unread={contact.unread}
              onClick={() => handleSelected(contact)}
              className={`message-item ${contact.active ? 'active' : ''}`}
            />
          ))}
        </Styled.MessagesListContainer>

      </Styled.MessagesWrapper>

      {/* <Styled.MessagesListFooter /> */}

    </Styled.MessagesListWrapper>

  );
}

MessagesList.propTypes = {
  contactsMessages: Prop.arrayOf(Prop.object).isRequired,
  onClick: Prop.func.isRequired,
};
