import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { slideInLeft } from '../../../../styles/animations';
import { IconContainer } from '../../IconDiv/IconDiv-Styles';
import { AuthIconFileContainer } from '../../AuthElements/AuthIconFile/AuthIconFile-Styles';
import { AuthFormContainer } from '../../AuthElements/AuthForm/AuthForm-Styles';
import { PopupElement } from '../../Popup/Popup-Styles';
import { ColumnContainer } from '../../../ColumnContainer/Column-Styles';

export const OwnerSlideWrapper = styled.div`
  ${({ theme }) => css`

  `}  
`;

export const OwnerSlideElement = styled.div`
  ${({ theme }) => css`


  .swiper-slide {
     height: 360px;
     border-radius: 15px;

      @media (max-width: 1050px) {
        height: 320px;
      }

      @media ${theme.medias.smallpc} { 
        height: 260px;
      }

      @media ${theme.medias.tablet} { 
        height: 380px;
      }


      @media (max-width: 550px) { 
        height: 300px;
      }

      @media ${theme.medias.mobile} { 
        height: 260px;
      }

      @media ${theme.medias.smallmobile} { 
        height: 200px;
      }

      @media (max-width: 280px) { 
        height: 160px;
      }
   }

  ${AuthIconFileContainer} {
     width: 100%;
     height: 100%;
     border: ${theme.borders.xwhite};

     border-radius: 12px;
     background: url('/assets/images/backgrounds/ball.png');
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     transition: all 500ms ease-in-out;
    
      &:hover {
       box-shadow: 0px 0px 5px 2px inset ${theme.colors.secondary};
      }

      ${IconContainer} {
        width: 100%;

        & svg {
          width: 40%;
          max-width: 100%;
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
  justify-content: center;
    
  & img, video {
    object-fit: fill;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 500ms ease-in-out;
    box-sizing: border-box;
    border: ${theme.borders.xtransparent};
  }


  ${ColumnContainer} {
    display: flex;
    align-items: center;
    justify-content: center;

    ${PopupElement}{
      max-width: 90%;
    }
  }
  `}
`;

export const TopIconsWrapper = styled.div`
  ${({ theme }) => css`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: ${theme.spacings.xsmall};
    height: 30px;
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 15px;
    z-index: 100;

    ${IconContainer} {
      width: 100%;
      height: 100%;
      
      > svg {
        border-radius: 50%;
        padding: 2px;
        background: rgba(0, 0, 0, 0.5);

        &:hover {
          background: rgba(0, 0, 0, 0.8);
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

export const BottomIconsWrapper = styled.div`
  ${({ theme }) => css`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: ${theme.spacings.xsmall};
    height: 30px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    z-index: 100;

    ${IconContainer} {
    width: auto;
    height: 100%;
    

    > svg {
     border-radius: 50%;
     background: rgba(0, 0, 0, 0.5);

      &:hover {
        background: rgba(0, 0, 0, 0.8);
        transform: scale(1.1);
      }

      @media ${theme.medias.mobile} {
       width: 25px;
       height: 25px;
      }
    }
 `}
`;
