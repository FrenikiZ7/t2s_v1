import styled, { css } from 'styled-components';
import { ButtonElement } from '../../Button/Button-Styles';
import { SearchWrapper } from '../../AuthElements/AuthSearch/AuthSearch-Styles';

export const MessagesListWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 600px;
    height: auto;
    font-family: ${theme.fonts.primary};
    border-radius: 12px;
  `}
`;

export const MessagesWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-height: 600px;
    overflow-y: auto;
    border-radius: 0px 0px 12px 12px;
  `}
`;

export const MessagesListContainer = styled.div`
  ${({ theme }) => css`
      width: 100%;
      font-family: ${theme.fonts.primary};
      background: rgba(0,0,0,0.4);
      padding: ${theme.spacings.small};
      border-radius: 0px 0px 12px 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      pointer-events: auto;


    //Quem enviou
     .rce-citem-body--top{
      color: ${theme.colors.white};
     }

     //Quando a mensagem chegou
     .rce-citem-body--top-time {
      color: ${theme.colors.white};
     }

     //mensagem
     .rce-citem-body--bottom-title {
      color: ${theme.colors.white};
     }



     //Container das mensagens
     .rce-container-clist {
      width: 100%;
      max-height: 600px;
      padding: ${theme.spacings.medium};
     }

     //Container
     .message-item {
       width: 100%;
     }


     //Container de cada mensagem
     .rce-citem {
       background: ${theme.colors.lightblack};
       border-radius: 12px;
       border: ${theme.borders.white};
       margin-bottom: ${theme.spacings.small};
       transition: all 300ms ease-in-out;

       &:hover {
        background: ${theme.colors.mediumblack};
        border: ${theme.borders.secondary};
       }
     }

     //Contato selecionado
     .active {
       > .rce-citem {
        background: rgba(0,0,0,0.7);
        border: ${theme.borders.secondary};
      }
     }
  `}  
`;

export const MessagesListHeader = styled.div`
  ${({ theme }) => css`
    background: rgba(0,0,0,0.6);
    padding: ${theme.spacings.small};
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
    border-radius: 12px 12px 0px 0px;
    font-weight: 600;

    ${SearchWrapper} {
      width: 100%;
      max-width: 100%;
    }
  `}
`;

export const MessagesListFooter = styled.div`
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

  `}
`;
