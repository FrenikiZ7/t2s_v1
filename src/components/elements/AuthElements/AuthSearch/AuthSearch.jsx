import Prop from 'prop-types';
import React, { Children } from 'react';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { useTranslation } from 'react-i18next';
import * as Styled from './AuthSearch-Styles';

export function AuthSearch({
  name, id, onChange, value, title = '', autocomplete = '', required = false, children, placeholder,
}) {
  const { t } = useTranslation();

  return (
    <Styled.SearchWrapper>
      {children}
      <Styled.AuthSearchContainer>
        {title}
        {' '}
        {required ? t('required') : ''}

        <Styled.AuthSearchElement
          type="search"
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          autoComplete={autocomplete}
          required={required}
          placeholder={placeholder}
        />

        <Styled.SearchIconContainer>
          <SearchIcon />
        </Styled.SearchIconContainer>

      </Styled.AuthSearchContainer>
    </Styled.SearchWrapper>

  );
}

AuthSearch.propTypes = {
  name: Prop.string.isRequired,
  id: Prop.string.isRequired,
  value: Prop.string,
  title: Prop.string,
  onChange: Prop.func,
  autocomplete: Prop.string,
  required: Prop.bool,
  placeholder: Prop.string,
};
