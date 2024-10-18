import styled, { css } from 'styled-components';
import { fadeIn } from '../../../../styles/animations';

export const AuthSearchContainer = styled.label`
  ${({ theme }) => css`
    animation: ${fadeIn} 500ms;
    color: ${theme.colors.lightgray};
    font-size: ${theme.sizes.medium};

    position: relative;
    display: flex;
    align-items: center;

    width: 100%;

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
    }
  `}
`;

export const AuthSearchElement = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.transparent};
    border: ${theme.borders.white};
    border-radius: 7px;
    color: ${theme.colors.white};
    width: 100%;


    font-size: ${theme.sizes.small};
    font-family: ${theme.fonts.primary};
  

    padding: ${theme.spacings.small};
    transition: all 300ms ease-in-out;
    
    &:hover {
      border: ${theme.borders.tertiary};
    }

    &::-webkit-input-placeholder {
      color: ${theme.colors.white};
    }

    &:focus {
      border: ${theme.borders.secondary};
      outline: none;
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xsmall};
    }
  `}
`;

export const SearchIconContainer = styled.div`
  ${({ theme }) => css`
      transition: all 500ms ease-in-out ;
      width: 35px;
      height: 100%;
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;


      @media ${theme.medias.mobile} {
        width: 30px;
      }
    
      & svg {
      
        color: ${theme.colors.white};
        transition: all 500ms ease-in-out ;

        &:hover {
          color: ${theme.colors.tertiary};
          transform: scale(1.1);
        }
  
      }
  `}
`;

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
     align-items: center;
     gap: ${theme.spacings.xxsmall};

     @media ${theme.medias.tablet} {
      max-width: none;
     }
  `}
`;
