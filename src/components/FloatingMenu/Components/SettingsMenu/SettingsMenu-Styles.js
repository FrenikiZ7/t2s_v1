import styled, { css } from 'styled-components';
import { PopupElement } from '../../../elements/Popup/Popup-Styles';

export const SettingsMenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.xsmall};
      ${PopupElement} {
        margin-top: 20px;
      }
  `}
`;
