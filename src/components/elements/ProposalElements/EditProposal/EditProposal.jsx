import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './EditProposal-Styles';
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

export function EditProposal({ onclick, proposal }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (proposalData) {
      editProposal(s2tDispatch, proposalData);
      navigate(-1);
    }
  };

  return (
    <Styled.EditProposalContainer>
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
              name="editPlayerOpportunityLeague_input"
              id="editPlayerOpportunityLeague_input"
              placeholder={t('which_league_opportunity')}
              title={t('league')}
              value={proposalData.details.org}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, org: e.target.value } }))}
              required
            />

            <AuthInput
              type="text"
              name="editPlayerOpportunityCountry_input"
              id="editPlayerOpportunityCountry_input"
              placeholder={t('which_country_opportunity')}
              title={t('country')}
              required
              value={proposalData.details.country}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, country: e.target.value } }))}
            />

            <AuthDropdown
              title={t('which_position_opportunity')}
              placeholder={t('select_position')}
              id="editPlayerOpportunityPosition"
              required
              options={s2tState.formOptions.positions}
              selectedvalue={proposalData.details.opportunity}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, opportunity: option } }))}
            />

            <AuthDropdown
              title={t('which_category_opportunity')}
              id="editPlayerOpportunityCompetitiveCategory"
              placeholder={t('select_category')}
              options={s2tState.formOptions.competitiveCategory}
              selectedvalue={proposalData.details.category}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, category: option } }))}
              required
            />

            <AuthInput
              type="date"
              name="editPlayerOpportunityDisponibility_input"
              id="editPlayerOpportunityDisponibility_input"
              title={t('which_disponibility_date_opportunity')}
              value={proposalData.details.disponibility}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, disponibility: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="editPlayerOpportunityMinimumHeight_input"
              id="editPlayerOpportunityMinimumHeight_input"
              placeholder={t('which_minimum_height_opportunity')}
              title={t('minimum_height')}
              value={proposalData.details.minHeight}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, minHeight: e.target.value } }))}
            />

            <AuthInput
              type="number"
              name="editPlayerOpportunityMinimumAge_input"
              id="editPlayerOpportunityMinimumAge_input"
              placeholder={t('which_minimum_age_opportunity')}
              title={t('minimum_age')}
              value={proposalData.details.age.minAge}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, age: { ...prevData.details.age, minAge: e.target.value } } }))}
            />

            <AuthInput
              type="text"
              name="editPlayerOpportunityMaximumAge_input"
              id="editPlayerOpportunityMaximumAge_input"
              placeholder={t('which_maximum_age_opportunity')}
              title={t('maximum_age')}
              value={proposalData.details.age.maxAge}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, age: { ...prevData.details.age, maxAge: e.target.value } } }))}
            />

            <AuthInput
              type="text"
              name="editPlayerOpportunityMininumPayment_input"
              id="editPlayerOpportunityMininumPayment_input"
              placeholder={t('which_minimum_payment_opportunity')}
              title={t('minimum_payment')}
              required
              value={proposalData.details.payment.minPayment}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, minPayment: e.target.value } } }))} // Atualize aqui
            />

            <AuthInput
              type="text"
              name="editPlayerOpportunityMaximumPayment_input"
              id="editPlayerOpportunityMaximumPayment_input"
              placeholder={t('which_maximum_payment_opportunity')}
              title={t('maximum_payment')}
              value={proposalData.details.payment.maxPayment}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, maxPayment: e.target.value } } }))} // Atualize aqui
            />

            <AuthDropdown
              title={t('which_currency')}
              placeholder={t('select_currency')}
              id="editPlayerOpportunityMaymentCurrency"
              options={s2tState.formOptions.currency}
              selectedvalue={proposalData.details.payment.currency}
              required
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, currency: option } } }))}
            />

          </AuthLayout>

          <ColumnContainer>
            <Subtitle text={t('description')} uppercase />
            <TextArea
              placeholder={t('insert_description_opportunity')}
              name="editPlayerOpportunityDescription"
              value={proposalData.description}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, description: e.target.value }))}
            />
          </ColumnContainer>

          <ColumnContainer>
            <Subtitle text={t('requirements')} uppercase />
            <TextArea
              placeholder={t('insert_requirements_opportunity')}
              name="editPlayerOpportunityRequirements"
              value={proposalData.requirements}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, requirements: e.target.value }))}
            />
          </ColumnContainer>

          <AuthButton
            name="editPlayerOpportunity_submit"
            id="editPlayerOpportunity_submit"
            value={t('confirm_edit')}
          />
        </AuthForm>
      </AuthWrapper>

    </Styled.EditProposalContainer>
  );
}

EditProposal.propTypes = {
  onclick: Prop.func,
  proposal: Prop.arrayOf(Prop.object),
};
