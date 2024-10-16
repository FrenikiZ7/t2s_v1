import Prop from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Events-Styles';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';
import { BannerSlide } from '../../../../components/elements/BannerSlide/BannerSlide';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { Slide } from '../../../../components/elements/Slide/Slide';
import { VerticalMiniSlide } from '../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalSoloSlide } from '../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { ListContainer, ListItem, ListWrapper } from '../../../../components/elements/List/List-Styles';
import { s2tData } from '../../../../contexts/s2tContext/s2tData';
import { Banner } from '../../../../components/elements/Banner/Banner';
import { GridEvents } from '../../../../components/elements/EventsElements/GridEvents/GridEvents';
import { Column } from '../../../../components/ColumnContainer/Column';

export function Events({ items }) {
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Styled.EventsContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text={t('welcome_t2s_events')} uppercase />

        <Column>
          <Text text={t('events_text_1')} />
          <Text text={t('events_text_2')} />
        </Column>

        <ListWrapper>
          <ListContainer>
            <ListItem>
              {t('events_step_1')}
            </ListItem>

            <ListItem>
              {t('events_step_2')}
            </ListItem>

            <ListItem>
              {t('events_step_3')}
            </ListItem>

            <ListItem>
              {t('events_step_4')}
            </ListItem>
          </ListContainer>
        </ListWrapper>
      </Banner>

      <GridEvents items={items} />

      <Slide items={s2tData.photos.benefits} title={t('other_t2s_benefits')} />

      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png" gradientdirection="to top">
        <VerticalMiniSlide title={t('events')} type="events" items={s2tData.events} />

        <VerticalSoloSlide title={t('social')} size="400px" items={s2tData.news} />

        <VerticalMiniSlide title={t('news')} type="news" items={s2tData.news} />
      </BannerSlide>

    </Styled.EventsContainer>
  );
}

Events.propTypes = {
};
