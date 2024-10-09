import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import { spin360Left, spin360Right } from '../../../styles/animations';

export const RateIconsElement = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacings.xsmall};
  

  ${IconContainer} {
    
    transition: all 500ms ease-in-out;
    animation-fill-mode: forwards;

    >svg {
      width: 30px;
      @media ${theme.medias.mobile} {
       width: 25px;
      }
    }

    &:hover {
      > svg {
        width: 30px;
        transform: scale(1);
        box-shadow: 0px 0px 10px 2px ${theme.colors.gold};
     }
  }



  & svg {
    padding: 1px;
  }

  `}
`;
