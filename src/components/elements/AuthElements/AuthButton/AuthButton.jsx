import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './AuthButton-Styles';
import { theme } from '../../../../styles/theme';

export function AuthButton({
  name, id, value, bgcolor = theme.colors.quaternary, bghover = theme.colors.secondary,
}) {
  const { t } = useTranslation();

  return (
    <Styled.AuthButtonElement
      type="submit"
      data-wait={t('please_wait')}
      name={name}
      id={id}
      value={value}
      bgcolor={bgcolor}
      bghover={bghover}
    />
  );
}

AuthButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  bgcolor: PropTypes.string,
  bghover: PropTypes.string,
};
