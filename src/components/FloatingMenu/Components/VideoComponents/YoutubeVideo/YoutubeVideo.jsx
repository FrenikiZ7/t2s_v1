import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Close } from '@styled-icons/evaicons-solid';
import { ArrowBack } from '@styled-icons/material-outlined';
import * as Styled from './YoutubeVideo-Styles';
import { theme } from '../../../../../styles/theme';
import { AuthForm } from '../../../../elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../../../elements/AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../../../../elements/AuthElements/AuthButton/AuthButton';
import { Subtitle } from '../../../../elements/Subtitle/Subtitle';
import { IconDiv } from '../../../../elements/IconDiv/IconDiv';
import { Row } from '../../../../RowContainer/Row';
import { Text } from '../../../../elements/Text/Text';

import { addVideo as addPlayerVideo } from '../../../../../contexts/userContext/PlayerProvider/playerActions';
import { addVideo as addClubVideo } from '../../../../../contexts/userContext/ClubProvider/clubActions';
import { addVideo as addAgencyVideo } from '../../../../../contexts/userContext/AgencyProvider/agencyActions';
import { addVideo as addLeagueVideo } from '../../../../../contexts/userContext/LeagueProvider/leagueActions';
import { addVideo as addUniversityVideo } from '../../../../../contexts/userContext/UniversityProvider/universityActions';
import { addVideo as addFanVideo } from '../../../../../contexts/userContext/FanProvider/fanActions';
import { addVideo as addStaffVideo } from '../../../../../contexts/userContext/StaffProvider/staffActions';

import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { ClubContext } from '../../../../../contexts/userContext/ClubProvider/ClubContext';
import { AgencyContext } from '../../../../../contexts/userContext/AgencyProvider/AgencyContext';
import { LeagueContext } from '../../../../../contexts/userContext/LeagueProvider/LeagueContext';
import { UniversityContext } from '../../../../../contexts/userContext/UniversityProvider/UniversityContext';
import { StaffContext } from '../../../../../contexts/userContext/StaffProvider/StaffContext';
import { FanContext } from '../../../../../contexts/userContext/FanProvider/FanContext';

export function YoutubeVideo({ onCloseClick, onBackClick, profileType }) {
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

  const [videoData, setVideoData] = useState({
    id: undefined,
    url: '',
  });

  const [message, setMessage] = useState();

  const handleVideoUpload = (e) => {
    e.preventDefault();

    const actions = {
      player: () => addPlayerVideo(playerDispatch, videoData),
      club: () => addClubVideo(clubDispatch, videoData),
      agency: () => addAgencyVideo(agencyDispatch, videoData),
      university: () => addUniversityVideo(universityDispatch, videoData),
      league: () => addLeagueVideo(leagueDispatch, videoData),
      fan: () => addFanVideo(fanDispatch, videoData),
      staff: () => addStaffVideo(staffDispatch, videoData),
    };

    if (videoData.url) {
      // Se existir uma URL preenchida, é disparado uma função baseada na prop ProfileType
      const action = actions[profileType];
      action();
      onCloseClick();
    } else {
      // Caso não existir é exibido uma mensagem de erro
      setMessage(t('insert_video_url'));
    }
  };

  return (
    <Styled.YoutubeVideoContainer>

      <Row>
        <IconDiv hovercolor={theme.colors.mediumred} onclick={onBackClick}>
          <ArrowBack />
        </IconDiv>
        <Subtitle text={t('details')} uppercase />
        <IconDiv hovercolor={theme.colors.mediumred} onclick={onCloseClick}>
          <Close />
        </IconDiv>
      </Row>

      <AuthForm onSubmit={handleVideoUpload}>

        <AuthInput
          name="youtubeVideoUrl_input"
          id="youtubeVideoUrl_input"
          title={t('url')}
          type="text"
          placeholder={t('youtube_video_url')}
          value={videoData.url}
          onChange={(e) => setVideoData((prevData) => ({ ...prevData, url: e.target.value }))}
        />

        <AuthButton
          id="youtubeVideoUpload"
          name={t('confirm')}
          value={t('confirm')}
          bgcolor={theme.colors.red}
          bghover={theme.colors.mediumred}
        />

        {message && <Text text={message} />}

      </AuthForm>

    </Styled.YoutubeVideoContainer>
  );
}

YoutubeVideo.propTypes = {
  onCloseClick: Prop.func,
  onBackClick: Prop.func,
  profileType: Prop.string.isRequired,
};
