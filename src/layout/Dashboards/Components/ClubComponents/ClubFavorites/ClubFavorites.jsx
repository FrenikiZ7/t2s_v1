import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './ClubFavorites-Style';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { GridPlayers } from '../../../../../components/elements/GridPlayers/GridPlayers';
import { PublicSlide } from '../../../../../components/elements/ProfileSlideElements/PublicSlide/PublicSlide';
import { PublicVideoSlide } from '../../../../../components/elements/ProfileSlideElements/PublicVideoSlide/PublicVideoSlide';

export function ClubFavorites() {
  const { t } = useTranslation();
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.ClubFavoritesContainer>
      {/* A ideia é chamar o componente passando para ele no items os jogadores que o usuário favoritou.
      Aqui estou passando todos apenas para ter um exemplo */}
      <GridPlayers title={t('favorite_players')} items={s2tState.users.players} publicview />

      <PublicVideoSlide items={s2tState?.videos?.trending || []} title={t('trending_videos')} publicview />

      <PublicVideoSlide items={s2tState?.videos?.trending || []} title={t('favorite_videos')} publicview />
    </Styled.ClubFavoritesContainer>
  );
}

ClubFavorites.propTypes = {
};
