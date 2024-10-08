import styled, { css } from 'styled-components';
import { slideIn } from '../../../../../styles/animations';
import { RowContainer } from '../../../../../components/RowContainer/Row-Styles.js';
import { BannerSlideWrapper } from '../../../../../components/elements/BannerSlide/BannerSlide-Styles.js';
import { VerticalVideoSlideElement } from '../../../../../components/elements/VerticalVideoSlide/VerticalVideoSlide-Styles.js';
import { FavoriteIconElement } from '../../../../../components/elements/FavoriteIcon/FavoriteIcon-Styles.js';
import { RateIconsElement } from '../../../../../components/elements/RateIcons/RateIcons-Styles.js';
import { HorizontalVideoSlideElement } from '../../../../../components/elements/HorizontalVideoSlide/HorizontalVideoSlide-Styles.js';

export const PlayerHomeContainer = styled.article`
  ${({ theme }) => css`
 
    width: 100%;
    height: 100%;
    animation: ${slideIn} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
    border-radius: 12px;

    ${RowContainer} {
      align-items: center
    }

    ${RateIconsElement} {
      width: auto;

      & svg {
        max-width: 30px;
      }
    }

    ${BannerSlideWrapper} {
      border-radius: 12px;
    }

    ${VerticalVideoSlideElement} {
      .swiper-slide {
        background: rgba(200,200,200,200.5);
      }
    }

  `}
`;
