import Prop from 'prop-types';
import React, { useState } from 'react';
import {
  Avatar, Button, Input, MessageList,
} from 'react-chat-elements';
import * as Styled from './Chat-Styles';
import { Text } from '../../Text/Text';
import { theme } from '../../../../styles/theme';

export function Chat({ children }) {
  const [message, setMessage] = useState('');

  const messageData = [
    {
      avatar: '/assets/images/logos/vertical-background.png',
      position: 'right',
      type: 'text',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      date: new Date(),
    },
    {
      avatar: '/assets/images/logos/vertical-background.png',
      position: 'left',
      type: 'text',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      date: new Date(),
    },
  ];

  const handleSend = () => {
    console.log('Message sent:', message);
    setMessage('');
  };

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

        <Input
          placeholder="Digite sua mensagem..."
          defaultValue=""
          onChange={(e) => setMessage(e.target.value)}
          rightButtons={(
            <Button
              onClick={handleSend}
              text="enviar"
              bgcolor={theme.colors.quaternary}
              bghover={theme.colors.secondary}
              border={theme.colors.quaternary}
              borderhover={theme.colors.secondary}
            />
          )}
        />
      </Styled.ChatContainer>
    </Styled.ChatWrapper>

  );
}

Chat.propTypes = {
  children: Prop.node.isRequired,
};
