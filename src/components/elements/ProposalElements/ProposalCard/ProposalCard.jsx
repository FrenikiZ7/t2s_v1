import Prop from 'prop-types';
import React from 'react';
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

export function ProposalCard({
  id, from = '', date = '', opportunity = '', country = '', org = '', orglogo = '', orgpath = '', category = '', onclick, publicview, ownerview, isapplied,
}) {
  const { t } = useTranslation();
  return (
    <Styled.ProposalCardElement onClick={onclick}>

      {/* {orglogo && <Styled.ProposalImage src={orglogo} alt="Logo da organização" />} */}

      <IconDiv color={isapplied ? theme.colors.primary : theme.colors.white} hovercolor="none">
        <FormNew />
      </IconDiv>

      <CenterColumn>

        {from && <InfoInRow infotitle={t('opportunity_from')} info={t(from)} />}
        {date && <InfoInRow infotitle={t('published_in')} info={date} />}
        {category && <InfoInRow infotitle={t('category')} info={t(category)} />}

      </CenterColumn>

      {opportunity && <Subtitle text={opportunity} uppercase />}

      <CenterColumn>
        {country && <Text text={t(country)} />}
        {org && <StyledLink path={orgpath} text={org} />}
      </CenterColumn>

      {publicview && <FavoriteIcon />}
      {ownerview && <RemoveIcon id={id} message={t('delete_opportunity_question')} />}

    </Styled.ProposalCardElement>
  );
}
