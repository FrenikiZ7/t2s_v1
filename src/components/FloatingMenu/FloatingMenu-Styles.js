import styled, { css } from 'styled-components';
import { ButtonElement } from '../elements/Button/Button-Styles';
import { fadeIn } from '../../styles/animations';
import { GridLayoutContainer } from '../GridLayout/GridLayout-Styles';
import { LinkContainer } from '../elements/StyledLink/StyledLink-Styles';

export const FloatingMenuContainer = styled.nav`
  ${({ theme }) => css`
    animation: ${fadeIn} 300ms;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border: ${theme.borders.white};
    box-shadow: 0px 0px 8px 0.5px ${theme.colors.white};
    border-radius: 15px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: ${theme.spacings.xxsmall};
    z-index: 1000;
    

    display: block;
    min-width: 300px;
 

    transition: all 500ms ease-in-out;

    @media ${theme.medias.mobile} {
      min-width: 90%;
    }


    ${GridLayoutContainer}{
     padding:${theme.spacings.small};
     grid-gap: 10px 5px;
     border-radius: 15px;
     grid-template-columns: repeat(auto-fit, minmax(70px, 3fr));
    }

    ${LinkContainer}{
      font-size: ${theme.sizes.xsmall};

      & svg {
      color: ${theme.colors.white};
      width: 20px;
      transition: all 300ms ease-in-out;
      }

      &:hover {
        
        & svg {
          color: ${theme.colors.primary};
        }
      }
    }

  `}
`;
