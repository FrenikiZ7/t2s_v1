import Prop from 'prop-types';
import React, { useState } from 'react';
import { Avatar } from 'react-chat-elements';
import ReactPlayer from 'react-player';
import { DotsHorizontalRounded as ThreeDots } from '@styled-icons/boxicons-regular/DotsHorizontalRounded';
import { Share } from '@styled-icons/fluentui-system-filled';
import * as Styled from './PostCard-Styles';
import { StyledLink } from '../../StyledLink/StyledLink';
import { Row } from '../../../RowContainer/Row';
import { Text } from '../../Text/Text';
import { IconDiv } from '../../IconDiv/IconDiv';
import { FavoriteIcon } from '../../FavoriteIcon/FavoriteIcon';
import { LikeIcon } from '../../LikeIcon/LikeIcon';
import { theme } from '../../../../styles/theme';
import { Column } from '../../../ColumnContainer/Column';
import { RateIcons } from '../../RateIcons/RateIcons';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { AuthSearch } from '../../AuthElements/AuthSearch/AuthSearch';
import { PostShareMenu } from '../PostShareMenu/PostShareMenu';

export function PostCard({
  mediaType, src, name, avatar, alt, isFavorite, isLiked, text,
}) {
  const [isSharing, setIsSharing] = useState(false);

  return (
    <Styled.PostCardContainer>
      <Row>
        <Column>
          <Avatar src={avatar} alt={name} size="xlarge" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <IconDiv>
            <ThreeDots />
          </IconDiv>
        </Column>
      </Row>

      <Text text={text} />

      {mediaType === 'image' ? (
        <img src={src} alt={alt} />
      ) : mediaType === 'video' && (
      <ReactPlayer
        url={src}
        width="100%"
        height="100%"
        controls
        playsinline
      />
      )}

      {isSharing && (
      <PostShareMenu
        avatar={avatar}
        name={name}
        onClose={() => setIsSharing(false)}
      />
      )}

      <Styled.PostFooter>
        <Row>
          <LikeIcon isLiked={isLiked} />
          <FavoriteIcon isfavorite={isFavorite} />
        </Row>

        <RateIcons />

        <IconDiv
          hovercolor={theme.colors.primary}
          onclick={() => setIsSharing(!isSharing)}
        >
          <Share />
        </IconDiv>

      </Styled.PostFooter>

    </Styled.PostCardContainer>
  );
}

PostCard.propTypes = {
  children: Prop.node.isRequired,
};
