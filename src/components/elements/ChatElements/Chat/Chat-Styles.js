import styled, { css } from 'styled-components';
import { ButtonElement } from '../../Button/Button-Styles';
import { fadeIn } from '../../../../styles/animations';
import { LinkContainer } from '../../StyledLink/StyledLink-Styles';
import { RowContainer } from '../../../RowContainer/Row-Styles.js';
import { IconContainer } from '../../IconDiv/IconDiv-Styles.js';

export const ChatWrapper = styled.div`
  ${({ theme }) => css`
    animation: ${fadeIn} 500ms;
    width: 100%;
    max-width: 600px;
    height: 100%;
    font-family: ${theme.fonts.primary};

    ${LinkContainer} {
      text-transform: uppercase;
     }

     .rce-container-smsg {
      width: 100%;
     }

     .rce-smsg {
      min-width: 95%;
      background: rgba(0,0,0,0.4);
      border: ${theme.borders.white};
    }

    .rce-smsg-text {
      width: 100%;
      background: 'none';
      color: ${theme.colors.white};
    }
  `}
`;

export const ChatContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    font-family: ${theme.fonts.primary};
    background: rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .rce-container-mlist {
      color: ${theme.colors.black};  
      max-height: 300px;
      min-height: 300px;
      width: 100%;
    }

    // Div das mensagens
    .rce-mlist {
      
    }

    // Container individual de cada mensagem
    .rce-container-mbox {
      width: 100%;
      min-width: 100px;
    }

    // Mensagem em si
    .rce-mbox {
      min-width: 100px;
    }

     // Avatar
     .rce-avatar {
      border-radius: 50%;
    }

    ${RowContainer} {
      margin: ${theme.spacings.xsmall};
      width: 100%;
      justify-content: center;

      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
     }


  `}  
`;

export const ChatHeader = styled.div`
  ${({ theme }) => css`
    background: rgba(0,0,0,0.6);
    padding: ${theme.spacings.small};
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
    border-radius: 12px 12px 0px 0px;
    font-weight: 600;
    
    ${IconContainer} {
      width: 30px;
      display: none;

      @media (max-width: 1050px) {
        display: flex;
      }
    }

    ${LinkContainer} {
      font-size: ${theme.sizes.medium};

      @media ${theme.medias.mobile} {
        font-size: ${theme.sizes.small};

      }
    }
  `}
`;

export const ChatFooter = styled.div`
  ${({ theme }) => css`
    background: rgba(0,0,0,0.6);
    height: 100%;
    width: 100%;
    font-family: ${theme.fonts.primary};
    border-radius: 0px 0px 12px 12px;
    padding: ${theme.spacings.small};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};

    //Botão de enviar mensagens
    .rce-button {
      background-color: ${theme.colors.red};
      font-family: ${theme.fonts.primary};
      text-transform: uppercase;
    }

    //Container do input de mensagens
    .rce-container-input {
      background: none;
      min-width: 0;
      width: 100%;
    }


     // input de mensagens
    .rce-input {
     font-family: ${theme.fonts.primary};
     background: ${theme.colors.transparent};
     border: ${theme.borders.white};
     border-radius: 7px;
     color: ${theme.colors.white};
     min-width: 0;  
     width: 100%;
     transition: all 300ms ease-in-out;
    
      &:hover {
        border: ${theme.borders.secondary};
      }

      &::-webkit-input-placeholder {
        color: ${theme.colors.white};
      }

      &:focus {
        border: ${theme.borders.secondary};
        box-shadow: 0px 0px 5px 0.5px ${theme.colors.secondary};
        outline: none;
      }
    }
  `}
`;
