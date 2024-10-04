import Prop from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Investments-Styles';
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
import { Column } from '../../../../components/ColumnContainer/Column';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';

export function Investments() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const { t } = useTranslation();

  return (
    <Styled.InvestmentsContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text={t('welcome_t2s_investments')} uppercase />

        <Text text={t('investments_text_0')} />
        <Text text={t('investments_text_00')} />

        <Column>
          <Subtitle text={t('investments_subtitle_1')} uppercase />
          <Text text={t('investments_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('investments_subtitle_2')} uppercase />
          <Text text={t('investments_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('investments_subtitle_3')} uppercase />
          <Text text={t('investments_text_3')} />
        </Column>

        <Column>
          <Subtitle text={t('investments_subtitle_4')} uppercase />
          <Text text={t('investments_text_4')} />
        </Column>

        <Column>
          <Subtitle text={t('investments_subtitle_5')} uppercase />
          <Text text={t('investments_text_5')} />
        </Column>

        <ListWrapper>
          <ListContainer>
          <ListItem>
              {t('investments_step_1')}
            </ListItem>

            <ListItem>
              {t('investments_step_2')}
            </ListItem>

            <ListItem>
              {t('investments_step_3')}
            </ListItem>

            <ListItem>
              {t('investments_step_4')}
            </ListItem>
          </ListContainer>
        </ListWrapper>
      </Banner>

      <BannerSlide autoplay slidesperview={3}>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

      </BannerSlide>

      <Slide items={s2tData.photos.benefits} title={t('other_t2s_benefits')} />

      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png" gradientdirection="to top">
        <VerticalMiniSlide title={t('events')} type="events" items={s2tData.events} />

        <VerticalSoloSlide title={t('social')} size="400px" items={s2tData.news} />

        <VerticalMiniSlide title={t('news')} type="news" items={s2tData.news} />
      </BannerSlide>

    </Styled.InvestmentsContainer>
  );
}

Investments.propTypes = {
};
