import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { slideInLeft } from '../../../../styles/animations';
import { IconContainer } from '../../IconDiv/IconDiv-Styles';
import { AuthFormContainer } from '../../AuthElements/AuthForm/AuthForm-Styles';
import { PopupElement } from '../../Popup/Popup-Styles';
import { ColumnContainer } from '../../../ColumnContainer/Column-Styles';
import { FloatingMenuContainer } from '../../../FloatingMenu/FloatingMenu-Styles';
import { RowContainer } from '../../../RowContainer/Row-Styles.js';
import { LinkContainer } from '../../StyledLink/StyledLink-Styles.js';
import { GridLayoutContainer } from '../../../GridLayout/GridLayout-Styles.js';
import { SubtitleElement } from '../../Subtitle/Subtitle-Styles.js';

export const OwnerVideoSlideWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}  
`;

export const OwnerVideoSlideElement = styled.div`
  ${({ theme }) => css`
  width: 100%;


  .swiper-wrapper {
     height: 400px;
     aspect-ratio: 16 / 9; 
     container-type: size;

      @media (max-width: 1050px) {
        height: 350px;
      }

      @media ${theme.medias.smallpc} { 
        height: 300px;
      }

      @media ${theme.medias.tablet} { 
        height: 440px;
      }

      @media (max-width: 650px) { 
        height: 400px;
      }

      @media (max-width: 570px) { 
        height: 350px;
      }
  
      @media ${theme.medias.mobile} { 
        height: 300px;
      }

      @media ${theme.medias.smallmobile} { 
        height: 250px;
      }
    }


   .swiper-slide {
     height: 100%;
     width: 100%;
     background: rgba(0,0,0,0.5);
     border: ${theme.borders.xwhite};
     border-radius: 12px;
   }



   ${FloatingMenuContainer} {
    position: absolute;
    width: 50%;
    padding: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.large};


    ${GridLayoutContainer} {
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));

      @media ${theme.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }

      @media ${theme.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
      }

      @media ${theme.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
      }

      @media ${theme.medias.smallmobile} {
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
      }
    }

    ${LinkContainer} {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: ${theme.spacings.xsmall};
 
      min-width: 80px;
      font-size: ${theme.sizes.medium};

      > img {
        width: 35px;
      }
    }

   
    ${RowContainer} {
      justify-content: space-between;
      align-items: center;

      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
 
      ${SubtitleElement} {
        margin-bottom: 0px;
      }
    }
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
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.medium};

    ${IconContainer} {
    > svg {
        background: ${theme.colors.black};
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

    > ${RowContainer} {
      justify-content: space-between;
      align-items: center;

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
        box-shadow: none;
        transform: scale(1.1);
      }

      @media ${theme.medias.mobile} {
       width: 25px;
       height: 25px;
      }
    }
  }
 `}
`;

export const VideoUpload = styled.div`
  ${({ theme }) => css`

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

     > ${IconContainer} {
      
      animation: none;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: url('/assets/images/backgrounds/ball.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition: all 500ms ease-in-out;

      display: flex;
      justify-content: center;
      align-items: center;


      &:hover {
       box-shadow: 0px 0px 5px 2px inset ${theme.colors.secondary};
      }

      & svg {
       width: 40%;
       max-width: 100%;
      }
     }
  `}  
`;
