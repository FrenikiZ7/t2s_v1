import React, { useContext } from 'react';
import Prop from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as Styled from './MyOpportunities-Styles';
import { GridEditableProposals } from '../../../../components/elements/ProposalElements/GridEditableProposals/GridEditableProposals';

export function MyOpportunities({ playerOpportunities, staffOpportunities }) {
  const { t } = useTranslation();
  return (
    <Styled.MyOpportunitiesContainer>

      <GridEditableProposals type="player" title={t('my_opportunities_player')} items={playerOpportunities} />
      <GridEditableProposals type="staff" title={t('my_opportunities_staff')} items={staffOpportunities} />

    </Styled.MyOpportunitiesContainer>
  );
}

MyOpportunities.propTypes = {
  playerOpportunities: Prop.arrayOf(Prop.object),
  staffOpportunities: Prop.arrayOf(Prop.object),
};
