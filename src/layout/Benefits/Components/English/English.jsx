import Prop from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './English-Styles';
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

export function English() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const { t } = useTranslation();

  return (
    <Styled.EnglishContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text={t('welcome_t2s_english')} uppercase />

        <Text text={t('english_text_1')} />
        <Text text={t('english_text_2')} />

        <ListWrapper>
          <ListContainer>
          <ListItem>
              {t('Acesso Global')}
               <p>{t('O inglês é a língua mais falada no mundo, facilitando a comunicação em diversos países.')}</p>
            </ListItem>

            <ListItem>
              {t('Oportunidades Profissionais')}
              <p>{t('O domínio do inglês abre portas para melhores empregos e avanço na carreira, especialmente em empresas multinacionais.')}</p>
            </ListItem>

            <ListItem>
              {t('Educação Superior')}
              <p>{t('Muitas universidades renomadas oferecem cursos em inglês, aumentando as opções de educação.')}</p>
            </ListItem>

            <ListItem>
              {t('Cultura e Entretenimento')}
              <p>{t('O inglês é a língua da maioria dos filmes, músicas e livros, permitindo uma experiência cultural mais rica.')}</p>
            </ListItem>
            <ListItem>
              {t('Comunicação em Esportes e Profissões')}
              <p>{t('Dominar o inglês é essencial para atletas e profissionais de diversas áreas, permitindo uma comunicação eficaz com treinadores, colegas e outros profissionais ao redor do mundo. Essa habilidade não apenas facilita a integração em equipes internacionais, mas também abre portas para oportunidades de carreira em esportes e setores que exigem interações globais.')}</p>
            </ListItem>
            <ListItem>
              <StyledLink path="https://immediateenglish.com/ansep" newtab>{t('Saiba mais na Plataforma Immediate English')}</StyledLink>
              <StyledLink path="https://www.ansep.org/" newtab>{t('Saiba mais na Plataforma ANSEP')}</StyledLink>
            </ListItem>
          </ListContainer>
        </ListWrapper>
      </Banner>

      <BannerSlide autoplay slidesperview={3}>

        <StyledLink path="https://immediateenglish.com/ansep" newtab>
          <img src="/assets/images/benefits/components/english/ansep_immediate.jpg" alt="" />
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

    </Styled.EnglishContainer>
  );
}

English.propTypes = {
};
