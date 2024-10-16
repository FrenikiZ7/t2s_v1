import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './AuthAchievement-Styles';
import { AuthInfo } from '../AuthInfo/AuthInfo';
import { AuthInput } from '../AuthInput/AuthInput';
import { Button } from '../../Button/Button';
import { theme } from '../../../../styles/theme';
import { removeAcademicHistory, removeAwardHistory } from '../../../../contexts/userContext/PlayerProvider/playerActions';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { removeCompetitionHistory, removeAwardHistory as removeClubAwardHistory } from '../../../../contexts/userContext/ClubProvider/clubActions';
import {
  removeCompetitionHistory as removeUniversityCompetitionHistory,
  removeAwardHistory as removeUniversityAwardHistory,
} from '../../../../contexts/userContext/UniversityProvider/universityActions';
import {
  removeCourseOrTrainingHistory as removeStaffCoursesOrTrainingsHistory,
  removeCertificateOrLicenseHistory as removeStaffCertificateOrLicenseHistory,
} from '../../../../contexts/userContext/StaffProvider/staffActions';

import { ClubContext } from '../../../../contexts/userContext/ClubProvider/ClubContext';
import { UniversityContext } from '../../../../contexts/userContext/UniversityProvider/UniversityContext';
import { StaffContext } from '../../../../contexts/userContext/StaffProvider/StaffContext';

export function AuthAchievement({
  title = '', id, inputtitle, placeholder, achievements, onChangeName, onChangeDate, onClick,
  nameValue, dateValue,
}) {
  const { t } = useTranslation();

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;

  const universityContext = useContext(UniversityContext);
  const { universityState, universityDispatch } = universityContext;

  const staffContext = useContext(StaffContext);
  const { staffState, staffDispatch } = staffContext;

  const handleRemoveItem = (item) => {
    const actions = {
      playerAwardHistory: () => removeAwardHistory(playerDispatch, item),
      clubCompetitionsHistory: () => removeCompetitionHistory(clubDispatch, item),
      clubAwardsHistory: () => removeClubAwardHistory(clubDispatch, item),
      universityCompetitionsHistory: () => removeUniversityCompetitionHistory(universityDispatch, item),
      universityAwardsHistory: () => removeUniversityAwardHistory(universityDispatch, item),
      staffAwardsHistory: () => removeStaffAwardHistory(staffDispatch, item),
      staffCertificatesOrLicensesHistory: () => removeStaffCertificateOrLicenseHistory(staffDispatch, item),
      staffCoursesOrTrainingsHistory: () => removeStaffCoursesOrTrainingsHistory(staffDispatch, item),
    };

    if (actions[id]) {
      actions[id]();
    }
  };

  return (
    <Styled.AuthAchievementContainer>

      <Styled.AuthAchievementTitle>
        {title}
      </Styled.AuthAchievementTitle>

      {achievements && achievements.map((item) => (
        <AuthInfo
          key={item.id}
          text={`${item.name} | ${(item.date && item.date.slice(0, 4)) || (item.earliestDate && item.earliestDate.slice(0, 4))}`}
          onclick={() => handleRemoveItem(item)}
        />
      ))}

      <AuthInput
        type="text"
        name={`${id}_input`}
        id={`${id}_input`}
        placeholder={placeholder}
        title={inputtitle}
        onChange={onChangeName}
        value={nameValue}
      />

      <AuthInput
        type="date"
        name={`${id}AchievementYear_input`}
        id={`${id}AchievementYear_input`}
        placeholder={t('year_of_achievement')}
        title={t('date')}
        onChange={onChangeDate}
        value={dateValue}
      />

      <Button
        text={t('add')}
        bgcolor={theme.colors.quaternary}
        bghover={theme.colors.secondary}
        textcolor={theme.colors.white}
        texthover={theme.colors.white}
        border={theme.colors.tertiary}
        borderhover={theme.colors.white}
        onclick={onClick}
      />

    </Styled.AuthAchievementContainer>
  );
}

AuthAchievement.propTypes = {
  title: Prop.string,
  inputtitle: Prop.string,
  placeholder: Prop.string,
  id: Prop.string.isRequired,
  achievements: Prop.arrayOf(Prop.object),
  onChangeName: Prop.func,
  onChangeDate: Prop.func,
  onClick: Prop.func,
  nameValue: Prop.string,
  dateValue: Prop.string,
};
