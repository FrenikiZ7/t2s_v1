import styled, { css } from 'styled-components';
import { GridLayoutContainer } from '../../../../components/GridLayout/GridLayout-Styles';
import { AuthDropdownContainer } from '../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown-Styles';

export const StaffOpportunitiesContainer = styled.article`
  ${({ theme }) => css`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: ${theme.spacings.medium};

   width: 100%;
   height: 100%;
   min-height: 400px;
   
   > ${AuthDropdownContainer} {
    width: 200px;

    @media ${theme.medias.smallmobile} {
      width: 100%;
    }
   }
  `}
`;
