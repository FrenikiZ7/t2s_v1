import Prop from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import * as Styled from './ForgotPassword-Styles';
import { AuthWrapper } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { Title } from '../../components/elements/Title/Title';
import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { theme } from '../../styles/theme';
import { Popup } from '../../components/elements/Popup/Popup';
import { Button } from '../../components/elements/Button/Button';
import { StandardHeader } from '../../components/Headers/StandardHeader/StandardHeader';
import { Logo } from '../../components/elements/Logo/Logo';
import { Nav } from '../../components/Nav/Nav';
import { FloatingHeader } from '../../components/Headers/FloatingHeader/FloatingHeader';
import { IconDiv } from '../../components/elements/IconDiv/IconDiv';
import { FloatingMenu } from '../../components/FloatingMenu/FloatingMenu';

export function ForgotPassword() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const [mobileHeader, setMobileHeader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  // enviar os dados para o backend
  };

  return (
    <Styled.ForgotPasswordWrapper>
      <FloatingHeader>
        <Logo size="150px" logo="/assets/images/pngs/logo.png" />
        <Nav>
          <Button
            path="/"
            text={t('home_page')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/forgot-password"
            text={t('forgot_password')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />

          <Button
            path="/login"
            text={t('login')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/register"
            text={t('register')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />
        </Nav>

        {mobileHeader ? (
          <IconDiv name={t('menu')} onclick={() => setMobileHeader(!mobileHeader)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name={t('close_menu')} onclick={() => setMobileHeader(!mobileHeader)}>
            <MenuIcon />
          </IconDiv>
        ) }
      </FloatingHeader>

      {mobileHeader && (
      <FloatingMenu>
        <Button
          path="/"
          text={t('home_page')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />

        <Button
          path="/forgot-password"
          text={t('forgot_password')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.black}
          textcolor={theme.colors.primary}
          texthover={theme.colors.primary}
          border={theme.colors.primary}
          borderhover={theme.colors.primary}
          active
        />

        <Button
          path="/login"
          text={t('login')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />

        <Button
          path="/register"
          text={t('register')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />
      </FloatingMenu>

      )}

      <Styled.ForgotPasswordPage backgroundimagesrc={`/assets/images/backgrounds/login_register_${i18n.language}.png`}>
        <AuthWrapper>

          <AuthContainer>

            <Title text={t('change_password')} size={theme.sizes.xxlarge} />

            <AuthForm onSubmit={handleSubmit}>

              <AuthInput
                type="email"
                name="email_input"
                id="email_input"
                placeholder={t('your_email')}
                title={t('insert_your_email')}
                required
              />

              <AuthButton
                name="login_submit"
                id="login_submit"
                value={t('next')}
              />

            </AuthForm>
          </AuthContainer>

          {isOpen && (
          <Popup
            title={t('verification_email_sended')}
            firstoption={t('close')}
            firstpath="/"
            subtitle={t('please_check')}
            isopen={isOpen}
            onclick={() => setIsOpen(!isOpen)}
          />
          )}

        </AuthWrapper>
      </Styled.ForgotPasswordPage>
    </Styled.ForgotPasswordWrapper>
  );
}

ForgotPassword.propTypes = {
};
