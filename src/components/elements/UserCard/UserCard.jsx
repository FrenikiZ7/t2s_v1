import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './UserCard-Styles';
import { CenterColumn } from '../../CenterColumn/CenterColumn';
import { InfoInRow } from '../InfoInRow/InfoInRow';
import { Subtitle } from '../Subtitle/Subtitle';
import { StyledLink } from '../StyledLink/StyledLink';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

export function UserCard({
  path, profileimage, position, age, bestleg, name, weight, height, category, favorite,
}) {
  const { t } = useTranslation();
  return (
    <Styled.UserCardElement>

      {favorite && <FavoriteIcon />}

      <StyledLink path={path}>

        <Styled.ProfileImage src={profileimage} alt={name} />

        <Styled.ProfileInfo>
          <CenterColumn>
            <InfoInRow infotitle={t('position')} info={position} />
            <InfoInRow infotitle={t('age')} info={`${age} Anos`} />
            <InfoInRow infotitle={t('best_leg')} info={bestleg} />
          </CenterColumn>

          <Subtitle text={name} uppercase />

          <CenterColumn>

            <InfoInRow
              infotitle={t('weight')}
              info={`${weight} KG`}
            />
            <InfoInRow infotitle={t('height')} info={`${height} M`} />
            <InfoInRow infotitle={t('category')} info={category} />

          </CenterColumn>

        </Styled.ProfileInfo>

      </StyledLink>

    </Styled.UserCardElement>
  );
}

UserCard.propTypes = {
  path: Prop.string,
  profileimage: Prop.string,
  position: Prop.string,
  age: Prop.number,
  bestleg: Prop.string,
  name: Prop.string,
  weight: Prop.number,
  height: Prop.number,
  category: Prop.string,
  favorite: Prop.bool,
};
