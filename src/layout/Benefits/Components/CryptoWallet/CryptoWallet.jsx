import Prop from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './CryptoWallet-Styles';
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

export function CryptoWallet() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const { t } = useTranslation();

  return (
    <Styled.CryptoWalletContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text={t('welcome_t2s_crypto_wallet')} uppercase />

        <Text text={t('crypto_wallet_text_1')} />
        <Text text={t('crypto_wallet_text_2')} />

        <ListWrapper>
          <ListContainer>
          <ListItem>
              {t('Armazenamento Seguro de Criptomoedas')}
               <p>{t('As crypto wallets mantêm suas moedas digitais protegidas com chaves privadas e públicas, garantindo que apenas o proprietário tenha acesso aos fundos.')}</p>
            </ListItem>

            <ListItem>
              {t('Acessibilidade Global')}
              <p>{t('Permitem que os usuários enviem e recebam criptomoedas de qualquer lugar do mundo, facilitando transações internacionais sem intermediários.')}</p>
            </ListItem>

            <ListItem>
              {t('Gerenciamento de Ativos Múltiplos')}
              <p>{t('Algumas carteiras suportam várias criptomoedas, permitindo que os usuários gerenciem diferentes ativos em uma única interface.')}</p>
            </ListItem>

            <ListItem>
              {t('Conveniência nas Transações')}
              <p>{t('Oferecem simplicidade no envio e recebimento de fundos, geralmente com código QR ou endereços de carteira digital.')}</p>
            </ListItem>
            <ListItem>
              {t('Integração com DeFi e NFTs')}
              <p>{t('Muitas carteiras agora se integram com plataformas DeFi (Finanças Descentralizadas) e suportam tokens não fungíveis (NFTs), permitindo um maior uso de ativos digitais em ecossistemas emergentes.')}</p>
            </ListItem>
            <ListItem>
              {t('Segurança através de Carteiras de Hardware')}
              <p>{t('Carteiras físicas (hardware wallets) oferecem segurança adicional ao manter chaves privadas offline, longe de hackers e ataques digitais.')}</p>
            </ListItem>
            <ListItem>
              <StyledLink path="" newtab>{t('Saiba mais na Plataforma Lions Cripto Wallet')}</StyledLink>
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

    </Styled.CryptoWalletContainer>
  );
}

CryptoWallet.propTypes = {
};
