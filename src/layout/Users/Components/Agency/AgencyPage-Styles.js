import styled, { css } from 'styled-components';
import { fadeIn } from '../../../../styles/animations';

export const AgencyPageContainer = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};

    width: 100%;
    height: 100%;
  `}
`;

export const Benefits = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;

export const Explanation = styled.div`
  ${({ theme }) => css`
    animation: ${fadeIn} 500ms;
    background:  rgba(0,0,0,1);
    border-radius: 12px;
    border: ${theme.borders.primary};
    box-shadow: 0px 0px 10px 2px ${theme.colors.primary};

    width: 100%;
    padding: ${theme.spacings.small};
    position: absolute;
    top: 105%;
    z-index: 500;
  `}
`;
