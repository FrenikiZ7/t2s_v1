import styled, { css } from 'styled-components';
import { ButtonElement } from '../../Button/Button-Styles';

export const AuthHistoricContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    ${ButtonElement} {
      padding: ${theme.spacings.small};
    }
  `}
`;

export const AuthHistoricTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 400;
  `}
`;
