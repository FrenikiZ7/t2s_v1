import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './ProfileInfo-Styles';
import { GridTwoColumn } from '../../GridTwoColumn/GridTwoColumn';
import { InfoInRow } from '../InfoInRow/InfoInRow';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';
import { Text } from '../Text/Text';

export function ProfileInfo({ items }) {
  const { t } = useTranslation();

  const titleLabel = {
    // players
    modality: t('modality'),
    bestLeg: t('best_leg'),
    competitiveLevel: t('competitive_level'),
    birthDate: t('birth_date'),
    ageCategory: t('category'),
    age: t('age'),
    birthCity: t('birth'),
    weight: t('weight'),
    height: t('height'),
    nationality: t('nationality'),
    primaryNationality: t('primary_nationality'),
    secondaryNationality: t('secondary_nationality'),
    passports: t('passports'),
    payment: t('base_payment'),
    transferValue: t('transfer_value'),
    primaryPosition: t('main_position'),
    secondaryPosition: t('secondary_position'),
    tertiaryPosition: t('tertiary_position'),
    league: t('league'),
    hasManager: t('has_manager'),
    toefl: t('toefl'),
    act: t('act'),
    sat: t('sat'),
    graduationDate: t('graduation_date'),
    gradePointAverage: t('grade_point_average'),

    // clubs
    teamModality: t('modality'),
    representative: t('representative'),
    foundationDate: t('foundation_date'),
    country: t('country'),
    state: t('state'),
    trainingCenter: t('training_center'),
    stadium: t('stadium'),
    coach: t('coach'),

    // Geral
    competitiveCategory: t('competitive_category'),
    profileType: t('profile_type'),
  };

  const infoLabel = {
    // players

    age: t('years'),
    weight: t('kg'),
    height: t('meters'),
  };

  return (
    <Styled.ProfileInfoElement>
      <GridTwoColumn>
        {/* Verifica se items existe */}
        {items && Object.keys(items).length > 0 ? (
          <>
            {Object.keys(items).map((key) => (
              <>
                {/* Verifica se a informação foi preenchida ou não pelo usuário */}
                {items[key] && (
                <InfoInRow
                  key={key}
                  infotitle={titleLabel[key] || key}
                  info={`${t(items[key])} ${infoLabel[key] || ''}`}
                  uppercase
                />
                )}
              </>
            ))}
          </>
        ) : (
          <Text text={t('data_not_found')} />
        )}
      </GridTwoColumn>
    </Styled.ProfileInfoElement>
  );
}

ProfileInfo.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired,
};
