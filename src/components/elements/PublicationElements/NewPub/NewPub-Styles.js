import styled, { css } from 'styled-components';
import { fadeIn } from '../../../../styles/animations';
import { TextAreaElement } from '../../TextArea/TextArea-Styles';
import { AuthIconFileContainer, AuthIconFileInput } from '../../AuthElements/AuthIconFile/AuthIconFile-Styles';
import { IconContainer } from '../../IconDiv/IconDiv-Styles';
import { AuthFormContainer } from '../../AuthElements/AuthForm/AuthForm-Styles';
import { AuthButtonElement } from '../../AuthElements/AuthButton/AuthButton-Styles';

export const NewPub = styled.div`
  ${({ theme }) => css`
    animation: ${fadeIn} 300ms;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border: ${theme.borders.white};
    box-shadow: 0px 0px 8px 0.5px ${theme.colors.white};
    border-radius: 15px;


    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: ${theme.spacings.medium};
    z-index: 1000;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};
    transition: all 500ms ease-in-out;

    @media ${theme.medias.mobile} {
      width: 90%;
    }

    ${AuthButtonElement} {
      width: 100%;
    }

    ${TextAreaElement} {
      min-width: 0px;
      min-height: 100px;
      background-color: rgba(257,257,257, 0.1);
      border: none;
      width: 100%;
      -webkit-user-modify: read-write-plaintext-only;
      resize: none;


      &::-webkit-input-placeholder {
        color: ${theme.colors.lightgray};
      }


      &:hover{
        outline: none;
        border: none;
      }


      &:focus {
        outline: none;
        box-shadow: none;
        border: none;
      }
    }
    
  
  `}
`;

export const Icons = styled.div`
  ${({ theme }) => css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      gap: ${theme.spacings.xsmall};
      border-radius: 12px;
      width: 100%;


      ${AuthFormContainer} {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }


      
      ${AuthIconFileContainer} {
        position: static; 
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: ${theme.colors.lightprimary};
        transition: all 500ms ease-in-out;
        border-radius: 12px;


        &:hover {
          background: ${theme.colors.lightgray};

          & svg {
            color: ${theme.colors.primary};
          }

        }



       ${IconContainer} {
        position: static; 
        width: 30px;
        
       }
    }
  `}
`;

export const MediaAttached = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
    border-radius: 12px;

    ${IconContainer} {
      animation: none;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 100;
      background: ${theme.colors.lightblack};
      border-radius: 0px 12px 0px 12px;

      &:hover {
        background: ${theme.colors.mediumblack};
      }
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;

    }
  `}
`;
