import styled, { css } from 'styled-components';

export const AuthButtonElement = styled.input`
  ${({ theme, bgcolor, bghover }) => css`
    background: ${bgcolor};
    /* border: ${theme.borders.white}; */
    border: none;
    border-radius: 10px;
    color: ${theme.colors.white};

    font-size: ${theme.sizes.medium};
    font-family: ${theme.fonts.primary};
    font-weight: 600;

    padding: ${theme.spacings.medium};

    transition: all 400ms ease-in-out;

    &:hover {
      background: ${bghover};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
      padding: ${theme.spacings.small};
    }
  `}
`;
