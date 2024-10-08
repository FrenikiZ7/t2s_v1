import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { useTranslation } from 'react-i18next';
import * as Styled from './Policies-Styles';
import { StandardHeader } from '../../components/Headers/StandardHeader/StandardHeader';
import { Logo } from '../../components/elements/Logo/Logo';
import { IconDiv } from '../../components/elements/IconDiv/IconDiv';
import { Nav } from '../../components/Nav/Nav';
import { Button } from '../../components/elements/Button/Button';
import { MobileNav } from '../../components/MobileNav/MobileNav';
import { theme } from '../../styles/theme';
import { Title } from '../../components/elements/Title/Title';

export function Policies({ children }) {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [activeLink, setActiveLink] = useState();
  const { t } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <Styled.PoliciesContainer>

      <StandardHeader>
        <Logo size="150px" logo="/assets/images/pngs/logo.png" />

        {menuVisibility ? (
          <IconDiv name={t('menu')} onclick={() => setMenuVisibility(!menuVisibility)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name={t('close_menu')} onclick={() => setMenuVisibility(!menuVisibility)}>
            <MenuIcon />
          </IconDiv>
        )}

        <Nav>

          <Button
            path="/"
            text={t('home_page')} // Traduz o texto do botão
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/player-dashboard"
            text={t('my_area')} // Traduz o texto do botão
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/policies/terms-of-use"
            text={t('policies')} // Traduz o texto do botão
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />
        </Nav>
      </StandardHeader>
      {menuVisibility && (
        <MobileNav>
          <Button
            path="/"
            text={t('home_page')} // Traduz o texto do botão
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/player-dashboard"
            text={t('my_area')} // Traduz o texto do botão
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/policies/terms-of-use"
            text={t('policies')} // Traduz o texto do botão
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />
        </MobileNav>
      )}

      <Title text="Políticas da Talent 2 Show" uppercase />

      <Nav>
        <Button
          path="terms-of-use"
          text={t('terms_of_use')}
          bgcolor={activeLink === '/policies/terms-of-use' ? theme.colors.secondary : theme.colors.quaternary}
          bghover=""
          textcolor={theme.colors.white}
          texthover={theme.colors.white}
          borderhover={theme.colors.white}
          border={theme.colors.white}
          active={activeLink === '/policies/terms-of-use'}
        />
        <Button
          path="privacy"
          text={t('privacy')}
          bgcolor={activeLink === '/policies/privacy' ? theme.colors.secondary : theme.colors.quaternary}
          bghover=""
          textcolor={theme.colors.white}
          texthover={theme.colors.white}
          borderhover={theme.colors.white}
          border={theme.colors.white}
          active={activeLink === '/policies/privacy'}
        />

        <Button
          path="copyright"
          text={t('copyright')}
          bgcolor={activeLink === '/policies/copyright' ? theme.colors.secondary : theme.colors.quaternary}
          bghover=""
          textcolor={theme.colors.white}
          texthover={theme.colors.white}
          borderhover={theme.colors.white}
          border={theme.colors.white}
          active={activeLink === '/policies/copyright'}
        />

        <Button
          path="acceptable-use"
          text={t('acceptable_use')}
          bgcolor={activeLink === '/policies/acceptable-use' ? theme.colors.secondary : theme.colors.quaternary}
          bghover=""
          textcolor={theme.colors.white}
          texthover={theme.colors.white}
          borderhover={theme.colors.white}
          border={theme.colors.white}
          active={activeLink === '/policies/acceptable-use'}
        />
      </Nav>

      <Outlet />
    </Styled.PoliciesContainer>
  );
}

Policies.propTypes = {
  children: Prop.node,
};
