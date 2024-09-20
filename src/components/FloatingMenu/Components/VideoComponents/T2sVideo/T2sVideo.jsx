import Prop from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Close } from '@styled-icons/evaicons-solid';
import { ArrowBack } from '@styled-icons/material-outlined';
import * as Styled from './T2sVideo-Styles';
import { theme } from '../../../../../styles/theme';
import { AuthForm } from '../../../../elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../../../elements/AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../../../../elements/AuthElements/AuthButton/AuthButton';
import { Subtitle } from '../../../../elements/Subtitle/Subtitle';
import { IconDiv } from '../../../../elements/IconDiv/IconDiv';
import { Row } from '../../../../RowContainer/Row';
import { AuthFile } from '../../../../elements/AuthElements/AuthFile/AuthFile';
import { useAuth } from '../../../../../contexts/AuthContext/AuthContext';

export function T2sVideo({ onCloseClick, onBackClick }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [newVideo, setNewVideo] = useState('');

  const confirmAddVideo = async (event) => {
    event.preventDefault();
    onCloseClick();

    // if (!currentUser) {
    //   console.error(t('not_logged'));
    //   return;
    // }

    const newFile = newVideo;

    if (newFile) {
      try {
        const response = await axios.post(`https://talent2show.onrender.com/api/userVideos/${currentUser.id}/upload`, newFile, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setNewVideo(undefined);
        onCloseClick();
      } catch (error) {
        console.error(t('video_upload_error'), error);
      }
    }
  };

  const handleAddVideo = async (event) => {
    event.preventDefault();

    const newFile = event.target.files[0];

    if (newFile) {
      const formData = new FormData();
      formData.append('video_file', newFile);

      try {
        setNewVideo(newFile);
      } catch (error) {
        console.error(t('video_upload_error'), error);
      }
    }
  };

  return (
    <Styled.T2sVideoContainer>

      <Row>
        <IconDiv hovercolor={theme.colors.primary} onclick={onBackClick}>
          <ArrowBack />
        </IconDiv>
        <Subtitle text={t('upload_your_video')} uppercase />
        <IconDiv hovercolor={theme.colors.mediumred} onclick={onCloseClick}>
          <Close />
        </IconDiv>
      </Row>

      <AuthForm onSubmit={confirmAddVideo}>

        {/* <AuthInput title={t('name')} type="text" placeholder={t('video_name')} /> */}
        <AuthFile
          id="addVideo"
          accept="video/*"
          onChange={handleAddVideo}
        />

        <AuthButton
          id="t2sVideoUpload"
          name={t('confirm')}
          value={t('confirm')}
          bgcolor={theme.colors.lightprimary}
          bghover={theme.colors.primary}
        />
      </AuthForm>

    </Styled.T2sVideoContainer>
  );
}

T2sVideo.propTypes = {
  onCloseClick: Prop.func,
  onBackClick: Prop.func,
};
