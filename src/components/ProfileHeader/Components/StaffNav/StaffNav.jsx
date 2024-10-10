import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './StaffNav-Styles';

import { theme } from '../../../../styles/theme';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';

export function StaffNav() {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Styled.StaffNav>
        <StyledLink
          active={activeLink === '/staff-dashboard' || activeLink === '/staff-dashboard/'}
          path=""
          text={t('home')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/profile'}
          path="profile"
          text={t('profile')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/opportunities'}
          path="opportunities"
          text={t('opportunities')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/staff-opportunities'}
          path="staff-opportunities"
          text={t('staff_opportunities')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/my-opportunities'}
          path="my-opportunities"
          text={t('my_opportunities')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/staff'}
          path="staff"
          text={t('staff')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/clubs'}
          path="clubs"
          text={t('clubs')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

      </Styled.StaffNav>

      <Styled.StaffNav>

        <StyledLink
          active={activeLink === '/staff-dashboard/players'}
          path="players"
          text={t('players')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/events'}
          path="events"
          text={t('events')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/my-events'}
          path="my-events"
          text={t('my_events')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/favorites'}
          path="favorites"
          text={t('favorites')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/messages'}
          path="messages"
          text={t('messages')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/friends'}
          path="friends"
          text={t('friends')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/store'}
          path="store"
          text={t('store')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/my-affiliates'}
          path="my-affiliates"
          text={t('my_affiliates')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/s2t+'}
          path="s2t+"
          text={t('t2s+')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
      </Styled.StaffNav>
    </>
  );
}

StaffNav.propTypes = {
};
