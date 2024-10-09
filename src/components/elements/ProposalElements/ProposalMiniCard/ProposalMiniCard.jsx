import Prop from 'prop-types';
import React, { useState } from 'react';
import { Chat as ChatIcon } from '@styled-icons/fluentui-system-filled/Chat';
import {
  ChatArrowBack, ChatMultiple, ChatWarning, FormNew, SportSoccer,
} from '@styled-icons/fluentui-system-filled';
import { useNavigate } from 'react-router-dom';
import * as Styled from './ProposalMiniCard-Styles';

import { Text } from '../../Text/Text';
import { Column } from '../../../ColumnContainer/Column';
import { IconDiv } from '../../IconDiv/IconDiv';
import { theme } from '../../../../styles/theme';
import { ProposalModal } from '../ProposalModal/ProposalModal';

export function ProposalMiniCard({
  item,
}) {
  const navigate = useNavigate();

  const handleCardClick = (selectedProposal) => {
    // alterar 'player' para o nome do dashboard do usuário atual
    navigate('/player-dashboard/opportunities', { state: { selectedProposal } });
  };

  return (
    <Styled.ProposalMiniCardContainer onClick={() => handleCardClick(item)}>

      {/* <Styled.ProposalImage src={imagesrc} alt="Foto de perfil" /> */}

      <IconDiv hovercolor="none">
        <FormNew />
      </IconDiv>

      <Styled.Line />

      <Column>
        <Styled.ProposalText>
          {item.details.from && <Text text={item.details.from} />}
          {item.details.opportunity && <Text text={item.details.opportunity} uppercase />}
          {item.details.category && <Text text={item.details.category} />}
        </Styled.ProposalText>
      </Column>

    </Styled.ProposalMiniCardContainer>
  );
}

ProposalMiniCard.propTypes = {
  item: Prop.object,
};
