import styled, { css } from 'styled-components';
import { VerticalLongSlideWrapper } from '../../../../../components/elements/VerticalLongSlide/VerticalLongSlide-Styles';

export const PlayerContactsContainer = styled.article`
  ${({ theme }) => css`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
    ),
    url('/assets/images/backgrounds/slider-bg-1.png');
    border-radius: 12px;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 30px;
    flex-direction: row;
    gap: ${theme.spacings.small};
    font-family: ${theme.fonts.primary};
    
    ${VerticalLongSlideWrapper} {
      width: 60%;

      @media ${theme.medias.tablet} {
        width: 100%;
      }
    }

   



  

     //Estilos do placeholder
    > section {
      width: 100%;
      height: 1000px;
      background: rgba(0,0,0,0.5);

      @media ${theme.medias.tablet} {
        display: none;
      }
    }
  `}
`;
