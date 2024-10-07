import Prop from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import * as Styled from './MessageCenter-styles';
import { MessagesList } from '../MessagesList/MessagesList';
import { Chat } from '../Chat/Chat';

export function MessageCenter({ data }) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1050);
  const [contactsData, setContactsData] = useState([]);

  // Define o contato ativo quando um contato é selecionado
  useEffect(() => {
    const updatedContacts = contactsData.map((contact) => ({
      ...contact,
      active: selectedContact?.id === contact.id,
    }));
    setContactsData(updatedContacts);
  }, [selectedContact]);

  // Atualiza o estado contactsData sempre que data mudar
  useEffect(() => {
    setContactsData(data);
  }, [data]);

  // Seleciona o contato e marca como lido
  const handleSelectedContact = useCallback((contact) => {
    setContactsData((prevData) => {
      const updatedContacts = prevData.map((ctt) => (ctt.id === contact.id ? { ...ctt, unread: 0 } : ctt));

      const updatedContact = updatedContacts.find((ctt) => ctt.id === contact.id);
      setSelectedContact(updatedContact);

      return updatedContacts;
    });
  }, []);

  // Reseta o estado selectedContact para null
  const resetSelectedContact = useCallback(() => {
    setSelectedContact(null);
  }, []);

  // Adiciona uma nova mensagem ao contato selecionado
  const handleSendMessage = useCallback((newMessage) => {
    setContactsData((prevData) => {
      const updatedContacts = prevData.map((contact) => (contact.id === selectedContact.id
        ? { ...contact, messages: [...contact.messages, newMessage] }
        : contact));

      const updatedContact = updatedContacts.find((contact) => contact.id === selectedContact.id);
      setSelectedContact(updatedContact);

      return updatedContacts;
    });
  }, [selectedContact]);

  // Aceita ou rejeita o contato com base no status fornecido
  const handleAcceptContact = useCallback((status) => {
    setContactsData((prevData) => {
      const updatedContacts = prevData.map((contact) => (contact.id === selectedContact.id ? { ...contact, accepted: status } : contact));

      const updatedContact = updatedContacts.find((contact) => contact.id === selectedContact.id);
      setSelectedContact(updatedContact);

      return updatedContacts;
    });
  }, [selectedContact]);

  // Monitora o tamanho da tela e atualiza o estado isLargeScreen
  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth > 1050);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
  // Em telas grandes, o chat e a lista de mensagens são exibidos simultaneamente
  // Em telas pequenas, apenas um dos dois é exibido por vez
    <Styled.MessageCenterContainer>
      {isLargeScreen ? (
        <MessagesList
          contacts={contactsData}
          onClickContact={handleSelectedContact}
        />
      ) : (
        !selectedContact && (
        <MessagesList
          contacts={contactsData}
          onClickContact={handleSelectedContact}
        />
        )
      )}
      {selectedContact && (
        <Chat
          contact={selectedContact}
          sendMessage={handleSendMessage}
          acceptContact={handleAcceptContact}
          closeChat={resetSelectedContact}
        />
      )}
    </Styled.MessageCenterContainer>
  );
}

MessageCenter.propTypes = {
  data: Prop.array.isRequired,
};
