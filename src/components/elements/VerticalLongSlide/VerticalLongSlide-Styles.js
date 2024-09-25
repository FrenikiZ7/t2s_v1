import styled, { css } from 'styled-components';

export const VerticalLongSlideWrapper = styled.div`
  ${({ theme }) => css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  `}
`;

export const VerticalLongSlideContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 500px;

    @media ${theme.medias.tablet} {
      max-width: 480px;
    }
  
    @media ${theme.medias.mobile} {
      max-width: 350px;
    }
  
    .swiper-wrapper{
      height: 400px;

      @media ${theme.medias.tablet} {
        height: 600px;
      }

      @media ${theme.medias.mobile} {
        height: 480px;
      }
    }

    .swiper-slide {
      padding: ${theme.spacings.xsmall};
      width: 100%;
      height: 100%;
    }
  `}
`;
