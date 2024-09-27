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

export function MessagesList({ messages, onClick }) {
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
          name="messagesSearch"
          id="messagesSearch"
          onChange={(e) => handleSearch(e)}
          value={searchValue}
          placeholder="Pesquise aqui suas mensagens"
        />
      </Styled.MessagesListHeader>

      <Styled.MessagesWrapper>

        <Styled.MessagesListContainer>
          {messages.map((message) => (
            <ChatItem
              key={message.id}
              avatar={message.avatar}
              alt={message.alt}
              title={message.title}
              subtitle={message.subtitle}
              date={message.date}
              unread={message.unread}
              onClick={() => handleSelected(message)}
              className={`message-item ${message.active ? 'active' : ''}`}
            />
          ))}
        </Styled.MessagesListContainer>

      </Styled.MessagesWrapper>

      {/* <Styled.MessagesListFooter /> */}

    </Styled.MessagesListWrapper>

  );
}

MessagesList.propTypes = {
  messages: Prop.arrayOf(Prop.object).isRequired,
  onClick: Prop.func.isRequired,
};
