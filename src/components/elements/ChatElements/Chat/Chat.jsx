import Prop from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Avatar, Input, MessageList, SystemMessage,
} from 'react-chat-elements';
import { ArrowBack } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as Styled from './Chat-Styles';
import { theme } from '../../../../styles/theme';
import { Button } from '../../Button/Button';
import { Row } from '../../../RowContainer/Row';
import { StyledLink } from '../../StyledLink/StyledLink';
import { IconDiv } from '../../IconDiv/IconDiv';

export function Chat({
  contact, sendMessage, acceptContact, closeChat,
}) {
  const [message, setMessage] = useState({
    position: 'right',
    type: 'text',
    text: '',
    date: '',
  });
  const [contactData, setContactData] = useState([]);

  // Atualiza contactData sempre que contact mudar
  useEffect(() => {
    setContactData(contact);
  }, [contact]);

  // Envia uma nova mensagem
  const handleSendMessage = () => {
  // Define a data e hora atuais para a mensagem
    const newMessage = { ...message, date: new Date() };

    // Envia a mensagem se houver texto
    if (message.text) {
      sendMessage(newMessage);
    }

    // Limpa o campo de entrada de mensagem
    setMessage((prevData) => ({ ...prevData, text: '' }));
  };

  // Fecha o chat
  const handleCloseChat = useCallback(() => {
    closeChat();
  }, [closeChat]);

  // Monitora as teclas pressionadas pelo usuário para enviar ou fechar o chat
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }

    if (e.key === 'Escape') {
      handleCloseChat();
    }
  }, [handleSendMessage, handleCloseChat]);

  // Aceita ou rejeita o contato com base no status fornecido
  const handleAcceptContact = useCallback((status) => {
    acceptContact(status);
  }, [acceptContact]);

  const { t } = useTranslation();

  return (
    <Styled.ChatWrapper onKeyDown={handleKeyDown} tabIndex={0}>

      <Styled.ChatHeader>
        <IconDiv onclick={handleCloseChat}>
          <ArrowBack />
        </IconDiv>
        <Avatar src={contact.avatar} alt={contact.alt} size="large" type="circle flexible" />
        <StyledLink text={contact.title} uppercase hovercolor={theme.colors.secondary} />

      </Styled.ChatHeader>

      <Styled.ChatContainer>

        <SystemMessage text={t('chat_warning_1')} />

        {contactData.messages && (
        <MessageList
          className="message-list"
          lockable
          toBottomHeight="100%"
          dataSource={contactData.messages}
        />
        )}

        {contact?.accepted === undefined && (
        <Row>
          <Button
            text={t('accept')}
            bgcolor={theme.colors.lightprimary}
            bghover={theme.colors.primary}
            border={theme.colors.lightprimary}
            borderhover={theme.colors.primary}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
            onclick={() => handleAcceptContact(true)}
          />

          <Button
            text={t('reject')}
            bgcolor={theme.colors.red}
            bghover={theme.colors.mediumred}
            border={theme.colors.red}
            borderhover={theme.colors.mediumred}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
            onclick={() => handleAcceptContact(false)}
          />
        </Row>
        )}

        {contact?.accepted === false && <SystemMessage text={t('chat_reject_message')} />}

      </Styled.ChatContainer>

      <Styled.ChatFooter>
        {contact?.accepted && (
        <Input
          placeholder={t('type_your_message')}
          defaultValue=""
          value={message.text}
          onChange={(e) => setMessage((prevData) => ({ ...prevData, text: e.target.value }))}
          rightButtons={(
            <Button
              onclick={handleSendMessage}
              text={t('send')}
              bgcolor={theme.colors.transparent}
              bghover={theme.colors.transparent}
              border={theme.colors.white}
              borderhover={theme.colors.secondary}
              textcolor={theme.colors.white}
              texthover={theme.colors.secondary}
            />
          )}
        />
        )}

      </Styled.ChatFooter>

    </Styled.ChatWrapper>

  );
}
Chat.propTypes = {
  contact: Prop.arrayOf(Prop.object).isRequired,
  sendMessage: Prop.func,
  acceptContact: Prop.func,
  closeChat: Prop.func,
};
