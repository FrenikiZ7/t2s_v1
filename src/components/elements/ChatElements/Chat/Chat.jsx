import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Avatar, Input, MessageList,
  SystemMessage,
} from 'react-chat-elements';
import * as Styled from './Chat-Styles';
import { Text } from '../../Text/Text';
import { theme } from '../../../../styles/theme';
import { Button } from '../../Button/Button';
import { Row } from '../../../RowContainer/Row';
import { StyledLink } from '../../StyledLink/StyledLink';

export function Chat({ contact }) {
  const [chatStatus, setChatStatus] = useState('');
  const [message, setMessage] = useState('');
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    setContactData(contact);
  }, [contact]);

  const handleSend = () => {
    setMessage('');
  };

  const handleChatStatus = (status) => {
    setChatStatus(status);
  };

  return (
    <Styled.ChatWrapper>

      <Styled.ChatHeader>
        <Avatar src={contact.avatar} alt={contact.alt} size="large" type="circle flexible" />
        <StyledLink text={contact.title} uppercase />
      </Styled.ChatHeader>

      <Styled.ChatContainer>

        <SystemMessage text="Nunca passe seus dados ou clique em qualquer link enviado" />

        <MessageList
          className="message-list"
          lockable
          toBottomHeight="100%"
          dataSource={contact.messages}
        />

        <Row>
          <Button
            onClick={() => handleChatStatus('accepted')}
            text="Aceitar"
            bgcolor={theme.colors.lightprimary}
            bghover={theme.colors.primary}
            border={theme.colors.lightprimary}
            borderhover={theme.colors.primary}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
          />

          <Button
            onClick={() => handleChatStatus('rejected')}
            text="Recusar"
            bgcolor={theme.colors.red}
            bghover={theme.colors.mediumred}
            border={theme.colors.red}
            borderhover={theme.colors.mediumred}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
          />
        </Row>

        {chatStatus === 'rejected' && <SystemMessage text="Você rejeitou esse chat" />}
      </Styled.ChatContainer>

      <Styled.ChatFooter>
        <Input
          placeholder="Digite sua mensagem..."
          defaultValue=""
          onChange={(e) => setMessage(e.target.value)}
          rightButtons={(
            <Button
              onClick={handleSend}
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

      </Styled.ChatFooter>

    </Styled.ChatWrapper>

  );
}
Chat.propTypes = {
  contact: Prop.arrayOf(Prop.object).isRequired,
};
