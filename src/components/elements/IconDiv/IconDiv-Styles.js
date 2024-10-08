import styled, { css } from 'styled-components';
import { spin360Left, spin360Right, zoomIn } from '../../../styles/animations';

export const IconContainer = styled.div`
  ${({
    theme, hovercolor, active, activecolor, color,
  }) => css`
      transition: all 500ms ease-in-out ;
      width: 40px;
      display: flex;
      align-items: center;     
      animation: ${active ? spin360Right : spin360Left} 1000ms;

      &:hover {
        > svg {
          color: ${hovercolor || theme.colors.secondary};
          transform: scale(1.1);
        }
      }

      @media ${theme.medias.mobile} {
        width: 30px;
      }
    
      & svg {

        width: 30px;
        height: 30px;

        @media ${theme.medias.mobile} {
         width: 25px;
        }

        transition: all 500ms ease-in-out ;
        color: ${active ? activecolor : color};
  
      }
  `}
`;
