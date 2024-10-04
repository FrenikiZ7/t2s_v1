import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Avatar, Input, MessageList,
  SystemMessage,
} from 'react-chat-elements';
import { ArrowBack } from '@styled-icons/material-outlined';
import * as Styled from './Chat-Styles';
import { Text } from '../../Text/Text';
import { theme } from '../../../../styles/theme';
import { Button } from '../../Button/Button';
import { Row } from '../../../RowContainer/Row';
import { StyledLink } from '../../StyledLink/StyledLink';
import { IconDiv } from '../../IconDiv/IconDiv';

export function Chat({
  contact, sendMessage, acceptMessage, closeChat,
}) {
  const [message, setMessage] = useState({
    position: 'right',
    type: 'text',
    text: '',
    date: '',
  });

  const [contactData, setContactData] = useState([
  ]);

  useEffect(() => {
    setContactData(contact);
  }, [contact]);

  const handleSendMessage = () => {
    // Atualiza a data da mensagem para o exato momento que ela foi enviada
    const newMessage = { ...message, date: new Date() };

    // Lógica para enviar a mensagem
    if (message.text) {
      sendMessage(newMessage);
    }

    // Reseta o estado local da mensagem
    setMessage((prevData) => ({ ...prevData, text: '' }));
  };

  const handleCloseChat = (e) => {
    closeChat();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }

    if (e.key === 'Escape') {
      handleCloseChat();
    }
  };

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

        <SystemMessage text="Nunca passe seus dados ou clique em qualquer link enviado" />

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
            text="Aceitar"
            bgcolor={theme.colors.lightprimary}
            bghover={theme.colors.primary}
            border={theme.colors.lightprimary}
            borderhover={theme.colors.primary}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
            onclick={() => acceptMessage(true)}
          />

          <Button
            text="Recusar"
            bgcolor={theme.colors.red}
            bghover={theme.colors.mediumred}
            border={theme.colors.red}
            borderhover={theme.colors.mediumred}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
            onclick={() => acceptMessage(false)}
          />
        </Row>
        )}

        {contact?.accepted === false && <SystemMessage text="Você rejeitou esse chat" />}

      </Styled.ChatContainer>

      <Styled.ChatFooter>
        {contact?.accepted && (
        <Input
          placeholder="Digite sua mensagem..."
          defaultValue=""
          value={message.text}
          onChange={(e) => setMessage((prevData) => ({ ...prevData, text: e.target.value }))}
          rightButtons={(
            <Button
              onclick={handleSendMessage}
              text="enviar"
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
};
