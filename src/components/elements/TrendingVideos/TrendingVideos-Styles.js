import styled, { css } from 'styled-components';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { AuthDropdownContainer, DropdownButton, DropdownItem } from '../AuthElements/AuthDropdown/AuthDropdown-Styles';
import { PublicVideoSlideElement } from '../ProfileSlideElements/PublicVideoSlide/PublicVideoSlide-Styles';

export const TrendingVideosContainer = styled.section`
  ${({ theme, backgroundImageSrc, fullscreenMode }) => css`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${backgroundImageSrc || ''});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    width: 100%;
    height: 100%;


    ${ColumnContainer} {
       width: 100%;
       justify-content: center;
       align-items: center;
       gap: ${theme.spacings.small};

        ${SubtitleElement} {
          margin-bottom: 0px;
        }

    
        ${AuthDropdownContainer} {
          min-width: 400px;

           @media ${theme.medias.tablet} {
            width: 100%;
            min-width: 0px;
          }
        }

        ${DropdownButton} {
          padding: ${theme.spacings.xsmall};
        }

        ${DropdownItem} {
          padding: ${theme.spacings.xsmall};
        }
     }


     //Configuração de CSS quando o TrendingVideos está sendo exibido com width de 100%
     ${fullscreenMode && css`
      ${PublicVideoSlideElement} {
        .swiper-wrapper {
          height: 415px;
          aspect-ratio: 16 / 9; 
          container-type: size;

          @media (max-width: 1600px) {
            height: 350px;
          }

          @media (max-width: 1350px) {
            height: 320px;
          }

          @media (max-width: 1240px) {
            height: 400px;
          }

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
      }
    `}
  `}  
`;
