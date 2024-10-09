// import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './StaffFavorites-Style';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { GridProposals } from '../../../../../components/elements/ProposalElements/GridProposals/GridProposals';
import { PublicVideoSlide } from '../../../../../components/elements/ProfileSlideElements/PublicVideoSlide/PublicVideoSlide';

export function StaffFavorites() {
  const { t } = useTranslation();
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.StaffFavoritesContainer>
      <PublicVideoSlide items={s2tState.videos.trending} title={t('favorite_videos')} publicview lazy />

      {/* A ideia é chamar o componente passando para ele no items as oportunidades que o usuário favoritou.
      Aqui estou passando apenas as oportunidades dos clubs para ter um exemplo */}
      <GridProposals title={t('favorite_opportunities')} items={s2tState.proposals.male.professional.clubs} />
    </Styled.StaffFavoritesContainer>
  );
}

StaffFavorites.propTypes = {
  // children: Prop.node.isRequired,
};
