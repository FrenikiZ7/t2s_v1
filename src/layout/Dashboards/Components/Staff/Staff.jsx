import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Staff-Styles';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';
import { AuthDropdown } from '../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';

export function Staff() {
  const { t } = useTranslation();
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const [filterStaff, setFilterStaff] = useState();

  return (
    <Styled.StaffContainer>
      {/* Provavelmente havéra mudanças na forma de renderização para poder filtrar e exibir os
      componentes baseado no filtro */}
      <GridCards title={t('scout')} items={s2tState.users.staff.scouts || []} />
      <GridCards title={t('coach')} items={s2tState.users.staff.coachs || []} />
      <GridCards title={t('performance_analyst')} items={s2tState.users.staff.performanceAnalysts || []} />
      <GridCards title={t('coach_assistant')} items={s2tState.users.staff.coachAssistants || []} />
      <GridCards title={t('coordinator')} items={s2tState.users.staff.coordinators || []} />
      <GridCards title={t('director')} items={s2tState.users.staff.directors || []} />
      <GridCards title={t('physiologist')} items={s2tState.users.staff.physiologists || []} />
      <GridCards title={t('physiotherapist')} items={s2tState.users.staff.physiotherapists || []} />
      <GridCards title={t('manager')} items={s2tState.users.staff.managers || []} />
      <GridCards title={t('massage_therapist')} items={s2tState.users.staff.massageTherapists || []} />
      <GridCards title={t('doctor')} items={s2tState.users.staff.doctors || []} />
      <GridCards title={t('nutritionist')} items={s2tState.users.staff.nutritionists || []} />
      <GridCards title={t('goalkeeper_trainer')} items={s2tState.users.staff.goalkeeperTrainers || []} />
      <GridCards title={t('physical_trainer')} items={s2tState.users.staff.physicalTrainers || []} />
      <GridCards title={t('tactical_trainer')} items={s2tState.users.staff.tacticalTrainers || []} />
      <GridCards title={t('psychologist')} items={s2tState.users.staff.psychologists || []} />
      <GridCards title={t('personal_trainer')} items={s2tState.users.staff.personalTrainers || []} />
    </Styled.StaffContainer>
  );
}
