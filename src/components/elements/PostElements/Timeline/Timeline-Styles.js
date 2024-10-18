import styled, { css } from 'styled-components';

export const TimelineWrapper = styled.section`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
  `}
`;

export const TimelineContainer = styled.section`
  ${({ theme }) => css`
    max-height: 1000px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; // Alinha os itens ao topo
    padding: ${theme.spacings.small}; // Adiciona padding para evitar overflow
    gap: ${theme.spacings.medium};
  `}
`;
