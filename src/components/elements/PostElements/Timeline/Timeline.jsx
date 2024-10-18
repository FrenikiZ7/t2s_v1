import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Timeline-Styles';
import { PostCard } from '../PostCard/PostCard';

export function Timeline({ children }) {
  return (
    <Styled.TimelineWrapper>
      <Styled.TimelineContainer>
        <PostCard
          mediaType="image"
          src="/assets/images/users/athletes.png"
          avatar="/assets/images/users/athletes.png"
          name="Jurandir Silva"
          text="Foto de um momento bla bla bla"
          isFavorite={false}
          isLiked={false}
        />

        <PostCard
          mediaType="video"
          src="/assets/videos/silas.mp4"
          avatar="/assets/images/users/athletes.png"
          name="Jurandir Silva"
          text="Algumas jogadas da minha última partida"
          isFavorite
          isLiked
        />

        <PostCard
          mediaType="image"
          src="/assets/images/others/scout.png"
          avatar="/assets/images/users/athletes.png"
          name="Jurandir Silva"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          isFavorite
          isLiked={false}
        />

        <PostCard
          mediaType="video"
          src="/assets/videos/silas2.mp4"
          avatar="/assets/images/users/athletes.png"
          name="Jurandir Silva"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          isFavorite={false}
          isLiked
        />

      </Styled.TimelineContainer>
    </Styled.TimelineWrapper>

  );
}

Timeline.propTypes = {
  children: Prop.node.isRequired,
};
