import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './Fan-Styles';

import { AuthForm } from '../../../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthWrapper } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { Subtitle } from '../../../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../../../styles/theme';
import { AuthContainer } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { S2tContext } from '../../../../../../contexts/s2tContext/S2tContext';
import { changeProfileInfo } from '../../../../../../contexts/userContext/FanProvider/fanActions';
import { FanContext } from '../../../../../../contexts/userContext/FanProvider/FanContext';

export function Fan() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const fanContext = useContext(FanContext);
  const { fanState, fanDispatch } = fanContext;

  const [profileData, setProfileData] = useState({
    ...fanState.profile.info,
  });

  const handleSubmit = async (e) => {
    if (profileData) {
      e.preventDefault();
      changeProfileInfo(fanDispatch, profileData);
      navigate(-1);
    }
  };

  return (
    <Styled.FanContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text={t('your_profile')} size={theme.sizes.xlarge} />

            <AuthInput
              type="text"
              name="fanBirthCountry_input"
              id="fanBirthCountry_input"
              title={t('nationality')}
              placeholder={t('your_nationality')}
              value={profileData.nationality}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, nationality: e.target.value }))}
            />

            <AuthButton
              name="editFanProfile_submit"
              id="editFanProfile_submit"
              value={t('confirm_changes')}
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.FanContainer>

  );
}
