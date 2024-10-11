import Prop from 'prop-types';
import React, { useContext } from 'react';
import { FormNew, SportSoccer } from '@styled-icons/fluentui-system-filled';
import { useTranslation } from 'react-i18next';
import * as Styled from './ProposalCard-Styles';
import { StyledLink } from '../../StyledLink/StyledLink';
import { InfoInRow } from '../../InfoInRow/InfoInRow';
import { CenterColumn } from '../../../CenterColumn/CenterColumn';
import { Subtitle } from '../../Subtitle/Subtitle';
import { Text } from '../../Text/Text';
import { FavoriteIcon } from '../../FavoriteIcon/FavoriteIcon';
import { RemoveIcon } from '../../RemoveIcon/RemoveIcon';
import { IconDiv } from '../../IconDiv/IconDiv';
import { theme } from '../../../../styles/theme';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { removeProposal } from '../../../../contexts/s2tContext/s2tActions';

export function ProposalCard({
  proposal, onclick, publicview, ownerview,
}) {
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const handleRemoveProposal = () => {
    if (proposal) {
      removeProposal(s2tDispatch, proposal);
    }
  };

  return (
    <Styled.ProposalCardElement onClick={onclick}>

      {proposal && (
      <>
        {/* {orglogo && <Styled.ProposalImage src={orglogo} alt="Logo da organização" />} */}

        <IconDiv color={proposal.details.isapplied ? theme.colors.primary : theme.colors.white} hovercolor="none">
          <FormNew />
        </IconDiv>

        <CenterColumn>

          {proposal.details.from && <InfoInRow infotitle={t('opportunity_from')} info={t(proposal.details.from)} />}
          {proposal.details.date && <InfoInRow infotitle={t('published_in')} info={proposal.details.date} />}
          {proposal.details.category && <InfoInRow infotitle={t('category')} info={t(proposal.details.category)} />}

        </CenterColumn>

        {proposal.details.opportunity && <Subtitle text={proposal.details.opportunity} uppercase />}

        <CenterColumn>
          {proposal.details.country && <Text text={t(proposal.details.country)} />}
          {proposal.details.org && <StyledLink path={proposal.details.orgpath} text={proposal.details.org} />}
        </CenterColumn>

        {publicview && <FavoriteIcon />}
        {ownerview && <RemoveIcon onRemove={handleRemoveProposal} id={proposal.id} message={t('delete_opportunity_question')} />}

      </>
      )}
    </Styled.ProposalCardElement>
  );
}

ProposalCard.propTypes = {
  ownerview: Prop.bool,
  publicview: Prop.bool,
  proposal: Prop.arrayOf(Prop.object).isRequired,
  onclick: Prop.bool,
};
