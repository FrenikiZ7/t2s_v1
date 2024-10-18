import styled, { css } from 'styled-components';
import { RowContainer } from '../../../RowContainer/Row-Styles.js';
import { ColumnContainer } from '../../../ColumnContainer/Column-Styles.js';
import { LinkContainer } from '../../StyledLink/StyledLink-Styles.js';
import { RateIconsElement } from '../../RateIcons/RateIcons-Styles.js';
import { IconContainer } from '../../IconDiv/IconDiv-Styles.js';
import { GridLayoutContainer } from '../../../GridLayout/GridLayout-Styles.js';
import { AuthSearchContainer } from '../../AuthElements/AuthSearch/AuthSearch-Styles.js';

export const PostCardContainer = styled.div`
  ${({ theme }) => css`
  position: relative;
   display: flex;
   flex-direction: column;
   gap: ${theme.spacings.small};
   padding: ${theme.spacings.small};
   border-radius: 12px;
   /* background: ${theme.colors.darkgray}; */
   border: ${theme.borders.white};
   box-shadow: 0px 0px 8px 0.5px ${theme.colors.white};

   max-width: 600px;
   min-width: 600px;
   width: 100%;

  


   @media ${theme.medias.tablet} {
    min-width: 0px;
   }

     > ${RowContainer} {
       align-items: center;
       justify-content: space-between;

        @media ${theme.medias.smallpc} {
         flex-direction: row;
        }

        ${ColumnContainer} {
          flex-direction: row;
          align-items: center;
        }

        ${LinkContainer} {
          @media ${theme.medias.smallmobile} {
            font-size: ${theme.sizes.xsmall};
          }
        }
      }

      > img, video {
        border-radius: 12px;
        height: 100%;
        width: 100%;
        max-height: 450px;
      }



  `}
`;

export const PostFooter = styled.div`
  ${({ theme }) => css`
     height: 40px;

     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     gap:10px;

     ${RowContainer}{
      width: auto;
      align-items: center;
      justify-content: flex-start;
     }

     ${RateIconsElement} {

      ${IconContainer} {
        width: 100%;
      }

      & svg {
        /* background: ${theme.colors.black}; */
        border-radius: 50%;
      }
     }
  `}
`;

export const PostMenu = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border: ${theme.borders.white};
    box-shadow: 0px 0px 8px 0.5px ${theme.colors.white};
    border-radius: 15px;
    width: 60%;
    height: 400px;

    position: absolute;
    top:  15px;
    right: 15px;

    padding: ${theme.spacings.xxsmall};
    z-index: 1000;
    

    display: block;
    min-width: 300px;
 

    transition: all 500ms ease-in-out;

    @media ${theme.medias.mobile} {
      min-width: 90%;
    }
  `}
`;
