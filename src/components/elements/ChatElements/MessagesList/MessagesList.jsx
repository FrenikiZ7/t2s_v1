import Prop from 'prop-types';
import React, { useState, useCallback, useMemo } from 'react';
import {
  Avatar, ChatItem, Input, MessageList,
} from 'react-chat-elements';
import * as Styled from './MessagesList-Styles.js';
import { Text } from '../../Text/Text.jsx';
import { theme } from '../../../../styles/theme.js';
import { Button } from '../../Button/Button.jsx';
import { AuthSearch } from '../../AuthElements/AuthSearch/AuthSearch.jsx';
import 'react-chat-elements/dist/main.css';
import { useTranslation } from 'react-i18next';

export function MessagesList({ contacts, onClickContact }) {
  const [searchValue, setSearchValue] = useState('');

  // Atualiza o estado de searchValue com base na entrada do usuário
  const handleSearch = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  // Dispara quando um contato é selecionado pelo usuário
  const handleSelected = useCallback((contact) => {
    console.log('clicou');
    onClickContact(contact);
  }, [onClickContact]);

  // Filtra os contatos visíveis de acordo com searchValue
  const filteredContacts = useMemo(
    () => contacts.filter((contact) => contact.title.toLowerCase().includes(searchValue.toLowerCase())),
    [contacts, searchValue],
  );

  const { t } = useTranslation();

  return (
    <Styled.MessagesListWrapper>

      <Styled.MessagesListHeader>
        <AuthSearch
          name="contactsSearch"
          id="contactsSearch"
          onChange={handleSearch}
          value={searchValue}
          placeholder={t('search_your_messages')}
        />
      </Styled.MessagesListHeader>

      <Styled.MessagesWrapper>

        <Styled.MessagesListContainer>
          {filteredContacts.length > 0 ? filteredContacts.map((contact) => (
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
          )) : (
            <Text text={t('no_more_messages')} color={theme.colors.lightgray} />
          )}
        </Styled.MessagesListContainer>

      </Styled.MessagesWrapper>

    </Styled.MessagesListWrapper>
  );
}

MessagesList.propTypes = {
  contacts: Prop.arrayOf(Prop.object).isRequired,
  onClickContact: Prop.func.isRequired,
};
