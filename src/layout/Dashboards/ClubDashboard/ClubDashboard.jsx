import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Settings as SettingsIcon, Share } from '@styled-icons/fluentui-system-filled';
import { useTranslation } from 'react-i18next';
import * as Styled from './ClubDashboard-Styles';
import { theme } from '../../../styles/theme';
import { ProfilePicture } from '../../../components/elements/ProfilePicture/ProfilePicture';
import { ColumnContainer } from '../../../components/ColumnContainer/Column-Styles';
import { Slide } from '../../../components/elements/Slide/Slide';
import { ProfileName } from '../../../components/elements/ProfileName/ProfileName';
import { ProfileHeader } from '../../../components/ProfileHeader/ProfileHeader';
import { Button } from '../../../components/elements/Button/Button';
import { S2tProvider } from '../../../contexts/s2tContext/S2tProvider';
import { PlayerProvider } from '../../../contexts/userContext/PlayerProvider/PlayerProvider';
import { MobileMenu } from '../../../components/MobileMenu/MobileMenu';
import { FloatingIcon } from '../../../components/elements/FloatingIcon/FloatingIcon';
import { ClubContext } from '../../../contexts/userContext/ClubProvider/ClubContext';
import { ProfileBanner } from '../../../components/elements/ProfileBanner/ProfileBanner';
import { ClubNav } from '../../../components/ProfileHeader/Components/ClubNav/ClubNav';
import { ClubMenu } from '../../../components/MobileMenu/Components/ClubMenu/ClubMenu';
import { Row } from '../../../components/RowContainer/Row';
import { IconDiv } from '../../../components/elements/IconDiv/IconDiv';
import { FloatingMenu } from '../../../components/FloatingMenu/FloatingMenu';
import { SettingsMenu } from '../../../components/FloatingMenu/Components/SettingsMenu/SettingsMenu';
import { FloatingHeader } from '../../../components/Headers/FloatingHeader/FloatingHeader';
import { Nav } from '../../../components/Nav/Nav';
import { ShareMenu } from '../../../components/FloatingMenu/Components/ShareMenu/ShareMenu';

export function ClubDashboard() {
  const { t } = useTranslation();
  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;

  const [menuVisibility, setMenuVisibility] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(false);

  if (!clubState.profile || !clubState.profile.banner) {
    return <div>Loading...</div>;
  }

  const [settingsMenuVisibility, setSettingsMenuVisibility] = useState(false);
  const [shareMenuVisibility, setShareMenuVisibility] = useState(false);

  const handleShareMenuVisibility = () => {
    setShareMenuVisibility(!shareMenuVisibility);
    setSettingsMenuVisibility(false);
  };

  const handleSettingsMenuVisibility = () => {
    setSettingsMenuVisibility(!settingsMenuVisibility);
    setShareMenuVisibility(false);
  };

  return (
    <Styled.ClubDashboardContainer>

      <FloatingHeader>

        <Nav>
          <Button
            path="/"
            text={t('home_page')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/club-dashboard"
            text={t('my_area')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />

          <Button
            path="/benefits"
            text={t('benefits')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />
        </Nav>

        {mobileHeader ? (
          <IconDiv name={t('menu')} onclick={() => setMobileHeader(!mobileHeader)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name={t('close_menu')} onclick={() => setMobileHeader(!mobileHeader)}>
            <MenuIcon />
          </IconDiv>
        ) }

      </FloatingHeader>

      {mobileHeader && (
      <FloatingMenu>
        <Button
          path="/"
          text={t('home_page')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />

        <Button
          path="/player-dashboard"
          text={t('my_area')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.black}
          textcolor={theme.colors.primary}
          texthover={theme.colors.primary}
          border={theme.colors.primary}
          borderhover={theme.colors.primary}
          active
        />

        <Button
          path="/benefits"
          text={t('benefits')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />

      </FloatingMenu>

      )}

      <ProfileBanner backgroundimagesrc={clubState.profile.banner.backgroundImageSrc} ownerview>
        <ProfilePicture
          imagesrc={clubState.profile.banner.profileImageSrc}
          badge={clubState.profile.banner.badge}
          ownerview
          type={clubState.profile.info.profileType}
        />
        <ProfileName name={clubState.profile.banner.name} />
        <Row>
          <Button
            path="profile-edit"
            text={t('edit_profile')}
            bgcolor={theme.colors.primary}
            bghover={theme.colors.black}
            textcolor={theme.colors.black}
            texthover={theme.colors.primary}
            border={theme.colors.black}
            borderhover={theme.colors.primary}
          />

          <IconDiv
            active={settingsMenuVisibility}
            hovercolor={theme.colors.primary}
            name={t('settings')}
            onclick={handleSettingsMenuVisibility}
          >
            <SettingsIcon />
          </IconDiv>

          <IconDiv
            active={shareMenuVisibility}
            hovercolor={theme.colors.primary}
            name={t('share')}
            onclick={handleShareMenuVisibility}
          >
            <Share />
          </IconDiv>

          {settingsMenuVisibility && (
          <FloatingMenu onclick={() => setSettingsMenuVisibility(false)}>
            <SettingsMenu />
          </FloatingMenu>
          )}

          {shareMenuVisibility && (
          <FloatingMenu onclick={() => setShareMenuVisibility(false)}>
            <ShareMenu />
          </FloatingMenu>
          )}

        </Row>

      </ProfileBanner>

      {/* Aparece apenas em telas maiores que 768px */}
      <ProfileHeader>
        <ClubNav />
      </ProfileHeader>

      {/* Aparece apenas em telas menores que 768px */}
      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)}>
          <ClubMenu />
        </MobileMenu>
      ) : (
        <FloatingIcon name={t('menu')} onclick={() => setMenuVisibility(!menuVisibility)}>
          <MenuIcon />
        </FloatingIcon>
      )}

      <S2tProvider>
        <PlayerProvider>
          <ColumnContainer color={theme.colors.black}>
            <Outlet />
          </ColumnContainer>
        </PlayerProvider>
      </S2tProvider>

      <Slide items={clubState.benefits} title={t('my_benefits')} />

    </Styled.ClubDashboardContainer>
  );
}
