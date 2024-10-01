import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Avatar, Input, MessageList,
} from 'react-chat-elements';
import * as Styled from './Chat-Styles';
import { Text } from '../../Text/Text';
import { theme } from '../../../../styles/theme';
import { Button } from '../../Button/Button';

export function Chat({ contact }) {
  const [message, setMessage] = useState('');

  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    setContactData(contact);
  }, [contact]);

  const handleSend = () => {
    setMessage('');
  };

  return (
    <Styled.ChatWrapper>

      <Styled.ChatHeader>
        <Avatar src={contact.avatar} alt={contact.alt} size="large" type="circle flexible" />
        <Text text={contact.title} uppercase />
      </Styled.ChatHeader>

      <Styled.ChatContainer>

        <MessageList
          className="message-list"
          lockable
          toBottomHeight="100%"
          dataSource={contact.messages}
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
Chat.propTypes = {
  contact: Prop.arrayOf(Prop.object).isRequired,
};
