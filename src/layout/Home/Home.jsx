import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Hook do i18next para tradução
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import * as Styled from './Home-Styles';
import { theme } from '../../styles/theme';
import { Nav } from '../../components/Nav/Nav';
import { Logo } from '../../components/elements/Logo/Logo';
import { StandardHeader } from '../../components/Headers/StandardHeader/StandardHeader';
import { BannerSlide } from '../../components/elements/BannerSlide/BannerSlide';
import { Button } from '../../components/elements/Button/Button';
import { S2tContext } from '../../contexts/s2tContext/S2tContext';
import { Slide } from '../../components/elements/Slide/Slide';
import { IconDiv } from '../../components/elements/IconDiv/IconDiv';
import { MobileNav } from '../../components/MobileNav/MobileNav';
import { GridLayout } from '../../components/GridLayout/GridLayout';
import { VerticalMiniSlide } from '../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalSoloSlide } from '../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { VerticalVideoSlide } from '../../components/elements/VerticalVideoSlide/VerticalVideoSlide';
import { AuthDropdown } from '../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { MiniSlide } from '../../components/elements/MiniSlide/MiniSlide';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { PublicVideoSlide } from '../../components/elements/ProfileSlideElements/PublicVideoSlide/PublicVideoSlide';
import { HorizontalVideoSlide } from '../../components/elements/HorizontalVideoSlide/HorizontalVideoSlide';
import { Banner } from '../../components/elements/Banner/Banner';
import { Column } from '../../components/ColumnContainer/Column';
import { Subtitle } from '../../components/elements/Subtitle/Subtitle';
import { TrendingVideos } from '../../components/elements/TrendingVideos/TrendingVideos';

export function Home() {
  const { t, i18n } = useTranslation(); // Hook do i18next para tradução
  const s2tContext = useContext(S2tContext);
  const { s2tState } = s2tContext;
  const { currentUser } = useAuth();

  const [menuVisibility, setMenuVisibility] = useState(false);
  const [sport, setSport] = useState('football');

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Muda o idioma no i18next
  };

  const [isScreenLarge, setIsScreenLarge] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth >= 1080);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Styled.HomePage>
      <StandardHeader>

        <Nav>
          <Logo size="150px" logo="/assets/images/pngs/logo.png" />

          {isScreenLarge && (
          <AuthDropdown
            id="sportsOptions"
            placeholder={t('select_sport')} // Traduz o placeholder
            options={s2tState.formOptions.sportsOptions}
            onDropdownChange={(option) => setSport(option)}
            selectedvalue={sport}
          />
          )}
        </Nav>

        {isScreenLarge && (
        <Nav>
          <AuthDropdown
            id="languageOptions"
            placeholder={t('select_language')} // Traduz o placeholder
            options={s2tState.formOptions.languageOptions}
            onDropdownChange={handleLanguageChange} // Handler para mudar o idioma
            selectedvalue={i18n.language}
          />

          {currentUser ? (
            <>
              <Button
                path="/"
                text={t('home_page')} // Traduz o texto do botão
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.black}
                textcolor={theme.colors.primary}
                texthover={theme.colors.primary}
                border={theme.colors.primary}
                borderhover={theme.colors.primary}
                active
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
            </>
          ) : (
            <>
              <Button
                path="/"
                text={t('home_page')} // Traduz o texto do botão
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.black}
                textcolor={theme.colors.primary}
                texthover={theme.colors.primary}
                border={theme.colors.primary}
                borderhover={theme.colors.primary}
                active
              />
              <Button
                path="/login"
                text={t('login')} // Traduz o texto do botão
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
              <Button
                path="/register"
                text={t('register')} // Traduz o texto do botão
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
            </>
          )}
        </Nav>
        )}

        {menuVisibility ? (
          <IconDiv name={t('menu')} onclick={() => setMenuVisibility(!menuVisibility)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name={t('close_menu')} onclick={() => setMenuVisibility(!menuVisibility)}>
            <MenuIcon />
          </IconDiv>
        )}

      </StandardHeader>

      {menuVisibility && (
        <MobileNav>

          <AuthDropdown
            id="languageOptions"
            placeholder={t('select_language')} // Traduz o placeholder
            options={s2tState.formOptions.languageOptions}
            onDropdownChange={handleLanguageChange} // Handler para mudar o idioma
            selectedvalue={i18n.language}
          />

          <AuthDropdown
            id="sportsOptions"
            placeholder={t('select_sport')} // Traduz o placeholder
            options={s2tState.formOptions.sportsOptions}
            onDropdownChange={(option) => setSport(option)}
            selectedvalue={sport}
          />
          {currentUser ? (
            <>
              <Button
                path="/"
                text={t('home_page')}
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.black}
                textcolor={theme.colors.primary}
                texthover={theme.colors.primary}
                border={theme.colors.primary}
                borderhover={theme.colors.primary}
                active
              />
              <Button
                path="/player-dashboard"
                text={t('my_area')}
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
            </>
          ) : (
            <>
              <Button
                path="/"
                text={t('home_page')}
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.black}
                textcolor={theme.colors.primary}
                texthover={theme.colors.primary}
                border={theme.colors.primary}
                borderhover={theme.colors.primary}
                active
              />
              <Button
                path="/login"
                text={t('login')}
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
              <Button
                path="/register"
                text={t('register')}
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
            </>
          )}
        </MobileNav>
      )}
      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png" backgroundfixed>
        <VerticalMiniSlide title={t('events')} type="events" items={s2tState.events || []} />
        <VerticalSoloSlide title={t('social')} size="400px" items={s2tState.news || []} />
        <VerticalMiniSlide title={t('opportunities')} type="proposals" items={s2tState.proposals.male.professional.agents || []} />
        <VerticalMiniSlide title={t('news')} type="news" items={s2tState.news || []} />
      </BannerSlide>

      <GridLayout>
        <Button
          text={t('professional')}
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text={t('semi_professional')}
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text={t('university')}
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text={t('amateur')}
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text={t('recreational')}
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
          active
        />
      </GridLayout>

      <Slide items={s2tState.photos?.usersType || []} />

      <TrendingVideos slidesPerView={3} backgroundImageSrc="/assets/images/backgrounds/slider-bg-2.png" />

      <Slide items={s2tState.photos?.benefits || []} title={t('benefits')} />

      <MiniSlide type="partners" title={t('partners_supporters')} autoplay items={s2tState.partners || []} />
    </Styled.HomePage>
  );
}
