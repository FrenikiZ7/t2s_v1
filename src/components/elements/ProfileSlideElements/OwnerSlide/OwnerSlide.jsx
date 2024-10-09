import Prop, { bool } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import { Fullscreen } from '@styled-icons/material-outlined';
import { Delete } from '@styled-icons/fluentui-system-filled';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './OwnerSlide-Styles';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthIconFile } from '../../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../../styles/theme';
import { ImageModal } from '../../ImageModal/ImageModal';
import { Popup } from '../../Popup/Popup';
import { Column } from '../../../ColumnContainer/Column';
import { useAuth } from '../../../../contexts/AuthContext/AuthContext';

// Galeria de fotos utilizada quando o usuário acessa o próprio perfil
export function OwnerSlide({
  items, title,
}) {
  const [fullscreenImage, setFullscreenImage] = useState('');
  const [deleteImage, setDeleteImage] = useState('');
  const [newImage, setNewImage] = useState('');
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    setImagesData(items);
  }, [items]);

  const handleFullscreen = (image) => {
    setFullscreenImage(image.src);
  };

  const handleIsDeleting = (image) => {
    setDeleteImage(deleteImage === image.id ? '' : image.id);
  };

  const handleConfirmDelete = (image) => {
    // lógica para excluir imagem
    setDeleteImage('');
  };

  const handleAddImage = async (event) => {
    if (!currentUser) {
      console.error(t('not_logged'));
      return;
    }

    const newFile = event.target.files[0];
    console.log(newFile);

    if (newFile) {
      const formData = new FormData();
      formData.append('image_file', newFile);

      try {
        const response = await axios.post(`https://talent2show.onrender.com/api/userPhotos/${currentUser.id}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setNewImage(response.data.image_file);
      } catch (error) {
        console.error(t('image_upload_error'), error);
      }
    }
  };

  return (
    <Styled.OwnerSlideWrapper>
      <Styled.OwnerSlideElement>
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
            <SwiperSlide
              key={image.id}
            >
              <Styled.MediaWrapper>

                <Styled.TopIconsWrapper>

                  <IconDiv
                    onclick={() => handleIsDeleting(image)}
                    active={deleteImage === image.id}
                    activecolor={theme.colors.red}
                    hovercolor={theme.colors.lightred}
                  >
                    <Delete />
                  </IconDiv>

                </Styled.TopIconsWrapper>

                <div className="swiper-zoom-container">
                  <img src={image.src} alt={image.alt} />
                </div>

                <Styled.BottomIconsWrapper>

                  <IconDiv
                    active={fullscreenImage === image.src}
                    name={t('fullscreen')}
                    onclick={() => handleFullscreen(image)}
                  >
                    <Fullscreen />
                  </IconDiv>

                </Styled.BottomIconsWrapper>

                <Column>
                  <Popup
                    isopen={deleteImage === image.id}
                    title={t('delete_image_question')}
                    firstoption={t('yes')}
                    secondoption={t('no')}
                    onfirstclick={() => handleConfirmDelete(image)}
                    onsecondclick={() => handleIsDeleting('')}
                  />
                </Column>

              </Styled.MediaWrapper>

            </SwiperSlide>
          ))}

          <SwiperSlide>
            <AuthIconFile onChange={handleAddImage} id="addImage" accept="image/*" hovercolor={theme.colors.secondary} name={t('add_photo_button')}>
              <AddIcon />
            </AuthIconFile>
          </SwiperSlide>

        </Swiper>

      </Styled.OwnerSlideElement>

      <ImageModal imagesrc={fullscreenImage} onclick={() => setFullscreenImage('')} />

    </Styled.OwnerSlideWrapper>
  );
}

OwnerSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
