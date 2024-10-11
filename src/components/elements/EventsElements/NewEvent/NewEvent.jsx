import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './NewEvent-Styles';
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
import { addEvent, addProposal } from '../../../../contexts/s2tContext/s2tActions';
import { AuthFile } from '../../AuthElements/AuthFile/AuthFile';
import { theme } from '../../../../styles/theme';

export function NewEvent({ onclick }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const [eventData, setEventData] = useState({
    id: '',
    title: '',
    subtitle: '',
    description: '',
    organizer: '',
    startDate: '',
    endDate: '',
    startHour: '',
    endHour: '',
    format: '',
    country: '',
    state: '',
    zipCode: '',
    adress: '',
    bannerImage: '',
    path: '',
  });

  const { t } = useTranslation();

  const handleEventImage = (e) => {
    const newFile = e.target.files[0];

    if (newFile) {
      setEventData((prevData) => ({ ...prevData, bannerImage: newFile }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (eventData) {
      addEvent(s2tDispatch, eventData);
      onclick();
    }
  };

  return (
    <Styled.NewEventContainer>
      <Row>
        <Title text={t('create_new_event')} uppercase />

        <IconDiv name={t('back')} onclick={onclick} hovercolor={theme.colors.red}>
          <CloseIcon />
        </IconDiv>
      </Row>

      <AuthWrapper>
        <AuthForm onSubmit={handleSubmit}>
          <Subtitle text={t('details')} uppercase />
          <AuthLayout isopen>
            <AuthInput
              type="text"
              name="eventName_input"
              id="eventName_input"
              placeholder={t('select_event_title')}
              title={t('title')}
              value={eventData.title}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, title: e.target.value }))}
              required
            />

            <AuthInput
              type="text"
              name="eventSubtitle_input"
              id="eventSubtitle_input"
              placeholder={t('summary_about_event')}
              title={t('summary')}
              value={eventData.subtitle}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, subtitle: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="eventOrganizer_input"
              id="eventOrganizer_input"
              placeholder={t('who_event_organizer')}
              title={t('organizer')}
              value={eventData.organizer}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, organizer: e.target.value }))}
              required
            />

            <AuthDropdown
              id="eventFormat"
              options={s2tState.formOptions.eventFormat}
              placeholder={t('select')}
              title={t('which_event_format')}
              onDropdownChange={(value) => setEventData((prevData) => ({ ...prevData, format: value }))}
            />

            {eventData.format === 'in_person' && (
              <>
                <AuthInput
                  type="text"
                  name="eventCountry_input"
                  id="eventCountry_input"
                  placeholder={t('insert_event_country')}
                  title={t('country')}
                  value={eventData.country}
                  onChange={(e) => setEventData((prevData) => ({ ...prevData, country: e.target.value }))}
                />

                <AuthInput
                  type="text"
                  name="eventState_input"
                  id="eventState_input"
                  placeholder={t('insert_event_state')}
                  title={t('state')}
                  value={eventData.state}
                  onChange={(e) => setEventData((prevData) => ({ ...prevData, state: e.target.value }))}
                />

                <AuthInput
                  type="text"
                  name="eventZipCode_input"
                  id="eventZipCode_input"
                  placeholder={t('insert_zip_code')}
                  title={t('zip_code')}
                  value={eventData.zipCode}
                  onChange={(e) => setEventData((prevData) => ({ ...prevData, zipCode: e.target.value }))}
                />

                <AuthInput
                  type="text"
                  name="eventState_input"
                  id="eventState_input"
                  placeholder={t('insert_rest_adress')}
                  title={t('adress')}
                  value={eventData.adress}
                  onChange={(e) => setEventData((prevData) => ({ ...prevData, adress: e.target.value }))}
                />

              </>
            )}

            {eventData.format === 'online' && (
            <AuthInput
              type="text"
              name="eventPlatform_input"
              id="eventPlatform_input"
              placeholder={t('what_event_platform')}
              title={t('platform')}
              value={eventData.adress}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, adress: e.target.value }))}
            />
            )}

            <AuthInput
              type="time"
              name="eventStartHour_input"
              id="eventStartHour_input"
              title={t('event_start_hour')}
              value={eventData.startHour}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, startHour: e.target.value }))}
            />

            <AuthInput
              type="time"
              name="eventEndHour_input"
              id="eventEndHour_input"
              title={t('event_end_hour')}
              value={eventData.endHour}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, endHour: e.target.value }))}
            />

            <AuthInput
              type="date"
              name="eventStartDate_input"
              id="eventStartDate_input"
              title={t('event_start_date')}
              value={eventData.startDate}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, startDate: e.target.value }))}
              required
            />

            <AuthInput
              type="date"
              name="eventEndDate_input"
              id="eventEndDate_input"
              title={t('event_end_date')}
              value={eventData.endDate}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, endDate: e.target.value }))}
              required
            />

            <AuthFile
              id="eventImage_input"
              text={t('select_event_banner')}
              onChange={(e) => handleEventImage(e)}
            />

            <AuthInput
              type="text"
              name="eventUrl_input"
              id="eventUrl_input"
              title={t('event_url')}
              placeholder={t('insert_event_url')}
              value={eventData.path}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, path: e.target.value }))}
              required
            />

          </AuthLayout>

          <ColumnContainer>
            <Subtitle text={t('description')} uppercase />
            <TextArea
              placeholder={t('insert_more_event_details')}
              name="description"
              value={eventData.description}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, description: e.target.value }))}
            />
          </ColumnContainer>

          {/* <AuthInput
            type="text"
            name="eventDocuments_input"
            id="eventDocuments_input"
            placeholder="Insira aqui o link para acesso aos documentos do evento, incluindo os Termos e Condições."
            title="Documentos"
            value={eventData.location}
            onChange={(e) => setEventData((prevData) => ({ ...prevData, location: e.target.value }))}
            required
          /> */}

          <AuthButton
            name="createEvent_submit"
            id="createEvent_submit"
            value={t('create_new_event')}
          />
        </AuthForm>
      </AuthWrapper>

    </Styled.NewEventContainer>
  );
}
