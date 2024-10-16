import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './Staff-Styles';

import { AuthForm } from '../../../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthWrapper } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { Subtitle } from '../../../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../../../styles/theme';
import { AuthContainer } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { AuthRadio } from '../../../../../../components/elements/AuthElements/AuthRadio/AuthRadio';
import { AuthHistoric } from '../../../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric';
import { Row } from '../../../../../../components/RowContainer/Row';
import { AuthAchievement } from '../../../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { AuthQualCheck } from '../../../../../../components/elements/AuthElements/AuthQualCheck/AuthQualCheck';
import { AuthDropdown } from '../../../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../../../../contexts/s2tContext/S2tContext';
import { StaffContext } from '../../../../../../contexts/userContext/StaffProvider/StaffContext';
import {
  addClubHistory, addAwardHistory, changeProfileInfo,
  addCertificateOrLicenseHistory,
  addCourseOrTrainingHistory,
} from '../../../../../../contexts/userContext/StaffProvider/staffActions';

export function Staff() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const staffContext = useContext(StaffContext);
  const { staffState, staffDispatch } = staffContext;

  const [profileData, setProfileData] = useState({
    ...staffState.profile.info,
  });

  // Calcula a idade do usuário baseado na data de nascimento
  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(profileData.birthDate);
      if (birthDate) {
        const today = new Date();
        const ageInMilliseconds = today - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24
   * 365.25));
        setProfileData((prevData) => ({ ...prevData, age: ageInYears }));
      }
    };

    calculateAge();
  }, [profileData.birthDate]);

  // Historic Handlers
  const [clubHistory, setClubHistory] = useState(
    {
      name: '',
      earliestDate: '',
      latestDate: '',
    },
  );

  const handleAddClub = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (clubHistory.name && clubHistory.earliestDate) {
      addClubHistory(staffDispatch, clubHistory);

      setClubHistory({
        name: '',
        earliestDate: '',
        latestDate: '',
      });
    } else {
      console.error(t('fill_all_fields'));
    }
  };

  const [awardHistory, setAwardHistory] = useState(
    {
      name: '',
      date: '',
    },
  );

  const handleAddAward = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (awardHistory.name && awardHistory.date) {
      // lógica para alterar o histórico de títulos e prêmios no backend

      addAwardHistory(staffDispatch, awardHistory);

      setAwardHistory({
        name: '',
        date: '',
      });
    } else {
      console.error(t('fill_all_fields'));
    }
  };

  const [certificateOrLicenseHistory, setCertificateOrLicenseHistory] = useState(
    {
      name: '',
      earliestDate: '',
    },
  );

  const handleAddCertificateOrLicense = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (certificateOrLicenseHistory.name && certificateOrLicenseHistory.earliestDate) {
      // lógica para alterar o histórico de títulos e prêmios no backend

      addCertificateOrLicenseHistory(staffDispatch, certificateOrLicenseHistory);

      setCertificateOrLicenseHistory({
        name: '',
        earliestDate: '',
      });
    } else {
      console.error(t('fill_all_fields'));
    }
  };

  const [courseOrTrainingHistory, setCourseOrTrainingHistory] = useState(
    {
      earliestDate: '',
      date: '',
    },
  );

  const handleAddCourseOrTraining = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (courseOrTrainingHistory.name && courseOrTrainingHistory.earliestDate) {
      // lógica para alterar o histórico de títulos e prêmios no backend

      addCourseOrTrainingHistory(staffDispatch, courseOrTrainingHistory);

      setCourseOrTrainingHistory({
        name: '',
        earliestDate: '',
      });
    } else {
      console.error(t('fill_all_fields'));
    }
  };

  // Submit principal
  const handleSubmit = async (e) => {
    if (profileData) {
      e.preventDefault();
      changeProfileInfo(staffDispatch, profileData);
      navigate(-1);
    }
  };

  return (
    <Styled.StaffContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text={t('your_profile')} size={theme.sizes.xlarge} />

            <AuthDropdown
              title={t('profile_type_question')}
              id="staffProfileType"
              placeholder={t('select_type')}
              options={s2tState.formOptions.staffProfileType}
              selectedvalue={profileData.profileType}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, profileType: option }))}
            />

            <AuthDropdown
              title={t('which_competitive_level')}
              id="staffCompetitiveLevel"
              placeholder={t('select_level')}
              options={s2tState.formOptions.competitiveLevels}
              selectedvalue={profileData.competitiveLevel}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthInput
              type="text"
              name="staffPrimaryBirthCountry_input"
              id="staffPrimaryBirthCountry_input"
              title={t('primary_nationality')}
              placeholder={t('your_primary_nationality')}
              value={profileData.primaryNationality}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, primaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="staffSecondaryBirthCountry_input"
              id="staffSecondaryBirthCountry_input"
              title={t('secondary_nationality')}
              placeholder={t('your_secondary_nationality')}
              value={profileData.secondaryNationality}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, secondaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="staffPassports_input"
              id="staffPassports_input"
              title={t('have_passports_question')}
              placeholder={t('if_yes_list_the_countries')}
              value={profileData.passports}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, passports: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="staffPayment_input"
              id="staffPayment_input"
              title={t('payment')}
              placeholder={t('your_base_payment')}
              value={profileData.payment}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, payment: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="staffTransferValue_input"
              id="staffTransferValue_input"
              title={t('transfer_value')}
              placeholder={t('your_transfer_value')}
              value={profileData.transferValue}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, transferValue: e.target.value }))}
            />

            <Subtitle text={t('your_sporting_history')} size={theme.sizes.xlarge} />

            <Row>
              <AuthHistoric
              // Dados padrão do componente
                title={t('club_history')}
                id="staffClubHistory"
                inputtitle={t('club')}
                placeholder={t('club_name')}
              // Histórico do usuário (Dados anteriores que já estão salvos)
                historic={staffState.profile.clubs}
              // OnChanges para atualizar o clubHistory
                onChangeName={(e) => setClubHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeEarliestDate={(e) => setClubHistory((prevData) => ({ ...prevData, earliestDate: e.target.value }))}
                onChangeLatestDate={(e) => setClubHistory((prevData) => ({ ...prevData, latestDate: e.target.value || undefined }))}
              // Values para sincronizar os inputs com o estado do clubHistory
                nameValue={clubHistory.name}
                earliestDateValue={clubHistory.earliestDate}
                latestDateValue={clubHistory.latestDate}
                onClick={(e) => handleAddClub(e)}
              />

              <AuthAchievement
                title={t('titles_and_awards_history')}
                id="staffAwardsHistory"
                inputtitle={t('competition_award')}
                placeholder={t('competition_award_name')}
              // Histórico do usuário (Dados anteriores que já estão salvos)
                achievements={staffState.profile.awards}
              // OnChanges para atualizar o awardHistory
                onChangeName={(e) => setAwardHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setAwardHistory((prevData) => ({ ...prevData, date: e.target.value }))}
              // Values para sincronizar os inputs com o estado do awardHistory
                nameValue={awardHistory.name}
                dateValue={awardHistory.date}
                onClick={(e) => handleAddAward(e)}
              />
            </Row>

            <Subtitle text={t('your_academic_history')} size={theme.sizes.xlarge} />

            <Row>
              <AuthAchievement
                title={t('certificates_or_licenses')}
                id="staffCertificatesOrLicensesHistory"
                inputtitle={t('certificate_or_license')}
                placeholder={t('certificate_or_license_name')}
                // Histórico do usuário (Dados anteriores que já estão salvos)
                achievements={staffState.profile.certificatesOrLicenses}
                // OnChanges para atualizar o awardHistory
                onChangeName={(e) => setCertificateOrLicenseHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setCertificateOrLicenseHistory((prevData) => ({ ...prevData, earliestDate: e.target.value }))}
                // Values para sincronizar os inputs com o estado do awardHistory
                nameValue={certificateOrLicenseHistory.name}
                dateValue={certificateOrLicenseHistory.earliestDate}
                onClick={(e) => handleAddCertificateOrLicense(e)}
              />

              <AuthAchievement
                title={t('courses_or_trainings')}
                id="staffCoursesOrTrainingsHistory"
                inputtitle={t('course_or_training')}
                placeholder={t('course_or_training_name')}
                // Histórico do usuário (Dados anteriores que já estão salvos)
                achievements={staffState.profile.coursesOrTrainings}
                // OnChanges para atualizar o awardHistory
                onChangeName={(e) => setCourseOrTrainingHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setCourseOrTrainingHistory((prevData) => ({ ...prevData, earliestDate: e.target.value }))}
                // Values para sincronizar os inputs com o estado do awardHistory
                nameValue={courseOrTrainingHistory.name}
                dateValue={courseOrTrainingHistory.earliestDate}
                onClick={(e) => handleAddCourseOrTraining(e)}
              />
            </Row>

            <AuthButton
              name="editOStaffProfile_submit"
              id="editStaffProfile_submit"
              value={t('confirm_changes')}
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.StaffContainer>

  );
}
