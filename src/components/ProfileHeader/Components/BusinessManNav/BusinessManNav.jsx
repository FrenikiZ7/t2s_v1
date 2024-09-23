import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './BusinessManNav-Styles';

import { theme } from '../../../../styles/theme';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';

export function BusinessManNav() {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Styled.BusinessManNav>
        <StyledLink
          active={activeLink === '/business-man-dashboard' || activeLink === '/business-man-dashboard/'}
          path=""
          text={t('home')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/business-man-dashboard/profile'}
          path="profile"
          text={t('profile')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/business-man-dashboard/opportunities'}
          path="opportunities"
          text={t('opportunities')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/business-man-dashboard/staff'}
          path="staff"
          text={t('staff')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/business-man-dashboard/clubs'}
          path="clubs"
          text={t('clubs')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/business-man-dashboard/favorites'}
          path="favorites"
          text={t('favorites')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/business-man-dashboard/events'}
          path="events"
          text={t('events')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/business-man-dashboard/messages'}
          path="messages"
          text={t('messages')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

      </Styled.BusinessManNav>

      <Styled.BusinessManNav>

        <StyledLink
          active={activeLink === '/business-man-dashboard/friends'}
          path="friends"
          text={t('friends')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/business-man-dashboard/store'}
          path="store"
          text={t('store')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/business-man-dashboard/my-events'}
          path="my-events"
          text={t('my_events')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/business-man-dashboard/my-affiliates'}
          path="my-affiliates"
          text={t('my_affiliates')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/business-man-dashboard/s2t+'}
          path="s2t+"
          text={t('t2s+')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
      </Styled.BusinessManNav>
    </>
  );
}

BusinessManNav.propTypes = {
};
