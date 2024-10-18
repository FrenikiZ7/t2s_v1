import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import {
  spin360Left,
  spin360Right,
} from '../../../styles/animations';

export const LikeIconElement = styled.div`
  ${({ theme, isLiked, color }) => css`
  ${IconContainer} {
    width: 30px;
    animation: ${isLiked ? spin360Right : spin360Left} 300ms;

    @media ${theme.medias.mobile} {
      width: 25px;
    }

    > svg {
     color: ${isLiked ? theme.colors.secondary : color};
    }
  }
  `}
`;
