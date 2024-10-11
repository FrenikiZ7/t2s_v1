import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { DocumentPdf as DocumentPdfIcon, DocumentTableArrowRight } from '@styled-icons/fluentui-system-filled';
import { useTranslation } from 'react-i18next';
import * as Styled from './EventModal-Styles';
import { FloatingMenu } from '../../../FloatingMenu/FloatingMenu';
import { Row } from '../../../RowContainer/Row';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { Subtitle } from '../../Subtitle/Subtitle';
import { GridTwoColumn } from '../../../GridTwoColumn/GridTwoColumn';
import { InfoInRow } from '../../InfoInRow/InfoInRow';
import { Column } from '../../../ColumnContainer/Column';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';
import { theme } from '../../../../styles/theme';
import { AuthInput } from '../../AuthElements/AuthInput/AuthInput';
import { AuthOptions } from '../../AuthElements/AuthOptions/AuthOptions';
import { AuthCheckbox } from '../../AuthElements/AuthCheckbox/AuthCheckbox';
import { GridOneColumn } from '../../../GridOneColumn/GridOneColumn';
import { AuthForm } from '../../AuthElements/AuthForm/AuthForm';
import { StyledLink } from '../../StyledLink/StyledLink';

export function EventModal({ event, onclick, ownerview }) {
  const [isRegistering, setIsRegistering] = useState();
  const { t } = useTranslation();

  return (
    <Styled.EventModalContainer>
      {event && (
      <>
        <Row>
          {event.title && <Title text={event.title} uppercase />}
          <IconDiv
            onclick={onclick}
            name={t('close_event')}
            hovercolor={theme.colors.red}
          >
            <CloseIcon />
          </IconDiv>
        </Row>

        <Subtitle text="Detalhes" uppercase />

        <GridOneColumn>
          {event.organizer && <InfoInRow infotitle={t('organizer')} info={event.organizer} uppercase />}
          {event.startDate && <InfoInRow infotitle={t('start_date')} info={event.startDate} uppercase />}
          {event.endDate && <InfoInRow infotitle={t('end_date')} info={event.endDate} uppercase />}
          {event.startHour && <InfoInRow infotitle={t('start_hour')} info={`${event.startHour}h`} uppercase />}
          {event.endHour && <InfoInRow infotitle={t('end_hour')} info={`${event.endHour}h`} uppercase />}
          {event.country && <InfoInRow infotitle={t('country')} info={event.country} uppercase />}
          {event.state && <InfoInRow infotitle={t('state')} info={event.state} uppercase />}
          {event.zipCode && <InfoInRow infotitle={t('zip_code')} info={event.zipCode} uppercase />}
          {event.platform && <InfoInRow infotitle={t('platform')} info={event.platform} uppercase />}

        </GridOneColumn>

        {event.adress && (
          <Column>
            <Subtitle text={t('adress')} uppercase />
            <Text text={event.adress} />
          </Column>
        )}

        {event.description && (
        <Column>
          <Subtitle text={t('description')} uppercase />
          <Text text={event.description} />
        </Column>
        )}

        {/* {isRegistering && (
          <AuthForm>
            <AuthInput
              title="Nome"
              type="text"
              name="completeName_input"
              id="completeName_input"
              placeholder="Seu nome completo"
              required
            />

            <AuthInput
              title="Endereço"
              type="text"
              name="address_input"
              id="address_input"
              placeholder="Seu endereço completo"
              required
            />

            <AuthInput
              title="E-mail"
              type="email"
              name="email_input"
              id="email_input"
              placeholder="Seu e-mail cadastrado"
              required
            />

            <AuthInput
              title="Número de telefone"
              type="number"
              name="phoneNumber_input"
              id="phoneNumber_input"
              placeholder="Seu número de telefone cadastrado"
              required
            />

            <AuthInput
              title="Senha"
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha cadastrada"
              required
            />

            <AuthInput
              title="Confirme sua senha"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirme sua senha cadastrada"
              required
            />

            <StyledLink path="#" newtab>
              <IconDiv name="Documentos">
                <DocumentTableArrowRight />
              </IconDiv>
              <Text text="Acesse os documentos do evento" />
            </StyledLink>

            <AuthCheckbox
              text="
                Li, compreendi e concordo com todos os termos e condições descritos nos documentos acima. Além disso, reconheço que isto constitui uma assinatura digital em meu nome."
              id="acceptEventTerms"
            />
          </AuthForm>
        )} */}

        {/* {isRegistering ? (
          <Button
            text="Registrar"
            bgcolor={theme.colors.quaternary}
            bghover={theme.colors.secondary}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
            border={theme.colors.tertiary}
            borderhover={theme.colors.white}
            onclick={() => setIsRegistering(!isRegistering)}
          />
        ) : (
          <Button
            text="Eu quero participar"
            bgcolor={theme.colors.quaternary}
            bghover={theme.colors.secondary}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
            border={theme.colors.tertiary}
            borderhover={theme.colors.white}
            onclick={() => setIsRegistering(!isRegistering)}
          />
        )} */}

        {event.path && !ownerview && (
        <Button
          path={event.path}
          text={t('participate')}
          bgcolor={theme.colors.quaternary}
          bghover={theme.colors.secondary}
          textcolor={theme.colors.white}
          texthover={theme.colors.white}
          border={theme.colors.tertiary}
          borderhover={theme.colors.white}
        />
        )}

      </>
      )}
    </Styled.EventModalContainer>
  );
}

EventModal.propTypes = {
  event: Prop.arrayOf(Prop.object).isRequired,
  onclick: Prop.func,
  ownerview: Prop.bool,
};
