import styled, { css } from 'styled-components';
import { StandardHeaderContainer } from '../../components/Headers/StandardHeader/StandardHeader-Styles';
import { NavContainer } from '../../components/Nav/Nav-Styles';
import { IconContainer } from '../../components/elements/IconDiv/IconDiv-Styles';
import { MobileNavContainer } from '../../components/MobileNav/MobileNav-Styles';
import { FloatingHeaderContainer } from '../../components/Headers/FloatingHeader/FloatingHeader-Styles';
import { BannerContainer } from '../../components/elements/Banner/Banner-Styles';
import { SubtitleElement } from '../../components/elements/Subtitle/Subtitle-Styles';
import { TitleElement } from '../../components/elements/Title/Title-Styles';
import { ListItem } from '../../components/elements/List/List-Styles';
import { FloatingMenuContainer } from '../../components/FloatingMenu/FloatingMenu-Styles';
import { ButtonElement } from '../../components/elements/Button/Button-Styles';

export const BenefitsPage = styled.section`
  ${({ theme }) => css`


  ${FloatingHeaderContainer} {
    background-image: linear-gradient( ${theme.colors.black}, ${theme.colors.transparent});

    ${NavContainer} {
      @media ${theme.medias.tablet} {
       display: none;
      }
    }


    ${IconContainer} {
      display: none;
      animation: none;
        @media ${theme.medias.tablet} {
          display: flex;
        }
    }
  }

  ${MobileNavContainer} {
    position: absolute;
    top: 80px;
  }

  ${BannerContainer} {
      > ${SubtitleElement}, > ${TitleElement} {
      font-weight: 900;
      margin-bottom: 0px;
      text-align: center;
      text-shadow: 3px 3px 1px ${theme.colors.lightblack};
    }
    

    
    @media ${theme.medias.smallpc} {
      max-height: 100%;
    }

    @media ${theme.medias.tablet} {
      max-height: 100%;
    }

    @media ${theme.medias.mobile} {
      max-height: 100%;
    }


  }

  ${ListItem} {
    &::before {
      display: none;
    }
  }

  ${FloatingMenuContainer} {
      & ${ButtonElement} {
        height: 30px;
      }
    }

    > ${FloatingMenuContainer} {
      display: none;
      flex-direction: column;
      gap: ${theme.spacings.small};
      padding: ${theme.spacings.medium};

      @media ${theme.medias.tablet} {
        display: flex;
      }
    }
  

  `}
`;
