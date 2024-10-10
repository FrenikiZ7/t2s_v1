import Prop from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { OptionsOutline as OptionsIcons } from '@styled-icons/evaicons-outline/OptionsOutline';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './FilterStaffProposals-Styles';
import { AuthInput } from '../../AuthElements/AuthInput/AuthInput';
import { AuthDropdown } from '../../AuthElements/AuthDropdown/AuthDropdown';
import { AuthWrapper } from '../../AuthElements/AuthWrapper/AuthWrapper';
import { AuthForm } from '../../AuthElements/AuthForm/AuthForm';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { AuthSearch } from '../../AuthElements/AuthSearch/AuthSearch';
import { Row } from '../../../RowContainer/Row';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthLayout } from '../../AuthElements/AuthLayout/AuthLayout';
import { SearchWrapper } from '../../AuthElements/AuthSearch/AuthSearch-Styles';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { filterPlayerProposals, searchPlayerProposals } from '../../../../contexts/s2tContext/s2tActions';

export function FilterStaffProposals() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);

  const [filterData, setFilterData] = useState({
    opportunityType: '',
    yearsOfExperience: '',
    area: '',
    country: '',
    languages: '',
    passports: '',
    league: '',
    competitiveLevel: '',
    coursesOrTrainings: '',
    certificatesOrLicenses: '',
    minimumPayment: '',
  });

  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    filterPlayerProposals(s2tDispatch, filterData);
  }, [filterData]);

  useEffect(() => {
    searchPlayerProposals(s2tDispatch, searchData);
  }, [searchData]);

  return (
    <Styled.FilterStaffProposalsContainer isopen={isOpen ? 'isopen' : undefined}>
      <AuthWrapper>
        <AuthForm>

          <Row>
            <AuthDropdown
              id="filterStaffOpportunityType"
              options={s2tState.formOptions.opportunityType}
              placeholder={t('all')}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, opportunityType: option }))}
            />

            <SearchWrapper>
              <IconDiv onclick={() => setIsOpen(!isOpen)} name={t('filter_opportunity')}>
                <OptionsIcons />
              </IconDiv>
              <AuthSearch
                name="searchStaffOpportunity"
                id="searchStaffOpportunity"
                onChange={(e) => setSearchData(e.target.value)}
              />
            </SearchWrapper>

          </Row>

          <AuthLayout isopen={isOpen}>

            <AuthDropdown
              id="filterStaffOpportunityCompetitiveLevel"
              placeholder={t('competitive_level')}
              options={s2tState.formOptions.competitiveLevels}
              otheroption
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthDropdown
              placeholder={t('area')}
              id="filterStaffOpportunityArea"
              options={s2tState.formOptions.staffProfileType}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, area: option }))}
            />

            <AuthDropdown
              id="filterStaffOpportunityLeague"
              placeholder={t('league')}
              options={s2tState.formOptions.league}
              otheroption
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, league: option }))}
            />

            <AuthInput
              type="text"
              name="filterStaffOpportunityCountry_input"
              id="filterStaffOpportunityCountry_input"
              placeholder={t('country')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, country: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterStaffOpportunityYearsOfExperience_input"
              id="filterStaffOpportunityYearsOfExperience_input"
              placeholder={t('years_of_experience')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, yearsOfExperience: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterStaffOpportunityMinimumPayment_input"
              id="filterStaffOpportunityMinimumPayment_input"
              placeholder={t('minimum_payment')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumPayment: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterStaffOpportunityMaximumPayment_input"
              id="filterStaffOpportunityMaximumPayment_input"
              placeholder={t('maximum_payment')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, maximumPayment: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterStaffOpportunityLanguages_input"
              id="filterStaffOpportunityLanguages_input"
              placeholder={t('required_languages')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, languages: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterStaffOpportunityLPassports_input"
              id="filterStaffOpportunityPassports_input"
              placeholder={t('required_passports')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, passports: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterStaffOpportunityCourses_input"
              id="filterStaffOpportunityCourses_input"
              placeholder={t('required_courses_or_trainings')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, coursesOrTrainings: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterStaffOpportunityCertificatesOrLicenses_input"
              id="filterStaffOpportunityCertificatesOrLicenses_input"
              placeholder={t('required_certificates_or_licenses')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, certificatesOrLicenses: e.target.value }))}
            />

          </AuthLayout>

        </AuthForm>

      </AuthWrapper>

    </Styled.FilterStaffProposalsContainer>
  );
}

FilterStaffProposals.propTypes = {
};
