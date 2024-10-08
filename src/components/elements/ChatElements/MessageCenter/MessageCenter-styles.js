import styled, { css } from 'styled-components';

export const MessageCenterContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    padding: ${theme.spacings.small};
    flex-direction: row;
    gap: ${theme.spacings.small};
    font-family: ${theme.fonts.primary};

    @media (max-width: 1050px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 630px) {
      padding: 0px;
    }
  `}
`;
