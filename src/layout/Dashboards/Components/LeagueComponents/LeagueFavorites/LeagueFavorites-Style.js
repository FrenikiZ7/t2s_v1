import styled, { css } from 'styled-components';

export const LeagueFavoritesContainer = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    width: 100%;
    height: 100%;
  `}
`;
