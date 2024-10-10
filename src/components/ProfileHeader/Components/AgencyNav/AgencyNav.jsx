import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './AgencyNav-Styles';

import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';
import { Nav } from '../../../Nav/Nav';

export function AgencyNav() {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Styled.AgencyNav>
        <StyledLink
          active={activeLink === '/agency-dashboard' || activeLink === '/agency-dashboard/'}
          path=""
          text={t('home')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/agency-dashboard/profile'}
          path="profile"
          text={t('profile')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/my-squad'}
          path="my-squad"
          text={t('my_squad')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/opportunities'}
          path="opportunities"
          text={t('opportunities')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/my-opportunities'}
          path="my-opportunities"
          text={t('my_opportunities')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/staff'}
          path="staff"
          text={t('staff')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/clubs'}
          path="clubs"
          text={t('clubs')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
      </Styled.AgencyNav>

      <Styled.AgencyNav>
        <StyledLink
          active={activeLink === '/agency-dashboard/players'}
          path="players"
          text={t('players')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/events'}
          path="events"
          text={t('events')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/my-events'}
          path="my-events"
          text={t('my_events')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/favorites'}
          path="favorites"
          text={t('favorites')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/messages'}
          path="messages"
          text={t('messages')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/friends'}
          path="friends"
          text={t('friends')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/store'}
          path="store"
          text={t('store')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/my-affiliates'}
          path="my-affiliates"
          text={t('my_affiliates')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/agency-dashboard/s2t+'}
          path="s2t+"
          text={t('t2s+')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

      </Styled.AgencyNav>
    </>
  );
}

AgencyNav.propTypes = {
};
