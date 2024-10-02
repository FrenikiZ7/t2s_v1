import Prop from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './LionsPlatform-styles';
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

export function LionsPlatform() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const { t } = useTranslation();

  return (
    <Styled.LionsPlatformContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text={t('welcome_t2s_lions_platform')} uppercase />

        <Text text={t('lions_platform_text_1')} />
        <Text text={t('lions_platform_text_2')} />

        <ListWrapper>
          <ListContainer>
            <ListItem>
              {t('Streaming de Vídeos')}
               <p>{t('Acesso instantâneo a uma vasta seleção de filmes e documentários, disponível em qualquer dispositivo.')}</p>
            </ListItem>

            <ListItem>
              {t('Banco Digital')}
              <p>{t('Gerenciamento de finanças em tempo real, com funcionalidades como transferências e investimentos em um único aplicativo.')}</p>
            </ListItem>

            <ListItem>
              {t('Intercâmbio Cultural')}
              <p>{t('Oportunidade de estudar em outro país, aprimorando habilidades linguísticas e culturais.')}</p>
            </ListItem>

            <ListItem>
              {t('Plataforma de Livros')}
              <p>{t('Acesso a uma ampla gama de eBooks de diferentes gêneros, permitindo leitura imersiva em qualquer lugar.')}</p>
            </ListItem>
            <ListItem>
              {t('Aprendizado de Inglês Online')}
              <p>{t('Cursos personalizados para todos os níveis, tornando o aprendizado de idiomas acessível e divertido.')}</p>
            </ListItem>
            <ListItem>
              {t('Telemedicina')}
              <p>{t('Consultas médicas remotas com profissionais qualificados, oferecendo conveniência e segurança.')}</p>
            </ListItem>
            <ListItem>
              <StyledLink path="https://www.plataformalions.com/" newtab>{t('Saiba mais na Plataforma Lions')}</StyledLink>
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

    </Styled.LionsPlatformContainer>
  );
}

LionsPlatform.propTypes = {
};
