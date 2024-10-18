import Prop from 'prop-types';
import React from 'react';
import { Avatar } from 'react-chat-elements';
import {
  Logout as LogoutIcon,
  Language as LanguageIcon,
  Close as CloseIcon,
  ContentCopy,
  Close,
} from '@styled-icons/material-outlined';
import { Twitter } from '@styled-icons/evaicons-solid';
import { Facebook } from '@styled-icons/boxicons-logos';
import { useTranslation } from 'react-i18next';
import * as Styled from './PostShareMenu-Styles';
import { Column } from '../../../ColumnContainer/Column';
import { StyledLink } from '../../StyledLink/StyledLink';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { AuthSearch } from '../../AuthElements/AuthSearch/AuthSearch';
import { theme } from '../../../../styles/theme';

export function PostShareMenu({ avatar, name, onClose }) {
  const { t } = useTranslation();

  return (
    <Styled.PostShareMenuContainer>
      <AuthSearch />

      <GridLayout>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

        <Column>
          <Avatar src={avatar} alt={name} size="large" type="circle flexible" />
          <StyledLink text={name} hovercolor={theme.colors.secondary} />
        </Column>

      </GridLayout>

      <Styled.MenuFooter>
        <StyledLink color={theme.colors.white} hovercolor={theme.colors.secondary}>
          <Facebook />
          {t('Facebook')}
        </StyledLink>

        <StyledLink color={theme.colors.white} hovercolor={theme.colors.secondary}>
          <Twitter />
          {t('X')}
        </StyledLink>

        <StyledLink color={theme.colors.white} hovercolor={theme.colors.primary}>
          <ContentCopy />
          {t('copy_url')}
        </StyledLink>

        <StyledLink onclick={onClose} color={theme.colors.white} hovercolor={theme.colors.mediumred}>
          <Close />
          {t('close')}
        </StyledLink>
      </Styled.MenuFooter>
    </Styled.PostShareMenuContainer>
  );
}

PostShareMenu.propTypes = {
  children: Prop.node.isRequired,
};
