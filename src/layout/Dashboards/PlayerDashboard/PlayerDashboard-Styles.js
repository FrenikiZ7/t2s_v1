import styled, { css } from 'styled-components';
import { ColumnContainer } from '../../../components/ColumnContainer/Column-Styles';
import { IconContainer } from '../../../components/elements/IconDiv/IconDiv-Styles';
import { spin360Left, spin360Right } from '../../../styles/animations';
import { RowContainer } from '../../../components/RowContainer/Row-Styles.js';
import { FloatingHeaderContainer } from '../../../components/Headers/FloatingHeader/FloatingHeader-Styles.js';
import { NavContainer } from '../../../components/Nav/Nav-Styles.js';
import { MobileNavContainer } from '../../../components/MobileNav/MobileNav-Styles.js';
import { FloatingMenuContainer } from '../../../components/FloatingMenu/FloatingMenu-Styles.js';
import { ButtonElement } from '../../../components/elements/Button/Button-Styles.js';

export const PlayerDashboardContainer = styled.section`
  ${({ theme }) => css`

  ${FloatingHeaderContainer} {
      justify-content: flex-end;

      @media ${theme.medias.tablet} {
        justify-content: center;
      }

      @media ${theme.medias.mobile} {
        justify-content: flex-end;
      }

      ${NavContainer} {
        @media ${theme.medias.mobile} {
         display: none;
        }
      }

      ${IconContainer} {
        display: none;
        animation: none;

        @media ${theme.medias.mobile} {
          display: flex;
        }
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

      @media ${theme.medias.mobile} {
        display: flex;
      }
    }
      
    >${ColumnContainer} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${theme.spacings.xlarge};
      padding: ${theme.spacings.medium};


      @media ${theme.medias.tablet} {
        width: 100%;
      }
    }

  `}
`;
