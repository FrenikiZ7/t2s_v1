import styled, { css } from 'styled-components';
import { ButtonElement } from '../../Button/Button-Styles';
import { fadeIn } from '../../../../styles/animations';

export const ChatWrapper = styled.div`
  ${({ theme }) => css`
    animation: ${fadeIn} 500ms;
    width: 50%;
    height: 100%;
    font-family: ${theme.fonts.primary};
  `}
`;

export const ChatContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    font-family: ${theme.fonts.primary};
    background: rgba(0,0,0,0.4);
    padding: ${theme.spacings.small};
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};


    .rce-container-mlist {
      color: ${theme.colors.black};  
      max-height: 400px;
      padding: ${theme.spacings.small};
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
    height: auto;
    max-height: 300px;
    overflow-y: auto;

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
