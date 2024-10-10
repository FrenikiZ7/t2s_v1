import styled, { css } from 'styled-components';
import { GridLayoutContainer } from '../../../GridLayout/GridLayout-Styles';
import { slideIn } from '../../../../styles/animations';
import { RowContainer } from '../../../RowContainer/Row-Styles.js';
import { AuthDropdownContainer, DropdownButton, DropdownItem } from '../../AuthElements/AuthDropdown/AuthDropdown-Styles.js';
import { IconContainer } from '../../IconDiv/IconDiv-Styles.js';

export const FilterProposalsContainer = styled.div`
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
          color: ${isopen ? 'none' : theme.colors.secondary};
        }
      }
    }
  `}
`;
