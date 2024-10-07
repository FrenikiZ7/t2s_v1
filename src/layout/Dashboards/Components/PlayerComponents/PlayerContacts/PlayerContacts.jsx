import Prop from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './PlayerContacts-Styles';
import { MessagesList } from '../../../../../components/elements/ChatElements/MessagesList/MessagesList';
import { Chat } from '../../../../../components/elements/ChatElements/Chat/Chat';
import { MessageCenter } from '../../../../../components/elements/ChatElements/MessageCenter/MessageCenter';

export function PlayerContacts() {
  const { t } = useTranslation();

  // Dados de teste para o chat
  const [contactsData, setContactsData] = useState([
    {
      id: 1,
      avatar: '/assets/images/profile/spfc.jpg',
      alt: 'São Paulo FC',
      title: 'São Paulo',
      subtitle: 'Olá',
      date: new Date(),
      unread: 0,
      accepted: true,
      active: false,

      messages: [
        {
          position: 'left',
          type: 'text',
          text: 'Olá',
          date: new Date(),
        },
        {
          position: 'right',
          type: 'text',
          text: 'Olá',
          date: new Date(),
        },
      ],
    },

    {
      id: 2,
      avatar: '/assets/images/profile/profile.png',
      alt: 'Léo Pelé',
      title: 'Léo Pelé',
      subtitle: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
      date: new Date(),
      accepted: undefined,
      unread: 1,
      active: false,
      messages: [
        {
          position: 'left',
          type: 'text',
          text: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
          date: new Date(),
        },
      ],
    },

    {
      id: 3,
      avatar: '/assets/images/users/athletes.png',
      alt: 'Wellington Rato',
      title: 'Wellington Rato',
      subtitle: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
      date: new Date(),
      unread: 1,
      accepted: undefined,
      active: false,
      messages: [
        {
          position: 'left',
          type: 'text',
          text: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
          date: new Date(),
        },
      ],
    },
    // {
    //   id: 4,
    //   avatar: '/assets/images/profile/spfc.jpg',
    //   alt: 'São Paulo FC',
    //   title: 'Sâo Paulo',
    //   subtitle: 'Ganhar libertadores? vou nadakkkkk',
    //   date: new Date(),
    //   unread: 1,
    //   accepted: undefined,
    //   active: false,

    //   messages: [
    //     {
    //       position: 'left',
    //       type: 'text',
    //       text: 'Ganhar libertadores? vou nadakkkkk',
    //       date: new Date(),
    //     },
    //   ],
    // },

    // {
    //   id: 5,
    //   avatar: '/assets/images/profile/profile.png',
    //   alt: 'Léo Pelé',
    //   title: 'Léo Pelé',
    //   subtitle: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
    //   date: new Date(),
    //   accepted: undefined,
    //   unread: 1,
    //   active: false,
    //   messages: [
    //     {
    //       position: 'left',
    //       type: 'text',
    //       text: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
    //       date: new Date(),
    //     },
    //   ],
    // },

    // {
    //   id: 6,
    //   avatar: '/assets/images/users/athletes.png',
    //   alt: 'Wellington Rato',
    //   title: 'Wellington Rato',
    //   subtitle: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
    //   date: new Date(),
    //   unread: 1,
    //   accepted: undefined,
    //   active: false,
    //   messages: [
    //     {
    //       position: 'left',
    //       type: 'text',
    //       text: 'Oi, vi a oportunidade e estou muito interessado. Podemos conversar para discutir mais detalhes?',
    //       date: new Date(),
    //     },
    //   ],
    // },
  ]);

  return (
    <Styled.PlayerContactsContainer>
      <MessageCenter data={contactsData} />
    </Styled.PlayerContactsContainer>
  );
}

PlayerContacts.propTypes = {};
