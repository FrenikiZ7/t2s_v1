import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ImageAdd as AddImageIcon, VideoAdd as AddVideoIcon } from '@styled-icons/fluentui-system-filled';
import { useTranslation } from 'react-i18next';
import { Close } from '@styled-icons/material-outlined';
import ReactPlayer from 'react-player';
import * as Styled from './NewPost-Styles';
import { TextArea } from '../../TextArea/TextArea';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthIconFile } from '../../AuthElements/AuthIconFile/AuthIconFile';
import { AuthButton } from '../../AuthElements/AuthButton/AuthButton';
import { theme } from '../../../../styles/theme';
import { AuthForm } from '../../AuthElements/AuthForm/AuthForm';
import { Button } from '../../Button/Button';
import { Row } from '../../../RowContainer/Row';
import { Subtitle } from '../../Subtitle/Subtitle';

export function NewPost({ children }) {
  const { t } = useTranslation();
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaType, setMediaType] = useState('');

  const [postData, setPostData] = useState({
    text: '',
    media: '',
  });

  const handleAddMedia = async (event, type) => {
    event.preventDefault();
    const newFile = event.target.files[0];

    if (newFile) {
      try {
        setMediaUrl(URL.createObjectURL(newFile));
        setMediaType(type);
        setPostData((prevData) => ({ ...prevData, media: newFile }));
      } catch (error) {
        console.error(t(`${type}_upload_error`), error);
      }
    }
  };

  const handleRemoveMedia = () => {
    setMediaUrl('');
    setMediaType('');
    setPostData((prevData) => ({ ...prevData, media: '' }));
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <Styled.NewPost>
      <Row>
        <Subtitle text="Publicação" uppercase />
        <IconDiv hovercolor={theme.colors.red} onclick={handleRemoveMedia}>
          <Close />
        </IconDiv>
      </Row>

      <AuthForm onSubmit={(e) => handleSubmit(e)}>
        <TextArea
          placeholder={t('your_post')}
          name="postText"
          value={postData.text}
          onChange={(e) => setPostData((prevData) => ({ ...prevData, text: e.target.value }))}
        />

        {mediaUrl && (
        <Styled.MediaAttached>
          <IconDiv hovercolor={theme.colors.red} onclick={handleRemoveMedia}>
            <Close />
          </IconDiv>

          {mediaType === 'image' && <img src={mediaUrl} alt="" />}
          {mediaType === 'video' && (
            <ReactPlayer
              url={mediaUrl}
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
            id="addPostImage"
            name={t('add_podt_image_button')}
            onChange={(e) => handleAddMedia(e, 'image')}
            hovercolor="none"
          >
            <AddImageIcon />
          </AuthIconFile>

          <AuthIconFile
            id="addPostVideo"
            name={t('add_post_video_button')}
            accept="video/*"
            onChange={(e) => handleAddMedia(e, 'video')}
            hovercolor="none"
          >
            <AddVideoIcon />
          </AuthIconFile>
        </Styled.Icons>

        {(postData.text || postData.media) ? (
          <AuthButton
            name="post_submit"
            id="post_submit"
            value={t('publish')}
          />
        ) : (
          <Button
            text={t('publish')}
            bgcolor="rgba(257,257,257, 0.1)"
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
            border={theme.colors.darkgray}
            borderhover={theme.colors.lightgray}
          />
        )}

      </AuthForm>

    </Styled.NewPost>
  );
}

NewPost.propTypes = {
  children: PropTypes.node.isRequired,
};
