import Prop from 'prop-types';
import React, { useState, useContext } from 'react';
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
import { addVideoFile } from '../../../../../contexts/s2tContext/s2tActions';

import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';

export function T2sVideo({ onCloseClick, onBackClick }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [newVideo, setNewVideo] = useState('');

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const confirmVideoUpload = async (event) => {
    event.preventDefault();
    onCloseClick();

    const newFile = newVideo;

    if (newFile) {
      addVideoFile(s2tDispatch, newFile);
      setNewVideo(undefined);
      onCloseClick();
    }
  };

  const handleUploadVideo = async (event) => {
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

      <AuthForm onSubmit={confirmVideoUpload}>

        {/* <AuthInput title={t('name')} type="text" placeholder={t('video_name')} /> */}
        <AuthFile
          id="addVideo"
          accept="video/*"
          onChange={handleUploadVideo}
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
