import React, { useContext, useState } from 'react';
import Prop from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './StaffOpportunities-Styles';
import { GridProposals } from '../../../../components/elements/ProposalElements/GridProposals/GridProposals';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { Title } from '../../../../components/elements/Title/Title';
import { AuthDropdown } from '../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { AuthSearch } from '../../../../components/elements/AuthElements/AuthSearch/AuthSearch';

export function StaffOpportunities() {
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  const location = useLocation();
  const selectedProposal = location.state?.selectedProposal || null;

  const getProposals = (type) => s2tState.proposals[playerState.profile.info.modality || 'male']?.[playerState.profile.info.competitiveCategory || 'professional']?.[type || 'clubs'] || [];

  const proposals = [
    ...getProposals('agents'),
    ...getProposals('clubs'),
  ];

  return (
    <Styled.StaffOpportunitiesContainer>

      <GridProposals type="staff" title={t('staff_opportunities')} items={s2tState.staffProposals} selectedproposal={selectedProposal} />

    </Styled.StaffOpportunitiesContainer>
  );
}
