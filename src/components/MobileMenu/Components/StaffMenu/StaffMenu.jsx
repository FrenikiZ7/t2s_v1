import Prop from 'prop-types';
import React from 'react';

import {
  Home as HomeIcon,
  Group as GroupIcon,
  Person as PersonIcon,
  ViewCarousel as ViewCarouselIcon,
  Send as SendIcon,
  WorkOutline as WorkIcon,
  SportsSoccer as SportsSoccerIcon,
  FavoriteBorder as FavoriteIcon,
  Hail as EventsIcon,
  PlusOne as PlusIcon,
  Handshake as HandshakeIcon,
  LocalGroceryStore as StoreIcon,
  Close as CloseIcon,
  SocialDistance as AffiliateIcon,
} from '@styled-icons/material-outlined';

import { useTranslation } from 'react-i18next';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { theme } from '../../../../styles/theme';

export function StaffMenu() {
  const { t } = useTranslation();

  return (
    <GridLayout>
      <StyledLink
        path=""
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <HomeIcon />
        {t('home')}
      </StyledLink>

      <StyledLink
        path="profile"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <PersonIcon />
        {t('profile')}

      </StyledLink>

      <StyledLink
        path="opportunities"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <ViewCarouselIcon />
        {t('opportunities')}

      </StyledLink>

      <StyledLink
        path="scouts"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <WorkIcon />
        {t('scouts')}

      </StyledLink>

      <StyledLink
        path="clubs"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <SportsSoccerIcon />
        {t('clubs')}

      </StyledLink>

      <StyledLink
        path="favorites"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <FavoriteIcon />
        {t('favorites')}

      </StyledLink>

      <StyledLink
        path="events"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <EventsIcon />
        {t('events')}

      </StyledLink>

      <StyledLink
        path="contacts"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <SendIcon />
        {t('contacts')}

      </StyledLink>

      <StyledLink
        path="friends"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <GroupIcon />
        {t('friends')}

      </StyledLink>

      <StyledLink
        path="store"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <StoreIcon />
        {t('store')}

      </StyledLink>

      <StyledLink
        path="s2t+"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <PlusIcon />
        {t('t2s+')}

      </StyledLink>

      <StyledLink
        path="my-affiliates"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <AffiliateIcon />
        {t('my_affiliates')}

      </StyledLink>

      <StyledLink
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <CloseIcon />

        {t('close')}

      </StyledLink>
    </GridLayout>
  );
}

StaffMenu.propTypes = {

};