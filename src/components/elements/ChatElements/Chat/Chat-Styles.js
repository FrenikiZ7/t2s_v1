import styled, { css } from 'styled-components';
import { ButtonElement } from '../../Button/Button-Styles';

export const ChatWrapper = styled.div`
  ${({ theme }) => css`
      font-family: ${theme.fonts.primary};
  `}
`;

export const ChatContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    font-family: ${theme.fonts.primary};
    background: ${theme.colors.mediumblack};
    border-radius: 0px 0px 12px 12px;
    padding: ${theme.spacings.small};
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};

    .rce-citem {
      background: ${theme.colors.lightblack};
      border-radius: 12px;
      border: ${theme.borders.white};
    }

    .rce-citem-body--bottom {
      color: ${theme.colors.white};
    }

    .rce-citem-body--top{
      color: ${theme.colors.white};
    }

    .rce-citem-body--top-time {
      color: ${theme.colors.white};
    }

    .rce-citem-body--bottom-title {
      color: ${theme.colors.white};
    }

    .rce-container-mlist{
      color: ${theme.colors.black};
    }

    .message-item {
      margin-bottom: ${theme.spacings.small};
    }  

    .rce-mbox-item {
      font-family: ${theme.fonts.primary};
    }

    .rce-input {
      font-family: ${theme.fonts.primary};
    }

    .rce-button {
      background: ${theme.colors.quaternary};
      font-family: ${theme.fonts.primary};
      text-transform: uppercase;
    }
  `}  
`;

export const ChatHeader = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.quaternary};
    padding: ${theme.spacings.small};
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
    border-radius: 12px 12px 0px 0px;
    font-weight: 600;
  `}
`;
