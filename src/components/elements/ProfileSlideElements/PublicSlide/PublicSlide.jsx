import Prop, { bool } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Fullscreen } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as Styled from './PublicSlide-Styles';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { FavoriteIcon } from '../../FavoriteIcon/FavoriteIcon';
import { RateIcons } from '../../RateIcons/RateIcons';
import { ReportModal } from '../../ReportModal/ReportModal';
import { ImageModal } from '../../ImageModal/ImageModal';
import { ReportIcon } from '../../ReportIcon/ReportIcon';

// Galeria de fotos utilizada quando o usuário acessa o perfil de outra pessoa
export function PublicSlide({
  items, title,
}) {
  const { t } = useTranslation();
  const [reportingImage, setReportingImage] = useState('');
  const [fullscreenImage, setFullscreenImage] = useState('');
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    setImagesData(items);
  }, [items]);

  const handleFullscreen = (image) => {
    setFullscreenImage(image.src);
  };

  const handleReporting = (image) => {
    setReportingImage(reportingImage ? '' : image.id);
  };

  return (
    <Styled.PublicSlideWrapper>
      <Styled.PublicSlideElement>
        <Title text={title} uppercase />
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          navigation
          zoom
          lazy="true"
          breakpoints={{
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

          {imagesData && imagesData.length > 0 && imagesData.map((image) => (
            <SwiperSlide key={image.id}>

              <Styled.MediaWrapper>

                <Styled.TopIconsWrapper>

                  <ReportIcon
                    isreporting={reportingImage === image.id}
                    onclick={() => handleReporting(image)}
                  />

                  <FavoriteIcon
                    isfavorite={image.isfavorite}
                    id={image.id}
                  />

                </Styled.TopIconsWrapper>

                <div className="swiper-zoom-container">
                  <img src={image.src} alt={image.alt} />
                </div>

                <Styled.BottomIconsWrapper>

                  <RateIcons
                    ratevalue={image.rateValue}
                    mediaid={image.id}
                  />

                  <IconDiv
                    active={fullscreenImage === image.src}
                    name={t('fullscreen')}
                    onclick={() => handleFullscreen(image)}
                  >
                    <Fullscreen />
                  </IconDiv>

                </Styled.BottomIconsWrapper>

              </Styled.MediaWrapper>

            </SwiperSlide>
          ))}

        </Swiper>

      </Styled.PublicSlideElement>

      <ReportModal id={reportingImage} onclick={() => setReportingImage('')} />

      <ImageModal imagesrc={fullscreenImage} onclick={() => setFullscreenImage('')} />

    </Styled.PublicSlideWrapper>
  );
}

PublicSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
