import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './TrendingVideos-Styles';
import { Banner } from '../Banner/Banner';
import { Column } from '../../ColumnContainer/Column';
import { Subtitle } from '../Subtitle/Subtitle';
import { AuthDropdown } from '../AuthElements/AuthDropdown/AuthDropdown';
import { PublicVideoSlide } from '../ProfileSlideElements/PublicVideoSlide/PublicVideoSlide';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';

export function TrendingVideos({ slidesPerView = 3, backgroundImageSrc }) {
  const { t } = useTranslation();
  const [videosCategory, setVideosCategory] = useState('professional');

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.TrendingVideosContainer backgroundImageSrc={backgroundImageSrc} fullscreenMode={slidesPerView === 3}>
      <Column>
        <Subtitle text={t('trending_videos')} uppercase size="25px" />
        <AuthDropdown
          id="trendingVideosOptions"
          placeholder={t('select_category')}
          options={s2tState.formOptions.competitiveCategory}
          onDropdownChange={(option) => setVideosCategory(option)}
          selectedvalue={videosCategory}
        />
        <PublicVideoSlide slidesPerView={slidesPerView} items={s2tState?.videos?.trending[videosCategory] || []} />
      </Column>

    </Styled.TrendingVideosContainer>
  );
}

TrendingVideos.propTypes = {
  slidesPerView: Prop.number,
  backgroundImageSrc: Prop.string,
};
