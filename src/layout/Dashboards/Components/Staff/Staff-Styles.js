import styled, { css } from 'styled-components';
import { AuthDropdownContainer } from '../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown-Styles';

export const StaffContainer = styled.article`
  ${({ theme }) => css`
   width: 100%;
   height: 100%;

   display: flex;
   flex-direction: column;
   gap: ${theme.spacings.small};

   ${AuthDropdownContainer} {
    min-width: 200px;
   }
  `}
`;
