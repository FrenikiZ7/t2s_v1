import styled, { css } from 'styled-components';
import { slideIn } from '../../../../styles/animations.js';
import { RowContainer } from '../../../RowContainer/Row-Styles.js.js';
import { AuthLayoutContainer } from '../../AuthElements/AuthLayout/AuthLayout-Styles.js';
import { DropdownButton } from '../../AuthElements/AuthDropdown/AuthDropdown-Styles.js';

export const NewStaffProposalContainer = styled.section`
  ${({ theme }) => css`
    animation: ${slideIn} 500ms;

    border-radius: 15px;
    border: ${theme.borders.xwhite};
    background: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xlarge};

    /* position: absolute;
    z-index: 100;  */

    width: 100%;
    padding: ${theme.spacings.large};


    transition: all 700ms ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.9);
      box-shadow: 0px 0px 10px 2px white;
      backdrop-filter: blur(2px);
    }

    @media ${theme.medias.mobile} {
      padding: ${theme.spacings.small};
    }

    ${RowContainer} {
      justify-content: space-between;
      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
    }

    ${AuthLayoutContainer} {
      grid-gap: ${theme.spacings.medium};
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));


      @media ${theme.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      }

      @media ${theme.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }

      @media ${theme.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }
    }

    ${DropdownButton} {
      padding: 8px;
  `}
`;
