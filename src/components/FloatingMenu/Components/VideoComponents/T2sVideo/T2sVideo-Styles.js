import styled, { css } from 'styled-components';
import { PopupElement } from '../../../../elements/Popup/Popup-Styles.js';
import { RowContainer } from '../../../../RowContainer/Row-Styles.js.js';
import { SubtitleElement } from '../../../../elements/Subtitle/Subtitle-Styles.js';
import { AuthInputElement } from '../../../../elements/AuthElements/AuthInput/AuthInput-Styles.js';
import { AuthFileInput } from '../../../../elements/AuthElements/AuthFile/AuthFile-Styles.js';

export const T2sVideoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.large};
    padding: ${theme.spacings.xsmall};

    ${AuthInputElement} {
      &:hover {
       border: ${theme.borders.orange};
      }

      &:focus {
       border: ${theme.borders.orange};
       box-shadow: 0px 0px 5px 1px ${theme.colors.orange};
     }
    }

    ${AuthFileInput} {
      &::-webkit-file-upload-button { 

        &:hover {
          border: ${theme.borders.xprimary};
          color: ${theme.colors.primary};
        }
      }
    }

  `}
`;