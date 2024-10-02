import Prop from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Interchange-Styles';
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

export function Interchange() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const { t } = useTranslation();

  return (
    <Styled.InterchangeContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text={t('welcome_t2s_interchange')} uppercase />

        <Text text={t('interchange_text_1')} />
        <Text text={t('interchange_text_2')} />

        <ListWrapper>
          <ListContainer>
          <ListItem>
              {t('Treinamento Pessoal Elite')}
               <p>{t('Oferece programas personalizados para melhorar o desempenho atlético.')}</p>
            </ListItem>

            <ListItem>
              {t('Aulas Após a Escola')}
              <p>{t('Proporciona atividades físicas e acadêmicas para jovens.')}</p>
            </ListItem>

            <ListItem>
              {t('Futsal')}
              <p>{t('Encoraja a participação em competições de futsal.')}</p>
            </ListItem>

            <ListItem>
              {t('Educação')}
              <p>{t('Integra aprendizado e desenvolvimento esportivo, visando formar líderes.')}</p>
            </ListItem>
            <ListItem>
              {t('Intercâmbio Cultural')}
              <p>{t('Promove a troca de experiências entre jovens de diferentes países.')}</p>
            </ListItem>
            <ListItem>
              <StyledLink path="https://www.floridalions.org/" newtab>{t('Saiba mais na Plataforma Florida Lions')}</StyledLink>
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

    </Styled.InterchangeContainer>
  );
}

Interchange.propTypes = {
};
