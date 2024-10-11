import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './EventCard-Styles';
import { CenterColumn } from '../../../CenterColumn/CenterColumn';
import { InfoInRow } from '../../InfoInRow/InfoInRow';
import { Subtitle } from '../../Subtitle/Subtitle';
import { Text } from '../../Text/Text';
import { RemoveIcon } from '../../RemoveIcon/RemoveIcon';
import { removeEvent } from '../../../../contexts/s2tContext/s2tActions';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';

export function EventCard({
  ownerview, onClick, event,
}) {
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const handleRemoveEvent = () => {
    if (event) {
      removeEvent(s2tDispatch, event);
    }
  };

  return (
    <Styled.EventCardElement backgroundimage={event.imagesrc || '/assets/images/logos/vertical-background.png'} onClick={onClick}>

      {event && (
        <>
          <Styled.EventInfo>
            <CenterColumn>
              {event.title && <Subtitle text={event.title} uppercase />}
              {event.subtitle && <Text text={event.subtitle} />}
            </CenterColumn>

            <CenterColumn>
              {event.organizer && <InfoInRow infotitle={t('organizer')} info={event.organizer} uppercase />}
              {event.startDate && <InfoInRow infotitle={t('start_date')} info={event.startDate} uppercase />}
              {event.startHour && <InfoInRow infotitle={t('hour')} info={`${event.startHour}h`} uppercase />}
              {event.country && <InfoInRow infotitle={t('country')} info={event.country} uppercase />}
              {event.state && <InfoInRow infotitle={t('state')} info={event.state} uppercase />}
              {event.platform && <InfoInRow infotitle={t('platform')} info={event.platform} uppercase />}
            </CenterColumn>

            {ownerview && (
            <RemoveIcon
              onRemove={handleRemoveEvent}
              id={event.id}
              message={t('delete_event_question')}
            />
            )}

          </Styled.EventInfo>
        </>
      )}

    </Styled.EventCardElement>
  );
}

EventCard.propTypes = {
  ownerview: Prop.bool,
  event: Prop.arrayOf(Prop.object).isRequired,
  onClick: Prop.bool,
};
