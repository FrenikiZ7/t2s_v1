import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { slideInLeft } from '../../../../styles/animations';
import { IconContainer } from '../../IconDiv/IconDiv-Styles';
import { AuthIconFileContainer } from '../../AuthElements/AuthIconFile/AuthIconFile-Styles';
import { AuthFormContainer } from '../../AuthElements/AuthForm/AuthForm-Styles';
import { PopupElement } from '../../Popup/Popup-Styles';
import { ColumnContainer } from '../../../ColumnContainer/Column-Styles';

export const PublicSlideWrapper = styled.div`
  ${({ theme }) => css`
   & ${AuthFormContainer} {

      & ${IconContainer}{
        & svg {
          width: 40%;
        }
      }
      
    }
  `}  
`;

export const PublicSlideElement = styled.div`
  ${({ theme }) => css`


   .swiper-slide {
     height: 370px;
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
 `}
`;

export const MediaWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    
    & img{
      object-fit: fill;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      transition: all 500ms ease-in-out;
      box-sizing: border-box;
      border: ${theme.borders.xtransparent};
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
      width: auto;
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
