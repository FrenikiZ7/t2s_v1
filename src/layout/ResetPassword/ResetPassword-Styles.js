import styled, { css } from 'styled-components';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

export const ResetPasswordPage = styled.section`
  ${({ theme, backgroundimagesrc }) => css`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 1)
      ),
      url(${backgroundimagesrc});

     background-position: center;
     background-size: cover;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     height: 100vh;

     ${AuthContainer} {
      max-width: 500px;
      height: auto;

      @media ${theme.medias.tablet} {
       width: 90%;
      }
     }
  `}
`;
