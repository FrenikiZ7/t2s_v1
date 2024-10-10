import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useTranslation } from 'react-i18next';
import * as Styled from './StaffProposalModal-Styles';
import { Title } from '../../Title/Title';
import { GridTwoColumn } from '../../../GridTwoColumn/GridTwoColumn';
import { Button } from '../../Button/Button';
import { theme } from '../../../../styles/theme';
import { Subtitle } from '../../Subtitle/Subtitle';
import { InfoInRow } from '../../InfoInRow/InfoInRow';
import { Text } from '../../Text/Text';
import { ColumnContainer } from '../../../ColumnContainer/Column-Styles';
import { TextArea } from '../../TextArea/TextArea';
import { Row } from '../../../RowContainer/Row';
import { IconDiv } from '../../IconDiv/IconDiv';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { FavoriteIcon } from '../../FavoriteIcon/FavoriteIcon';

export function StaffProposalModal({
  proposal, onclick, isapplied,
}) {
  const { t } = useTranslation();

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    // Lógica para envio de mensagem ou criar uma função dispatch com ela
  };

  const messages = ['opportunity_player_message_1', 'opportunity_player_message_2'];

  const [message, setMessage] = useState('');

  const toggleMessage = (option) => {
    setMessage(message === option ? '' : option);
  };

  return (

    <Styled.StaffProposalModalElement>

      {proposal && (
      <>
        <Row>
          <Title text={t('opportunity')} uppercase />

          <IconDiv
            onclick={onclick}
            name={t('close_opportunity')}
            hovercolor={theme.colors.red}
          >
            <CloseIcon />
          </IconDiv>
        </Row>

        <Subtitle text={t('details')} uppercase />

        <GridTwoColumn>

          {proposal.details.from && <InfoInRow infotitle={t('opportunity_from')} info={proposal.details.from} uppercase />}
          {proposal.details.date && <InfoInRow infotitle={t('date')} info={proposal.details.date} uppercase />}
          {proposal.details.disponibility ? <InfoInRow infotitle={t('avaliability')} info={proposal.details.disponibility} uppercase /> : <InfoInRow infotitle={t('avaliability')} info="Imediato" uppercase />}
          {proposal.details.org && <InfoInRow infotitle={t('league')} info={proposal.details.org} uppercase />}
          {proposal.details.country && <InfoInRow infotitle={t('country')} info={proposal.details.country} uppercase />}
          {proposal.details.category && <InfoInRow infotitle={t('category')} info={proposal.details.category} uppercase />}
          {proposal.details.yearsOfExperience && <InfoInRow infotitle={t('years_of_experience')} info={proposal.details.yearsOfExperience} uppercase />}
          {proposal.details.languages && <InfoInRow infotitle={t('languages')} info={proposal.details.languages} uppercase />}
          {proposal.details.passports && <InfoInRow infotitle={t('passports')} info={proposal.details.passports} uppercase />}
          {proposal.details.opportunity && <InfoInRow infotitle={t('position')} info={proposal.details.opportunity} uppercase />}
          {proposal.details.payment.minPayment && <InfoInRow infotitle={t('payment')} info={`${proposal.details.payment.minPayment} | ${proposal.details.payment.maxPayment} ${proposal.details.payment.currency}`} uppercase />}

        </GridTwoColumn>

        {proposal.details.certificatesOrLicenses && (
        <ColumnContainer>
          <Subtitle text={t('required_certificates_or_licenses')} uppercase />
          <Text text={proposal.details.certificatesOrLicenses} />
        </ColumnContainer>
        )}

        {proposal.details.coursesOrTrainings && (
        <ColumnContainer>
          <Subtitle text={t('required_courses_or_trainings')} uppercase />
          <Text text={proposal.details.coursesOrTrainings} />
        </ColumnContainer>
        )}

        {proposal.description && (
        <ColumnContainer>
          <Subtitle text={t('description')} uppercase />
          <Text text={proposal.description} />
        </ColumnContainer>
        )}

        {proposal.requirements && (
        <ColumnContainer>
          <Subtitle text={t('requirements')} uppercase />
          <Text text={proposal.requirements} />
        </ColumnContainer>
        )}

        <ColumnContainer>
          <Subtitle text={t('message')} uppercase />

          <GridLayout>
            {messages.map((msgKey) => (
              <Button
                key={msgKey}
                text={t(msgKey)}
                bgcolor={message === t(msgKey) ? theme.colors.primary : theme.colors.lightprimary}
                bghover={theme.colors.primary}
                textcolor={theme.colors.black}
                texthover={theme.colors.black}
                border={theme.colors.lightprimary}
                borderhover={theme.colors.primary}
                active={message === t(msgKey)}
                onclick={() => toggleMessage(t(msgKey))}
              />
            ))}
          </GridLayout>

          <TextArea
            info="message"
            value={message}
          />

          {!isapplied ? (
            <>
              {message ? (
                <Button
                  text={t('send_message')}
                  bgcolor={theme.colors.quaternary}
                  bghover={theme.colors.secondary}
                  textcolor={theme.colors.white}
                  texthover={theme.colors.white}
                  border={theme.colors.tertiary}
                  borderhover={theme.colors.white}
                  onclick={handleSubmitMessage}
                />
              ) : (
                <Button
                  text={t('send_message')}
                  bgcolor={theme.colors.darkgray}
                  bghover={theme.colors.darkgray}
                  textcolor={theme.colors.white}
                  texthover={theme.colors.white}
                  border={theme.colors.darkgray}
                  borderhover={theme.colors.lightgray}
                />
              )}
            </>
          ) : (
            <Button
              text={t('opportunity_message_send')}
              bgcolor={theme.colors.darkgray}
              bghover={theme.colors.darkgray}
              textcolor={theme.colors.white}
              texthover={theme.colors.white}
              border={theme.colors.darkgray}
              borderhover={theme.colors.lightgray}
            />
          )}

        </ColumnContainer>
      </>
      )}

    </Styled.StaffProposalModalElement>

  );
}

StaffProposalModal.propTypes = {
  proposal: Prop.func,
  onclick: Prop.func,
  isapplied: Prop.bool,
};
