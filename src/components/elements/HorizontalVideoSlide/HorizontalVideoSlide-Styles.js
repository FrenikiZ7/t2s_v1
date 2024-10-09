import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { slideInLeft } from '../../../styles/animations';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import { AuthIconFileContainer } from '../AuthElements/AuthIconFile/AuthIconFile-Styles';
import { AuthFormContainer } from '../AuthElements/AuthForm/AuthForm-Styles';
import { PopupElement } from '../Popup/Popup-Styles';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { RowContainer } from '../../RowContainer/Row-Styles.js';
import { ReportModalElement } from '../ReportModal/ReportModal-Styles.js';
import { FloatingMenuContainer } from '../../FloatingMenu/FloatingMenu-Styles.js';
import { TextAreaElement } from '../TextArea/TextArea-Styles.js';

export const HorizontalVideoSlideWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%; 

    ${FloatingMenuContainer} {
      width: 60%;
      height: auto;
      position: absolute;

      @media ${theme.medias.mobile} {
        height: 90%;
        overflow-y: auto;
      }

      @media ${theme.medias.smallmobile} {
        height: 100%;
      }

       ${ReportModalElement} {
         width: 100%;
         height: 100%; 
        

          ${TextAreaElement} {
            @media ${theme.medias.mobile} {
              max-width: 100%;
              min-width: 100%;
              min-height: 30px;
              max-height: 100px;
            }
          }
       }
    }

    @media ${theme.medias.mobile} {
      min-width: 0px;
    }
  `}  
`;

export const HorizontalVideoSlideElement = styled.div`
  ${({ theme }) => css`

    .swiper-wrapper {
     height: 360px;
     aspect-ratio: 16 / 9; 
     container-type: size;


      @media (max-width: 1470px) {
        height: 400px;
      }

      @media (max-width: 1050px) {
        height: 450px;
      }

      @media ${theme.medias.smallpc} { 
        height: 410px;
      }

      @media ${theme.medias.tablet} { 
        height: 380px;
      }

      @media (max-width: 630px) {
        height: 310px;
      }
  
      @media ${theme.medias.mobile} { 
        height: 250px;
      }

      @media ${theme.medias.smallmobile} { 
        height: 250px;
      }

      @media (max-width: 280px) {
        height: 190px;
      }
    }


   .swiper-slide {
     height: 100%;
     background: rgba(0,0,0,0.5);
     border: ${theme.borders.xwhite};
     border-radius: 12px;
   
   }
 `}
`;

export const MediaWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.medium};

    ${IconContainer} {
    > svg {
        background: ${theme.colors.white};
    }
  }


    
    & img, video{
      /* object-fit: contain;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      transition: all 500ms ease-in-out;
      box-sizing: border-box;
      border: ${theme.borders.xtransparent}; */
    }

    ${RowContainer} {
      justify-content: space-between;
      align-items: center;
      /* gap: ${theme.spacings.large} */

      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
    }
  `}
`;

export const BottomIconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    height: 30px;
    z-index: 100;

    ${IconContainer} {
    width: auto;
    height: 100%;

    > svg {
     border-radius: 50%;
     /* background: rgba(0, 0, 0, 0.5); */

      &:hover {
        /* background: rgba(0, 0, 0, 0.8); */
        transform: scale(1.1);
      }

      @media ${theme.medias.mobile} {
       width: 25px;
       height: 25px;
      }

      @media ${theme.medias.smallmobile} {
       width: 20px;
       height: 20px;
      }
    }
  }
 `}
`;
