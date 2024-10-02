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

        <Text text={t('investments_text_1')} />
        <Text text={t('investments_text_2')} />

        <ListWrapper>
          <ListContainer>
          <ListItem>
              {t('Diversificação de Portfólio')}
               <p>{t('Permite que os investidores minimizem riscos ao alocar seus recursos em diferentes ativos, aumentando a segurança financeira.')}</p>
            </ListItem>

            <ListItem>
              {t('Acesso a Expertise')}
              <p>{t('Os investidores têm acesso a análises de mercado e estratégias elaboradas por especialistas, ajudando a maximizar retornos.')}</p>
            </ListItem>

            <ListItem>
              {t('Rendimentos Potenciais')}
              <p>{t('Investir em ações, títulos e imóveis oferece a oportunidade de obter rendimentos superiores em comparação com contas de poupança.')}</p>
            </ListItem>

            <ListItem>
              {t('Planejamento para o Futuro')}
              <p>{t('Os investimentos ajudam a construir um patrimônio ao longo do tempo, proporcionando segurança financeira na aposentadoria.')}</p>
            </ListItem>
            <ListItem>
              {t('Participação no Crescimento Econômico')}
              <p>{t('Investir em empresas permite que os investidores participem diretamente do crescimento e sucesso dos negócios.')}</p>
            </ListItem>
            <ListItem>
              <StyledLink path="https://contarendimento.com/" newtab>{t('Saiba mais na Plataforma Lins Rendimento')}</StyledLink>
              <StyledLink path="https://www.plataformalions.com/investimentos" newtab>{t('Saiba mais na Plataforma Lions Invest')}</StyledLink>
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
