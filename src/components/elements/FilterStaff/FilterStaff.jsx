import Prop from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { OptionsOutline as OptionsIcons } from '@styled-icons/evaicons-outline/OptionsOutline';
import axios from 'axios';
import { Password } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as Styled from './FilterStaff-Styles';
import { AuthInput } from '../AuthElements/AuthInput/AuthInput';
import { AuthDropdown } from '../AuthElements/AuthDropdown/AuthDropdown';
import { AuthWrapper } from '../AuthElements/AuthWrapper/AuthWrapper';
import { AuthForm } from '../AuthElements/AuthForm/AuthForm';
import { GridLayout } from '../../GridLayout/GridLayout';
import { AuthSearch } from '../AuthElements/AuthSearch/AuthSearch';
import { Row } from '../../RowContainer/Row';
import { IconDiv } from '../IconDiv/IconDiv';
import { AuthLayout } from '../AuthElements/AuthLayout/AuthLayout';
import { SearchWrapper } from '../AuthElements/AuthSearch/AuthSearch-Styles';
import { theme } from '../../../styles/theme';
// import { filterStaff, searchStaff } from '../../../contexts/s2tContext/s2tActions';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';

export function FilterStaff() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);

  const [filterData, setFilterData] = useState({
    birthCountry: '',
    operationCountry: '',
    league: '',
    competitiveLevel: '',
    competitiveCategory: '',
    minimumPayment: '',
    maximumPayment: '',
    minimumTransferValue: '',
    maximumTransferValue: '',
    yearsOfExperience: '',
    area: '',
    languages: '',
    passports: '',
    coursesOrTrainings: '',
    certificatesOrLicenses: '',
  });

  const [searchData, setSearchData] = useState('');

  // useEffect(() => {
  //   filterStaff(s2tDispatch, filterData);
  // }, [filterData]);

  // useEffect(() => {
  //   searchStaff(s2tDispatch, searchData);
  // }, [searchData]);

  console.log(filterData);

  return (
    <Styled.FilterStaffContainer isopen={isOpen ? 'isopen' : undefined}>
      <AuthWrapper>

        <AuthForm>

          <Row>
            <AuthDropdown
              id="competitiveCategory"
              options={s2tState.formOptions.competitiveCategory}
              placeholder={t('competitive_category')}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, competitiveCategory: option }))}
            />

            <SearchWrapper>
              <IconDiv onclick={() => setIsOpen(!isOpen)} name={t('filter_opportunities')}>
                <OptionsIcons />
              </IconDiv>
              <AuthSearch
                id="searchStaff"
                name="searchStaff"
                onChange={(e) => setSearchData(e.target.value)}
              />
            </SearchWrapper>
          </Row>

          <AuthLayout isopen={isOpen}>

            <AuthDropdown
              id="filterStaffCompetitiveLevel"
              placeholder={t('competitive_level')}
              options={s2tState.formOptions.competitiveLevels}
              otheroption
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthDropdown
              id="filterStaffArea"
              placeholder={t('area')}
              options={s2tState.formOptions.staffProfileType}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, area: option }))}
            />

            <AuthDropdown
              id="filterStaffLeague"
              placeholder={t('league')}
              options={s2tState.formOptions.league}
              otheroption
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, league: option }))}
            />

            <AuthInput
              type="number"
              name="filterMinimumPayment_input"
              id="filterMinimumPayment_input"
              placeholder={t('minimum_payment')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumPayment: e.target.value }))}
              value={filterData.minimumPayment}
            />

            <AuthInput
              type="number"
              name="filterMaximumPayment_input"
              id="filterMaximumPayment_input"
              placeholder={t('maximum_payment')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, maximumPayment: e.target.value }))}
              value={filterData.maximumPayment}
            />

            <AuthInput
              type="number"
              name="filterMinimumTransferValue_input"
              id="filterMinimumTransferValue_input"
              placeholder={t('minimum_transfer_value')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumTransferValue: e.target.value }))}
              value={filterData.minimumTransferValue}
            />

            <AuthInput
              type="number"
              name="filterMaximumTransferValue_input"
              id="filterMaximumTransferValue_input"
              placeholder={t('maximum_transfer_value')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, maximumTransferValue: e.target.value }))}
              value={filterData.maximumTransferValue}
            />

            <AuthInput
              type="text"
              name="filterBirthCountry_input"
              id="filterBirthCountry_input"
              placeholder={t('birth_country')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, birthCountry: e.target.value }))}
              value={filterData.birthCountry}
            />

            <AuthInput
              type="text"
              name="filterOperationCountry_input"
              id="filterOperationCountry_input"
              placeholder={t('operation_country')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, operationCountry: e.target.value }))}
              value={filterData.operationCountry}
            />

            <AuthInput
              type="number"
              name="filterStaffYearsOfExperience_input"
              id="filterStaffYearsOfExperience_input"
              placeholder={t('years_of_experience')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, yearsOfExperience: e.target.value }))}
              value={filterData.yearsOfExperience}
            />

            <AuthInput
              type="text"
              name="filterStaffLanguages_input"
              id="filterStaffLanguages_input"
              placeholder={t('spoken_languages')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, languages: e.target.value }))}
              value={filterData.languages}
            />

            <AuthInput
              type="text"
              name="filterStaffLPassports_input"
              id="filterStaffPassports_input"
              placeholder={t('passports')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, passports: e.target.value }))}
              value={filterData.passports}
            />

            <AuthInput
              type="text"
              name="filterStaffCoursesOrTrainings_input"
              id="filterStaffCoursesOrTrainings_input"
              placeholder={t('courses_or_trainings')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, coursesOrTrainings: e.target.value }))}
              value={filterData.coursesOrtrainings}
            />

            <AuthInput
              type="text"
              name="filterStaffCertificatesOrLicenses_input"
              id="filterStaffCertificatesOrLicenses_input"
              placeholder={t('certificates_or_licenses')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, certificatesOrLicenses: e.target.value }))}
              value={filterData.certificatesOrLicenses}
            />

          </AuthLayout>

        </AuthForm>

      </AuthWrapper>

    </Styled.FilterStaffContainer>
  );
}

FilterStaff.propTypes = {
};
