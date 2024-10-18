import styled, { css } from 'styled-components';
import { AuthSearchContainer } from '../../AuthElements/AuthSearch/AuthSearch-Styles';
import { GridLayoutContainer } from '../../../GridLayout/GridLayout-Styles';
import { ColumnContainer } from '../../../ColumnContainer/Column-Styles';
import { LinkContainer } from '../../StyledLink/StyledLink-Styles';
import { fadeIn, slideIn, slideInRight } from '../../../../styles/animations';

export const PostShareMenuContainer = styled.div`
  ${({ theme }) => css`
    animation: ${fadeIn} 500ms;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    /* border: ${theme.borders.white}; */
    /* box-shadow: 0px 0px 8px 0.5px ${theme.colors.white}; */
    border-radius: 15px;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;

    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    

    padding: ${theme.spacings.small};
    z-index: 1000;
    

    min-width: 300px;
 

    transition: all 500ms ease-in-out;

    ${LinkContainer} {
      @media ${theme.medias.mobile} {
        font-size: ${theme.sizes.xsmall};
        > svg {
          max-width: 20px;
        }
      }
    }

    ${GridLayoutContainer} {
      align-items: flex-start;
      height: auto;
      overflow-y: auto;
      padding: ${theme.spacings.small};
      grid-gap: ${theme.spacings.small};
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

      @media ${theme.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      }

      @media ${theme.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      }

      @media ${theme.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      }

      @media ${theme.medias.smallmobile} {
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
      }
    }

    ${ColumnContainer} {
      width: auto;
      align-items: center;
      border-radius: 12px;
      border: ${theme.borders.white};
      padding: ${theme.spacings.small};
      transition: all 500ms ease-in-out;

      &:hover {
        /* background: ${theme.colors.black}; */
        box-shadow: 0px 0px 5px 2px ${theme.colors.white};
      }
    }

    @media ${theme.medias.mobile} {
      min-width: 90%;
    }
  `}
`;

export const MenuFooter = styled.div`
  ${({ theme }) => css`
     height: 70px;
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     gap: 10px;
     padding: ${theme.spacings.small};

     ${LinkContainer} {

      width: 100%;
      height: 100%;
     }
  `}
`;
