import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import {
  spin360Left,
  spin360Right,
} from '../../../styles/animations';

export const FavoriteIconElement = styled.div`
  ${({ theme, isfavorite, color }) => css`
  ${IconContainer} {
    width: 30px;
    animation: ${isfavorite ? spin360Right : spin360Left} 300ms;

    @media ${theme.medias.mobile} {
      width: 25px;
    }

    > svg {
     color: ${isfavorite ? theme.colors.red : color};
    }
  }
  `}
`;
