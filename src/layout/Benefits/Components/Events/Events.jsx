import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
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

export function Events({ items }) {
  const [selectedEvent, setSelectedEvent] = useState();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <Styled.EventsContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text="Boas-vindas aos eventos da T2S!" uppercase />

        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
        <Text text="
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et  fuga.
       "
        />

        <ListWrapper>
          <ListContainer>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>

            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>

            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>

            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>
          </ListContainer>
        </ListWrapper>
      </Banner>

      <GridEvents items={items} />

      <Slide items={s2tData.photos.benefits} title="Outros benefícios T2S" />

      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png" gradientdirection="to top">
        <VerticalMiniSlide title="Eventos" type="events" items={s2tData.events} />

        <VerticalSoloSlide title="Social" size="400px" items={s2tData.news} />

        <VerticalMiniSlide title="Notícias" type="news" items={s2tData.news} />
      </BannerSlide>

    </Styled.EventsContainer>
  );
}

Events.propTypes = {
};
