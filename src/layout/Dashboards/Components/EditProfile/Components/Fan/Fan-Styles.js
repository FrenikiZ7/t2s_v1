import styled, { css } from 'styled-components';
import { AuthHistoricContainer } from '../../../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric-Styles.js';
import { RowContainer } from '../../../../../../components/RowContainer/Row-Styles.js.js';

export const FanContainer = styled.section`
  ${({ theme }) => css`
  
  display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     & ${RowContainer} {
      > ${AuthHistoricContainer} {
      width: 50%;

      @media ${theme.medias.smallpc} {
        width: 100%;
      }
     } 
     }
    }
  `}
`;
