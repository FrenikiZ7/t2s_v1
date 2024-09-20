import Prop from 'prop-types';
import React, { useState } from 'react';
import { ImageAdd as AddImageIcon, VideoAdd as AddVideoIcon } from '@styled-icons/fluentui-system-filled';

import { useTranslation } from 'react-i18next';
import { Close } from '@styled-icons/material-outlined';
import ReactPlayer from 'react-player';
import * as Styled from './NewPub-Styles';
import { TextArea } from '../../TextArea/TextArea';
import { Row } from '../../../RowContainer/Row';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthIconFile } from '../../AuthElements/AuthIconFile/AuthIconFile';
import { Button } from '../../Button/Button';
import { AuthButton } from '../../AuthElements/AuthButton/AuthButton';
import { theme } from '../../../../styles/theme';

export function NewPub({ children }) {
  const { t } = useTranslation();
  const [videoUrl, setVideoUrl] = useState();
  const [imageUrl, setImageUrl] = useState();

  const [publicationData, setPublicationData] = useState({
    text: '',
    media: '',
  });

  const handleAddVideo = async (event) => {
    event.preventDefault();
    const newFile = event.target.files[0];

    if (newFile) {
      const formData = new FormData();
      formData.append('video_file', newFile);

      try {
        setVideoUrl(URL.createObjectURL(newFile));
        setImageUrl('');
        setPublicationData((prevData) => ({ ...prevData, media: newFile }));
      } catch (error) {
        console.error(t('video_upload_error'), error);
      }
    }
  };

  const handleAddImage = async (event) => {
    event.preventDefault();
    const newFile = event.target.files[0];

    if (newFile) {
      const formData = new FormData();
      formData.append('video_file', newFile);

      try {
        setImageUrl(URL.createObjectURL(newFile));
        setVideoUrl('');
        setPublicationData((prevData) => ({ ...prevData, media: newFile }));
      } catch (error) {
        console.error(t('image_upload_error'), error);
      }
    }
  };

  const handleRemoveMedia = () => {
    setVideoUrl('');
    setImageUrl('');
    setPublicationData((prevData) => ({ ...prevData, media: '' }));
  };

  console.log(publicationData);

  return (
    <Styled.NewPub>
      <TextArea
        placeholder="Sua publicação"
        name="publicationText"
        value={publicationData.text}
        onChange={(e) => setPublicationData((prevData) => ({ ...prevData, text: e.target.value }))}
      />

      {(videoUrl || imageUrl) && (
      <Styled.MediaAttached>

        <IconDiv hovercolor={theme.colors.red} onclick={handleRemoveMedia}>
          <Close />
        </IconDiv>

        {imageUrl && (
        <img src={imageUrl} alt="" srcSet="" />
        )}

        {videoUrl && (
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          playsinline
        />
        )}

      </Styled.MediaAttached>
      )}

      <Styled.Icons>

        <AuthIconFile
          id="addPublicationImage"
          name={t('add_pub_image_button')}
          onChange={handleAddImage}
        >
          <AddImageIcon />
        </AuthIconFile>

        <AuthIconFile
          id="addPublicationVideo"
          name={t('add_pub_video_button')}
          accept="video/*"
          onChange={handleAddVideo}
        >
          <AddVideoIcon />
        </AuthIconFile>

      </Styled.Icons>

      <AuthButton
        name="publish_submit"
        id="publish_submit"
        value={t('publish')}
      />

    </Styled.NewPub>
  );
}

NewPub.propTypes = {
  children: Prop.node.isRequired,
};
