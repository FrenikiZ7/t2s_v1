import styled, { css } from 'styled-components';
import { fadeIn } from '../../../../styles/animations.js';
import { TextAreaElement } from '../../TextArea/TextArea-Styles.js';
import { AuthIconFileContainer, AuthIconFileInput } from '../../AuthElements/AuthIconFile/AuthIconFile-Styles.js';
import { IconContainer } from '../../IconDiv/IconDiv-Styles.js';
import { AuthFormContainer } from '../../AuthElements/AuthForm/AuthForm-Styles.js';
import { AuthButtonElement } from '../../AuthElements/AuthButton/AuthButton-Styles.js';
import { ButtonElement } from '../../Button/Button-Styles.js';
import { RowContainer } from '../../../RowContainer/Row-Styles.js.js';
import { SubtitleElement } from '../../Subtitle/Subtitle-Styles.js';

export const NewPost = styled.div`
  ${({ theme }) => css`
    animation: ${fadeIn} 300ms;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border: ${theme.borders.white};
    box-shadow: 0px 0px 5px 0.5px ${theme.colors.white};
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

    ${RowContainer} {
      width: 100%;
      justify-content: space-between;
      align-items: center;

      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }

      ${SubtitleElement} {
        margin-bottom: 0px;
      }
    }

    ${IconContainer} {
      &:hover {
        > svg {
         transform: scale(1);
        }
      }
    }

    @media ${theme.medias.mobile} {
      width: 90%;
    }

    ${AuthButtonElement} {
      width: 100%;
      font-weight: 800;
      font-size: ${theme.sizes.small};
      animation: ${fadeIn} 500ms;
    }

    ${ButtonElement} {
      animation: ${fadeIn} 500ms;

      padding: ${theme.spacings.medium};
      border: none;
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
          /* background: ${theme.colors.lightgray}; */
          box-shadow: 0px 0px 7px 1px ${theme.colors.lightprimary};
        }



       ${IconContainer} {
         position: static; 
         width: 30px;

         &:hover {
          > svg {
            transform: scale(1);
          }
         }
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
