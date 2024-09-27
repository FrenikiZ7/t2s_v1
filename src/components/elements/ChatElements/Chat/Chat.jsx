import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Avatar, Input, MessageList,
} from 'react-chat-elements';
import * as Styled from './Chat-Styles';
import { Text } from '../../Text/Text';
import { theme } from '../../../../styles/theme';
import { Button } from '../../Button/Button';

export function Chat({ messages }) {
  const [message, setMessage] = useState('');

  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    setMessageData(messages);
  }, [messages]);

  const handleSend = () => {
    setMessage('');
  };

  console.log(messages);

  return (
    <Styled.ChatWrapper>

      <Styled.ChatHeader>
        <Avatar src="/assets/images/logos/vertical-background.png" alt="logo" size="large" type="circle flexible" />
        <Text text="Teste" uppercase />
      </Styled.ChatHeader>

      <Styled.ChatContainer>

        <MessageList
          className="message-list"
          lockable
          toBottomHeight="100%"
          dataSource={messageData}
        />

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
