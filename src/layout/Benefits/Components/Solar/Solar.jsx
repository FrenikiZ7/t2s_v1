import Prop from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Solar-Styles';
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
import { AuthForm } from '../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthWrapper } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';
import { AuthContainer } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { Column } from '../../../../components/ColumnContainer/Column';
import { Row } from '../../../../components/RowContainer/Row';

export function Solar() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zipCode: '',
    street: '',
    country: '',
    state: '',
    city: '',
    phoneNumber: '',
  });

  console.log(formData);

  return (
    <Styled.SolarContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text={t('welcome_t2s_solar')} uppercase />

        <Column>
          <Text text={t('solar_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('solar_subtitle_1')} as="h3" />
          <Column>
            <Text text={t('solar_text_2_part_1')} />
            <Text text={t('solar_text_2_part_2')} />
            <Text text={t('solar_text_2_part_3')} />
            <Text text={t('solar_text_2_part_4')} />
            <Text text={t('solar_text_2_part_5')} />
            <Text text={t('solar_text_2_part_6')} />
            <Text text={t('solar_text_2_part_7')} />
          </Column>
        </Column>

        <ListWrapper>
          <ListContainer>
            <ListItem>
              {t('solar_step_1')}
            </ListItem>

            <ListItem>
              {t('solar_step_2')}
            </ListItem>

            <ListItem>
              {t('solar_step_3')}
            </ListItem>

            <ListItem>
              {t('solar_step_4')}
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

      <AuthWrapper>

        <AuthContainer>
          <Subtitle text="solar_form_title" uppercase />

          <AuthForm>
            <Row>
              <Column>
                <AuthInput
                  type="text"
                  name="solarCompleteName"
                  id="solarCompleteName_input"
                  placeholder={t('owner_house_complete_name')}
                  title={t('complete_name')}
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
                />

                <AuthInput
                  type="email"
                  name="solarEmail"
                  id="solarEmail_input"
                  placeholder={t('email')}
                  title={t('email')}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))}
                />

                <AuthInput
                  type="number"
                  name="solarZipCode_input"
                  id="solarZipCode_input"
                  title={t('zip_code')}
                  placeholder={t('zip_code')}
                  required
                  value={formData.zipCode}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, zipCode: e.target.value }))}
                />

                <AuthInput
                  type="text"
                  name="solarStreet_input"
                  id="solarStreet_input"
                  title={t('street')}
                  placeholder={t('street_name')}
                  required
                  value={formData.street}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, street: e.target.value }))}
                />
              </Column>

              <Column>

                <AuthInput
                  type="text"
                  name="solarCountry_input"
                  id="solarCountry_input"
                  title={t('country')}
                  placeholder={t('country')}
                  required
                  value={formData.country}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, country: e.target.value }))}
                />

                <AuthInput
                  type="text"
                  name="solarState_input"
                  id="solarState_input"
                  title={t('state')}
                  placeholder={t('state')}
                  required
                  value={formData.state}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, state: e.target.value }))}
                />

                <AuthInput
                  type="text"
                  name="solarCity_input"
                  id="solarCity_input"
                  title={t('city')}
                  placeholder={t('city')}
                  required
                  value={formData.city}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, city: e.target.value }))}
                />

                <AuthInput
                  type="number"
                  name="solarPhoneNumber"
                  id="solarPhoneNumber_input"
                  placeholder={t('your_phone_number')}
                  title={t('phone_number')}
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, phoneNumber: e.target.value }))}
                />

              </Column>

            </Row>

            <AuthButton
              name="solarForm_submit"
              id="solarForm_submit"
              value={t('confirm')}
            />

          </AuthForm>
        </AuthContainer>
      </AuthWrapper>

      <Slide items={s2tData.photos.benefits} title={t('others_t2s_benefits')} />

      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png" gradientdirection="to top">
        <VerticalMiniSlide title={t('events')} type="events" items={s2tData.events} />

        <VerticalSoloSlide title={t('social')} size="400px" items={s2tData.news} />

        <VerticalMiniSlide title={t('news')} type="news" items={s2tData.news} />
      </BannerSlide>

    </Styled.SolarContainer>
  );
}

Solar.propTypes = {
};
