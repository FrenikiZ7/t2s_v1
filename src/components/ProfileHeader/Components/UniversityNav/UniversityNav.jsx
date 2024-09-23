import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './UniversityNav-Styles';

import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';
import { Nav } from '../../../Nav/Nav';

export function UniversityNav() {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Styled.UniversityNav>
        <StyledLink
          active={activeLink === '/university-dashboard' || activeLink === '/university-dashboard'}
          path=""
          text={t('home')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/university-dashboard/profile'}
          path="profile"
          text={t('profile')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/my-squad'}
          path="my-squad"
          text={t('my_squad')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/opportunities'}
          path="opportunities"
          text={t('opportunities')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/my-opportunities'}
          path="my-opportunities"
          text={t('my_opportunities')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/staff'}
          path="staff"
          text={t('staff')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/clubs'}
          path="clubs"
          text={t('clubs')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
      </Styled.UniversityNav>

      <Styled.UniversityNav>
        <StyledLink
          active={activeLink === '/university-dashboard/players'}
          path="players"
          text={t('players')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/events'}
          path="events"
          text={t('events')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/favorites'}
          path="favorites"
          text={t('favorites')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/messages'}
          path="messages"
          text={t('messages')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/friends'}
          path="friends"
          text={t('friends')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/store'}
          path="store"
          text={t('store')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/my-events'}
          path="my-events"
          text={t('my_events')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/my-affiliates'}
          path="my-affiliates"
          text={t('my_affiliates')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/s2t+'}
          path="s2t+"
          text={t('t2s+')}
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

      </Styled.UniversityNav>
    </>
  );
}

UniversityNav.propTypes = {
};
