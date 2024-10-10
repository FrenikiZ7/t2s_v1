import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './EditStaffProposal-Styles';
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
import { editProposal } from '../../../../contexts/s2tContext/s2tActions';

export function EditStaffProposal({ onclick, proposal }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const [proposalData, setProposalData] = useState({
    opportunityId: proposal.opportunityId,
    details: {
      ...proposal.details,
    },
    description: proposal.description,
    requirements: proposal.requirements,
  });

  console.log(proposalData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (proposalData) {
      editProposal(s2tDispatch, proposalData);
      navigate(-1);
    }
  };

  return (
    <Styled.EditStaffProposalContainer>
      <Row>
        <Title text={t('edit_my_opportunity')} uppercase />

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
              name="editStaffOpportunityLeague_input"
              id="editStaffOpportunityLeague_input"
              placeholder={t('which_league_opportunity')}
              title={t('league')}
              value={proposalData.details.org}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, org: e.target.value } }))}
              required
            />

            <AuthInput
              type="text"
              name="editStaffOpportunityCountry_input"
              id="editStaffOpportunityCountry_input"
              placeholder={t('which_country_opportunity')}
              title={t('country')}
              required
              value={proposalData.details.country}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, country: e.target.value } }))}
            />

            <AuthDropdown
              title={t('which_area_opportunity')}
              placeholder={t('select_area')}
              id="editStaffOpportunityArea"
              required
              selectedvalue={proposalData.details.opportunity}
              options={s2tState.formOptions.staffProfileType}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, opportunity: option } }))}
            />

            <AuthDropdown
              title={t('which_category_opportunity')}
              id="editStaffOpportunityCompetitiveCategory"
              placeholder={t('select_category')}
              options={s2tState.formOptions.competitiveCategory}
              selectedvalue={proposalData.details.category}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, category: option } }))}
              required
            />

            <AuthInput
              type="number"
              name="editStaffOpportunityYearsOfExperience_input"
              id="editStaffOpportunityYearsOfExperience_input"
              placeholder={t('which_years_of_experience')}
              title={t('years_of_experience')}
              value={proposalData.details.yearsOfExperience}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, yearsOfExperience: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="editStaffOpportunityLanguage_input"
              id="editStaffOpportunityLanguage_input"
              placeholder={t('which_languages_opportunity')}
              title={t('languages')}
              value={proposalData.details.languages}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, languages: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="editStaffOpportunityPassports_input"
              id="editStaffOpportunityPassports_input"
              placeholder={t('which_passports_opportunity')}
              title={t('passports')}
              value={proposalData.details.passports}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, passports: e.target.value } }))}
            />

            <AuthInput
              type="date"
              name="editStaffOpportunityDisponibility_input"
              id="editStaffOpportunityDisponibility_input"
              title={t('which_disponibility_date')}
              value={proposalData.details.disponibility}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, disponibility: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="editStaffOpportunityCertificateOrLicenses_input"
              id="editStaffOpportunityCertificateOrLicenses_input"
              placeholder={t('certificate_license_name')}
              title={t('required_certificates_or_licenses')}
              value={proposalData.details.certificatesOrlicenses}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, certificatesOrlicenses: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="editStaffOpportunityCourses_input"
              id="editStaffOpportunityCourses_input"
              placeholder={t('course_training_name')}
              title={t('required_courses_or_trainings')}
              value={proposalData.details.coursesOrTrainings}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, courses: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="editStaffOpportunityMininumPayment_input"
              id="editStaffOpportunityMininumPayment_input"
              placeholder={t('which_minimum_payment')}
              title={t('minimum_payment')}
              required
              value={proposalData.details.payment.minPayment}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, minPayment: e.target.value } } }))} // Atualize aqui
            />

            <AuthInput
              type="text"
              name="editStaffOpportunityMaximumPayment_input"
              id="editStaffOpportunityMaximumPayment_input"
              placeholder={t('which_maximum_payment')}
              title={t('maximum_payment')}
              value={proposalData.details.payment.maxPayment}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, maxPayment: e.target.value } } }))} // Atualize aqui
            />

            <AuthDropdown
              title={t('which_currency')}
              placeholder={t('select_currency')}
              id="editStaffOpportunityPaymentCurrency"
              options={s2tState.formOptions.currency}
              required
              selectedvalue={proposalData.details.payment.currency}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, currency: option } } }))}
            />

          </AuthLayout>

          <ColumnContainer>
            <Subtitle text={t('description')} uppercase />
            <TextArea
              placeholder={t('insert_description')}
              name="editStaffOpportunityDescription"
              value={proposalData.description}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, description: e.target.value }))}
            />
          </ColumnContainer>

          <ColumnContainer>
            <Subtitle text={t('requirements')} uppercase />
            <TextArea
              placeholder={t('insert_requirements')}
              name="editStaffOpportunityRequirements"
              value={proposalData.requirements}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, requirements: e.target.value }))}
            />
          </ColumnContainer>

          <AuthButton
            name="editStaffOpportunity_submit"
            id="editStaffOpportunity_submit"
            value={t('confirm_edit')}
          />
        </AuthForm>
      </AuthWrapper>

    </Styled.EditStaffProposalContainer>
  );
}

EditStaffProposal.propTypes = {
  onclick: Prop.func,
  proposal: Prop.arrayOf(Prop.object),
};
