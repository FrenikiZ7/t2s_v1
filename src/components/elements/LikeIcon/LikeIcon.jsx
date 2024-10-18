import Prop from 'prop-types';
import React, { useState } from 'react';
import { Like } from '@styled-icons/boxicons-regular/Like';
import { useTranslation } from 'react-i18next';
import * as Styled from './LikeIcon-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';

export function LikeIcon({ isLiked, id, color = theme.colors.white }) {
  const { t } = useTranslation();
  const [liked, setLiked] = useState(isLiked);

  const handleLikeClick = (event) => {
    event.stopPropagation();

    setLiked(!liked);
  };

  return (
    <Styled.LikeIconElement isLiked={liked ? 'liked' : undefined} color={color}>
      <IconDiv
        name={liked ? t('remove_like') : t('like')}
        hovercolor={liked ? theme.colors.red : theme.colors.white}
        onclick={handleLikeClick}
      >
        <Like />
      </IconDiv>
    </Styled.LikeIconElement>
  );
}

LikeIcon.propTypes = {
  id: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]),
  isLiked: Prop.bool,
  color: Prop.string,
};
