import Prop, { bool } from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import { Close, Fullscreen } from '@styled-icons/material-outlined';
import { Delete } from '@styled-icons/fluentui-system-filled';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player/lazy';

import * as Styled from './OwnerVideoSlide-Styles';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthIconFile } from '../../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../../styles/theme';
import { Popup } from '../../Popup/Popup';
import { Column } from '../../../ColumnContainer/Column';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { useAuth } from '../../../../contexts/AuthContext/AuthContext';
import { FloatingMenu } from '../../../FloatingMenu/FloatingMenu';
import { Text } from '../../Text/Text';
import { Subtitle } from '../../Subtitle/Subtitle';
import { Row } from '../../../RowContainer/Row';
import { StyledLink } from '../../StyledLink/StyledLink';
import { YoutubeVideo } from '../../../FloatingMenu/Components/VideoComponents/YoutubeVideo/YoutubeVideo';
import { HudlVideo } from '../../../FloatingMenu/Components/VideoComponents/HudlVideo/HudlVideo';
import { VimeoVideo } from '../../../FloatingMenu/Components/VideoComponents/VimeoVideo/VimeoVideo';
import { UploadOptions } from '../../../FloatingMenu/Components/VideoComponents/UploadOptions/UploadOptions';

import { removeVideo as removePlayerVideo } from '../../../../contexts/userContext/PlayerProvider/playerActions';
import { removeVideo as removeClubVideo } from '../../../../contexts/userContext/ClubProvider/clubActions';
import { removeVideo as removeAgencyVideo } from '../../../../contexts/userContext/AgencyProvider/agencyActions';
import { removeVideo as removeLeagueVideo } from '../../../../contexts/userContext/LeagueProvider/leagueActions';
import { removeVideo as removeUniversityVideo } from '../../../../contexts/userContext/UniversityProvider/universityActions';
import { removeVideo as removeFanVideo } from '../../../../contexts/userContext/FanProvider/fanActions';
import { removeVideo as removeStaffVideo } from '../../../../contexts/userContext/StaffProvider/staffActions';

import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { ClubContext } from '../../../../contexts/userContext/ClubProvider/ClubContext';
import { AgencyContext } from '../../../../contexts/userContext/AgencyProvider/AgencyContext';
import { LeagueContext } from '../../../../contexts/userContext/LeagueProvider/LeagueContext';
import { UniversityContext } from '../../../../contexts/userContext/UniversityProvider/UniversityContext';
import { StaffContext } from '../../../../contexts/userContext/StaffProvider/StaffContext';
import { FanContext } from '../../../../contexts/userContext/FanProvider/FanContext';

// Galeria de vídeos utilizada quando o usuário acessa o próprio perfil
export function OwnerVideoSlide({
  items, title, profileType,
}) {
  const [videosData, setVideosData] = useState([]);

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  const agencyContext = useContext(AgencyContext);
  const { agencyState, agencyDispatch } = agencyContext;

  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;

  const leagueContext = useContext(LeagueContext);
  const { leagueState, leagueDispatch } = leagueContext;

  const universityContext = useContext(UniversityContext);
  const { universityState, universityDispatch } = universityContext;

  const staffContext = useContext(StaffContext);
  const { staffState, staffDispatch } = staffContext;

  const fanContext = useContext(FanContext);
  const { fanState, fanDispatch } = fanContext;

  const { t } = useTranslation();
  const [deleteVideo, setDeleteVideo] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const { currentUser } = useAuth();

  const handleIsDeleting = (video) => {
    setDeleteVideo(deleteVideo === video.url ? '' : video.url);
  };

  const handleConfirmDelete = (video) => {
    const actions = {
      player: () => removePlayerVideo(playerDispatch, video),
      club: () => removeClubVideo(clubDispatch, video),
      agency: () => removeAgencyVideo(agencyDispatch, video),
      university: () => removeUniversityVideo(universityDispatch, video),
      league: () => removeLeagueVideo(leagueDispatch, video),
      fan: () => removeFanVideo(fanDispatch, video),
      staff: () => removeStaffVideo(staffDispatch, video),
    };

    const action = actions[profileType];
    action();

    setDeleteVideo('');
  };

  useEffect(() => {
    setVideosData(items);
  }, [items]);

  return (
    <Styled.OwnerVideoSlideWrapper>
      <Styled.OwnerVideoSlideElement>
        <Title text={title} uppercase />
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          navigation
          zoom
          lazy="true"
          breakpoints={{
            // Breakpoint for tablet screens
            768: {
              slidesPerView: 2,
            },
            // Breakpoint for mobile screens
            0: {
              slidesPerView: 1,
            },
          }}
        >

          {videosData && videosData.length > 0 && videosData.map((video) => (
            <SwiperSlide
              key={video.url}

            >
              <Styled.MediaWrapper>

                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="100%"
                  controls
                  playsinline
                />

                <Row>
                  <Styled.BottomIconsWrapper>

                    <IconDiv
                      onclick={() => handleIsDeleting(video)}
                      active={deleteVideo === video.url}
                      activecolor={theme.colors.red}
                      hovercolor={theme.colors.lightred}
                      color={theme.colors.white}
                    >
                      <Delete />
                    </IconDiv>

                  </Styled.BottomIconsWrapper>
                </Row>

                <Column>
                  <Popup
                    isopen={deleteVideo === video.url}
                    title={t('delete_video_question')}
                    firstoption="Sim"
                    secondoption="Não"
                    onfirstclick={() => handleConfirmDelete(video)}
                    onsecondclick={() => handleIsDeleting('')}
                  />
                </Column>

              </Styled.MediaWrapper>

            </SwiperSlide>
          ))}

          <SwiperSlide>
            <Styled.VideoUpload>
              <IconDiv
                hovercolor={theme.colors.secondary}
                name={t('add_video_button')}
                onclick={() => setIsUploading(!isUploading)}
              >
                <AddIcon />
              </IconDiv>
            </Styled.VideoUpload>
          </SwiperSlide>

        </Swiper>

        {isUploading && (
        <FloatingMenu>
          <UploadOptions profileType={profileType} onClick={() => setIsUploading(false)} />
        </FloatingMenu>
        )}

      </Styled.OwnerVideoSlideElement>

    </Styled.OwnerVideoSlideWrapper>
  );
}

OwnerVideoSlide.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
  profileType: Prop.string.isRequired,
};
