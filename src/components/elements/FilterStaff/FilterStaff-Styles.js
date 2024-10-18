import styled, { css } from 'styled-components';
import { GridLayoutContainer } from '../../GridLayout/GridLayout-Styles.js';
import { slideIn } from '../../../styles/animations.js';
import { RowContainer } from '../../RowContainer/Row-Styles.js.js';
import { AuthDropdownContainer, DropdownButton, DropdownItem } from '../AuthElements/AuthDropdown/AuthDropdown-Styles.js';
import { IconContainer } from '../IconDiv/IconDiv-Styles.js';

export const FilterStaffContainer = styled.div`
  ${({ theme, isopen }) => css`
    animation: ${slideIn} 500ms;
    width: 100%;
    border-radius: 12px;

    & ${IconContainer} {
      animation: none;
    }


    & ${DropdownButton}, ${DropdownItem} {
      @media ${theme.medias.mobile} {
       font-size: ${theme.sizes.xsmall};
      }
    }

    & ${RowContainer} {
      width: 100%;
      justify-content: space-between;

      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }

      @media ${theme.medias.tablet} {
        flex-direction: column;
      }

      & ${AuthDropdownContainer} {
         min-width: 210px;
      }
    }

    & ${IconContainer} {
      > svg {
        color: ${isopen ? theme.colors.primary : 'none'};

        &:hover {
          color: ${theme.colors.secondary};
        }
      }
    }


    ${GridLayoutContainer} {
    grid-gap: ${theme.spacings.small};
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    @media ${theme.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    @media ${theme.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    }

    @media ${theme.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
   }
  `}
`;
