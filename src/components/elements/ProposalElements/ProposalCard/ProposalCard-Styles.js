import styled, { css } from 'styled-components';
import { LinkContainer } from '../../StyledLink/StyledLink-Styles';
import { fadeIn, slideIn } from '../../../../styles/animations';
import { InfoTitle } from '../../InfoInRow/InfoInRow-Styles';
import { SubtitleElement } from '../../Subtitle/Subtitle-Styles';
import { TextElement } from '../../Text/Text-Styles';
import { FavoriteIconElement } from '../../FavoriteIcon/FavoriteIcon-Styles';
import { IconContainer } from '../../IconDiv/IconDiv-Styles';

export const ProposalCardElement = styled.div`
  ${({ theme }) => css`
    background-image: linear-gradient(to bottom, ${theme.colors.lightsecondary}, ${theme.colors.lightprimary});
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    border-radius: 15px;
    animation: ${fadeIn} 1000ms;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};

    width: 100%;
    height: 100%;
    padding: ${theme.spacings.large};

    transition: all 500ms ease-in-out;

    ${IconContainer} {
      &:hover {
        > svg {
          transform: none;
        }
      }
    }

    ${LinkContainer} {
      font-size: ${theme.sizes.large};

      @media ${theme.medias.mobile} {
       font-size: ${theme.sizes.medium};
      }

      @media ${theme.medias.smallmobile} {
       font-size: ${theme.sizes.small};
      }
    }

    ${InfoTitle} {
      font-weight: 600;
    }

    ${SubtitleElement} {
      font-size: ${theme.sizes.xlarge};

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.large};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.medium};
    }

    @media ${theme.medias.smallmobile} {
      font-size: ${theme.sizes.small};
    }
    }

    ${TextElement} {
      user-select: none;
    }



    &:hover {
      box-shadow: 0px 0px 5px 3px white inset;
    }
  `}
`;

export const ProposalImage = styled.img`
  ${({ theme }) => css`
    width: 70px;
    transition: all 300ms ease-in-out;

    @media ${theme.medias.mobile} {
      width: 60px;
    }
  `}
`;
