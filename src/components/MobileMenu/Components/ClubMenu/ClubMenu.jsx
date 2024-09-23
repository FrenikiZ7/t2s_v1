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
  SafetyDivider as SquadIcon,
  Close as CloseIcon,
  PersonSearch as PersonSearchIcon,
  TableView as TableViewIcon,
  SocialDistance as AffiliateIcon,
} from '@styled-icons/material-outlined';

import { useTranslation } from 'react-i18next';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { theme } from '../../../../styles/theme';

export function ClubMenu() {
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
        path="my-squad"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <SquadIcon />
        {t('my_squad')}

      </StyledLink>

      <StyledLink
        path="opportunities"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <ViewCarouselIcon />
        {t('oppotunities')}

      </StyledLink>

      <StyledLink
        path="my-opportunities"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <HandshakeIcon />
        {t('my_opportunities')}

      </StyledLink>

      <StyledLink
        path="staff"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <WorkIcon />
        {t('staff')}

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
        path="players"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <PersonSearchIcon />
        {t('players')}

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
        path="messages"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <SendIcon />
        {t('messages')}

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
        path="my-events"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <TableViewIcon />
        {t('my_events')}

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

ClubMenu.propTypes = {

};
