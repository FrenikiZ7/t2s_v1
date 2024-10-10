import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './NewStaffProposal-Styles';
import { Subtitle } from '../../Subtitle/Subtitle';
import { ColumnContainer } from '../../../ColumnContainer/Column-Styles';
import { AuthWrapper } from '../../AuthElements/AuthWrapper/AuthWrapper';
import { AuthForm } from '../../AuthElements/AuthForm/AuthForm';
import { TextArea } from '../../TextArea/TextArea';
import { AuthInput } from '../../AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../../AuthElements/AuthButton/AuthButton';
import { IconDiv } from '../../IconDiv/IconDiv';
import { Title } from '../../Title/Title';
import { Row } from '../../../RowContainer/Row';
import { AuthLayout } from '../../AuthElements/AuthLayout/AuthLayout';
import { AuthDropdown } from '../../AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { addProposal } from '../../../../contexts/s2tContext/s2tActions';

export function NewStaffProposal({ onclick }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const currentDate = new Date().toISOString().substring(0, 10); // Recebe a data atual no formato YYYY-MM-DD

  const [proposalData, setProposalData] = useState({
    opportunityId: 0,
    details: {
      from: '', // Tipo de perfil do usuário que publicou a proposta
      date: currentDate,
      disponibility: '',
      category: '',
      yearsOfExperience: '',
      languages: '',
      passports: '',
      opportunity: '',
      country: '',
      org: '',
      certificatesOrLicenses: '',
      coursesOrTrainings: '',
      payment: {
        minPayment: '',
        maxPayment: '',
        currency: '',
      },
    },
    description: '',
    requirements: '',
  });

  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProposal(s2tDispatch, proposalData);
    onclick();
  };

  return (
    <Styled.NewStaffProposalContainer>
      <Row>

        <Title text={t('create_new_opportunity')} uppercase />

        <IconDiv name={t('back')} onclick={onclick}>
          <CloseIcon />
        </IconDiv>
      </Row>

      <AuthWrapper>
        <AuthForm onSubmit={handleSubmit}>
          <Subtitle text={t('details')} uppercase />
          <AuthLayout isopen>
            <AuthInput
              type="text"
              name="staffOpportunityLeague_input"
              id="staffOpportunityLeague_input"
              placeholder={t('which_league_opportunity')}
              title={t('league')}
              value={proposalData.details.org}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, org: e.target.value } }))}
              required
            />

            <AuthInput
              type="text"
              name="staffOpportunityCountry_input"
              id="staffOpportunityCountry_input"
              placeholder={t('which_country_opportunity')}
              title={t('country')}
              required
              value={proposalData.details.country}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, country: e.target.value } }))}
            />

            <AuthDropdown
              title={t('area')}
              placeholder={t('select_area')}
              id="staffOpportunityArea"
              required
              options={s2tState.formOptions.staffProfileType}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, opportunity: option } }))}
            />

            <AuthDropdown
              title={t('which_category_opportunity')}
              id="staffOpportunityCompetitiveCategory"
              placeholder={t('select_category')}
              options={s2tState.formOptions.competitiveCategory}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, category: option } }))}
              required
            />

            <AuthInput
              type="number"
              name="staffOpportunityYearsOfExperience_input"
              id="staffOpportunityYearsOfExperience_input"
              placeholder={t('which_years_of_experience_opportunity')}
              title={t('years_of_experience')}
              value={proposalData.details.yearsOfExperience}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, yearsOfExperience: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="staffOpportunityLanguage_input"
              id="staffOpportunityLanguage_input"
              placeholder={t('which_languages_opportunity')}
              title={t('languages')}
              value={proposalData.details.languages}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, languages: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="staffOpportunityPassports_input"
              id="staffOpportunityPassports_input"
              placeholder={t('which_passports_opportunity')}
              title={t('passports')}
              value={proposalData.details.passports}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, passports: e.target.value } }))}
            />

            <AuthInput
              type="date"
              name="staffOpportunityDisponibility_input"
              id="staffOpportunityDisponibility_input"
              title={t('which_disponibility_date_opportunity')}
              value={proposalData.details.disponibility}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, disponibility: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="staffOpportunityCertificateOrLicenses_input"
              id="staffOpportunityCertificateOrLicenses_input"
              placeholder={t('certificate_or_license_name')}
              title={t('required_certificates_or_licenses')}
              value={proposalData.details.certificatesOrlicenses}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, certificatesOrlicenses: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="staffOpportunityCourses_input"
              id="staffOpportunityCourses_input"
              placeholder={t('course_or_training_name')}
              title={t('required_courses_or_trainings')}
              value={proposalData.details.coursesOrTranings}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, courses: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="staffOpportunityMininumPayment_input"
              id="staffOpportunityMininumPayment_input"
              placeholder={t('which_minimum_payment_opportunity')}
              title={t('minimum_payment')}
              required
              value={proposalData.details.payment.minPayment}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, minPayment: e.target.value } } }))} // Atualize aqui
            />

            <AuthInput
              type="text"
              name="staffOpportunityMaximumPayment_input"
              id="staffOpportunityMaximumPayment_input"
              placeholder={t('which_maximum_payment_opportunity')}
              title={t('maximum_payment')}
              value={proposalData.details.payment.maxPayment}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, maxPayment: e.target.value } } }))} // Atualize aqui
            />

            <AuthDropdown
              title={t('which_currency')}
              placeholder={t('select_currency')}
              id="staffOpportunityPaymentCurrency"
              options={s2tState.formOptions.currency}
              required
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, currency: option } } }))}
            />

          </AuthLayout>

          <ColumnContainer>
            <Subtitle text={t('description')} uppercase />
            <TextArea
              placeholder={t('insert_description_opportunity')}
              name="staffOpportunityDescription"
              value={proposalData.description}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, description: e.target.value }))}
            />
          </ColumnContainer>

          <ColumnContainer>
            <Subtitle text={t('requirements')} uppercase />
            <TextArea
              placeholder={t('insert_requirements_opportunity')}
              name="staffOpportunityRequirements"
              value={proposalData.requirements}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, requirements: e.target.value }))}
            />
          </ColumnContainer>

          <AuthButton
            name="createStaffOpportunity_submit"
            id="createStaffOpportunity_submit"
            value={t('publish_opportunity')}
          />
        </AuthForm>
      </AuthWrapper>

    </Styled.NewStaffProposalContainer>
  );
}

NewStaffProposal.propTypes = {
  onclick: Prop.func,
};
