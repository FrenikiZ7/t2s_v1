import Prop, { bool } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Fullscreen } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import * as Styled from './PublicVideoSlide-Styles';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { FavoriteIcon } from '../../FavoriteIcon/FavoriteIcon';
import { RateIcons } from '../../RateIcons/RateIcons';
import { ReportModal } from '../../ReportModal/ReportModal';
import { ReportIcon } from '../../ReportIcon/ReportIcon';
import { Row } from '../../../RowContainer/Row';
import { theme } from '../../../../styles/theme';
import { Text } from '../../Text/Text';

// Galeria de vídeos utilizada quando o usuário acessa o perfil de outro usuário
export function PublicVideoSlide({
  items, title, slidesPerView = 2,
}) {
  const { t } = useTranslation();
  const [reportingVideo, setReportingVideo] = useState('');
  const [videosData, setVideosData] = useState([]);

  const handleReporting = (video) => {
    setReportingVideo(reportingVideo ? '' : video.id);
  };

  useEffect(() => {
    setVideosData(items);
  }, [items]);

  return (
    <Styled.PublicVideoSlideWrapper>
      <Styled.PublicVideoSlideElement>
        <Title text={title} uppercase />
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={15}
          navigation
          zoom
          lazy="true"
          breakpoints={{
            // Breakpoint for tablet screens
            1240: {
              slidesPerView,
            },
            // Breakpoint for tablet screens
            768: {
              slidesPerView: 2,
            },
            // Breakpoint for mobile screens
            0: {
              slidesPerView: 1,
            },
          }}
        >

          {videosData && videosData.length > 0 && videosData.map((video) => (
            <SwiperSlide key={video.id}>

              <Styled.MediaWrapper>

                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="100%"
                  controls
                  playsinline
                />

                <Row>

                  <Styled.BottomIconsWrapper>

                    <FavoriteIcon
                      isfavorite={video.isfavorite}
                      id={video.id}
                      color={theme.colors.black}
                    />

                    <ReportIcon
                      isreporting={reportingVideo === video.id}
                      onclick={() => handleReporting(video)}
                      color={theme.colors.black}
                    />

                  </Styled.BottomIconsWrapper>

                  <Styled.BottomIconsWrapper>

                    <RateIcons
                      ratevalue={video.rateValue}
                      mediaid={video.id}
                      color={theme.colors.black}
                    />

                  </Styled.BottomIconsWrapper>
                </Row>

              </Styled.MediaWrapper>

            </SwiperSlide>
          ))}

        </Swiper>

      </Styled.PublicVideoSlideElement>

      <ReportModal id={reportingVideo} onclick={() => setReportingVideo('')} />

    </Styled.PublicVideoSlideWrapper>
  );
}

PublicVideoSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
  slidesPerView: Prop.number,
};
