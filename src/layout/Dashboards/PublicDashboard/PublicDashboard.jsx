import React, { useContext, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import Prop from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Share, Chat } from '@styled-icons/fluentui-system-filled';
import * as Styled from './PublicDashboard-Styles';
import { PlayerContext } from '../../../contexts/userContext/PlayerProvider/PlayerContext';
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
import { FavoriteIcon } from '../../../components/elements/FavoriteIcon/FavoriteIcon';
import { PublicNav } from '../../../components/ProfileHeader/Components/PublicNav/PublicNav';
import { PublicMenu } from '../../../components/MobileMenu/Components/PublicMenu/PublicMenu';
import { Row } from '../../../components/RowContainer/Row';
import { ImageModal } from '../../../components/elements/ImageModal/ImageModal';
import { FloatingHeader } from '../../../components/Headers/FloatingHeader/FloatingHeader';
import { Nav } from '../../../components/Nav/Nav';
import { IconDiv } from '../../../components/elements/IconDiv/IconDiv';
import { FloatingMenu } from '../../../components/FloatingMenu/FloatingMenu';
import { ShareMenu } from '../../../components/FloatingMenu/Components/ShareMenu/ShareMenu';

export function PublicDashboard() {
  // Posteriormente, mudar tudo que envolva clubState para dados reais.clubState está sendo usado de placeholder

  const { t } = useTranslation();
  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;

  const [menuVisibility, setMenuVisibility] = useState(false);
  const [follow, setFollow] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(false);

  const { username } = useParams();

  const [shareMenuVisibility, setShareMenuVisibility] = useState(false);
  const [chatActive, setChatActive] = useState(false);

  const handleShareMenuVisibility = () => {
    setShareMenuVisibility(!shareMenuVisibility);
  };

  const handleChatActive = () => {
    // Add lógica para o sistema de chat
    setChatActive(!chatActive);
  };

  const handleFollow = () => {
    // Add lógica para o sistema de follow/unfollow}
    setFollow(!follow);
  };

  return (
    <Styled.PublicDashboardContainer>

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
            path="/public-dashboard"
            text={clubState.profile.banner.name}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
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
          path="/public-dashboard"
          text={clubState.profile.banner.name}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.black}
          textcolor={theme.colors.primary}
          texthover={theme.colors.primary}
          border={theme.colors.primary}
          borderhover={theme.colors.primary}
          active
        />
      </FloatingMenu>
      )}

      <ProfileBanner backgroundimagesrc={clubState.profile.banner.backgroundImageSrc}>
        <ProfilePicture
          imagesrc={clubState.profile.banner.profileImageSrc}
          badge={clubState.profile.banner.badge}
          type="Clube"
          competitivelevel="Profissional"
        />
        <ProfileName name={clubState.profile.banner.name} />

        <Row>
          {follow ? (
            <Button
              text={t('unfollow')}
              bgcolor={theme.colors.primary}
              bghover={theme.colors.primary}
              textcolor={theme.colors.black}
              border={theme.colors.primary}
              borderhover={theme.colors.primary}
              onclick={() => handleFollow()}
            />
          ) : (
            <Button
              text={t('follow')}
              bgcolor={theme.colors.lightprimary}
              bghover={theme.colors.primary}
              textcolor={theme.colors.black}
              border={theme.colors.lightprimary}
              borderhover={theme.colors.primary}
              onclick={() => handleFollow()}
            />
          )}

          <FavoriteIcon />

          <IconDiv
            active={chatActive}
            hovercolor={theme.colors.primary}
            name={t('chat')}
            onclick={handleChatActive}
          >
            <Chat />
          </IconDiv>

          <IconDiv
            active={shareMenuVisibility}
            hovercolor={theme.colors.primary}
            name={t('share')}
            onclick={handleShareMenuVisibility}
          >
            <Share />
          </IconDiv>

          {shareMenuVisibility && (
          <FloatingMenu onclick={() => setShareMenuVisibility(false)}>
            <ShareMenu />
          </FloatingMenu>
          )}
        </Row>
      </ProfileBanner>

      {/* Aparece apenas em telas maiores que 768px */}
      {username && (
      <ProfileHeader>
        <PublicNav username={username} type="club" />
      </ProfileHeader>
      )}

      {/* Aparece apenas em telas menores que 768px */}
      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)}>
          <PublicMenu type="club" />
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

      {/* <ImageModal isopen="true" /> */}

      <Slide items={clubState.benefits} title={t('user_benefits')} />

    </Styled.PublicDashboardContainer>
  );
}

PublicDashboard.propTypes = {
  username: Prop.string,
};
