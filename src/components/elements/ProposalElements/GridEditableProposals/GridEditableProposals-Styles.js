import styled, { css } from 'styled-components';
import ReactPaginate from 'react-paginate';
import { fadeIn, slideIn } from '../../../../styles/animations';
import { GridLayoutContainer } from '../../../GridLayout/GridLayout-Styles';
import { RowContainer } from '../../../RowContainer/Row-Styles.js';
import { IconContainer } from '../../IconDiv/IconDiv-Styles.js';

export const GridEditableProposalsContainer = styled.div`
  ${({ theme }) => css`
   width: 100%;
   height: 100%;
   animation: ${slideIn} 500ms ease-out;
   

   & ${IconContainer} {
    animation: none;
   }

   ${GridLayoutContainer} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    animation: ${fadeIn} 500ms;
    @media ${theme.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media ${theme.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }

    @media ${theme.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    }
    }

    ${RowContainer} {
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${theme.spacings.medium};
      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
    }

  `}
`;

export const StyledPaginate = styled(ReactPaginate)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    list-style: none;
    cursor: pointer;
    user-select: none;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};

    margin-top: ${theme.spacings.small};
    
    transition: all 500ms ease-in-out;

    .page-item {
      height: 30px;
      width: 30px;
      font-size: ${theme.sizes.medium};
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${theme.borders.white};
      border-radius: 50%;
      transition: all 500ms ease-in-out;

      &:hover {
        border: ${theme.borders.primary};
      }

      @media ${theme.medias.mobile} {
        height: 20px;
        width: 20px;
        font-size: ${theme.sizes.small};
      }

      @media ${theme.medias.smallmobile} {
        height: 15px;
        width: 15px;
        font-size: ${theme.sizes.xsmall};
      }
      

    }

    .page-link {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    .active {
      border: ${theme.borders.primary};
      transform: scale(1.2);
      color: ${theme.colors.primary};
      box-shadow: 0px 0px 5px 1px ${theme.colors.primary};

    }

    .previous, .next {
      transition: all 500ms ease-in-out;
      color: ${theme.colors.white};
      
      &:hover {
        color: ${theme.colors.primary};
      }

      @media ${theme.medias.mobile} {
        font-size: ${theme.sizes.xsmall};
      }

      @media ${theme.medias.smallmobile} {
        font-size: ${theme.sizes.xxsmall};
      }
   
    }

    .break {
  
    }

    .disabled {
      opacity: 0.5;

      &:hover {
        color: ${theme.colors.white};
      }
    }
  `}
`;
