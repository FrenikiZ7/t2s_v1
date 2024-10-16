import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './AuthHistoric-Styles';
import { AuthInput } from '../AuthInput/AuthInput';
import { theme } from '../../../../styles/theme';
import { Button } from '../../Button/Button';
import { AuthCheckbox } from '../AuthCheckbox/AuthCheckbox';
import { AuthInfo } from '../AuthInfo/AuthInfo';
import { removeAcademicHistory, removeClubHistory } from '../../../../contexts/userContext/PlayerProvider/playerActions';
import { removeClubHistory as removeStaffClubHistory } from '../../../../contexts/userContext/StaffProvider/staffActions';

import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { StaffContext } from '../../../../contexts/userContext/StaffProvider/StaffContext';

export function AuthHistoric({
  title = '', id, inputtitle, placeholder, historic, onChangeName, onChangeEarliestDate, onChangeLatestDate, onClick,
  nameValue, earliestDateValue, latestDateValue,
}) {
  const { t } = useTranslation();

  const [isActual, setIsActual] = useState(false);

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  const staffContext = useContext(StaffContext);
  const { staffState, staffDispatch } = staffContext;

  const handleIsActual = (e) => {
    setIsActual(!isActual);
    onChangeLatestDate(e);
  };

  const handleRemoveItem = (item) => {
    const actions = {
      playerClubHistory: () => removeClubHistory(playerDispatch, item),
      playerAcademicHistory: () => removeAcademicHistory(playerDispatch, item),
      staffClubHistory: () => removeStaffClubHistory(staffDispatch, item),
      staffAcademicHistory: () => removeStaffAcademicHistory(staffDispatch, item),
    };

    if (actions[id]) {
      actions[id]();
    }
  };

  return (
    <Styled.AuthHistoricContainer>

      <Styled.AuthHistoricTitle>
        {title}
      </Styled.AuthHistoricTitle>

      {historic && historic.map((item) => (
        <AuthInfo key={item.id} text={`${item.name} | ${item.earliestDate.slice(0, 4)}`} onclick={() => handleRemoveItem(item)} />
      ))}

      <AuthInput
        type="text"
        name={`${id}_input`}
        id={`${id}_input`}
        placeholder={placeholder}
        title={inputtitle}
        onChange={onChangeName}
        value={nameValue}
      />

      <AuthInput
        type="date"
        name={`${id}EarliestDate_input`}
        id={`${id}EarliestDate_input`}
        placeholder={t('entry_year')}
        title={t('entry')}
        onChange={onChangeEarliestDate}
        value={earliestDateValue}
      />

      {!isActual && (
      <AuthInput
        type="date"
        name={`${id}LatestDate_input`}
        id={`${id}LatestDate_input`}
        placeholder={t('exit_year')}
        title={t('exit')}
        onChange={onChangeLatestDate}
        value={latestDateValue}
      />
      )}

      <AuthCheckbox
        id={`isActual${id}`}
        value=""// proposialmente vazio para poder resetar o latestDate quando o usuário marcar a checkbox
        text={`${t('actual')} ${inputtitle}`}
        onChange={(e) => handleIsActual(e)}
        checked={isActual}
      />

      <Button
        text={t('add')}
        bgcolor={theme.colors.quaternary}
        bghover={theme.colors.secondary}
        textcolor={theme.colors.white}
        texthover={theme.colors.white}
        border={theme.colors.tertiary}
        borderhover={theme.colors.white}
        onclick={onClick}
      />
    </Styled.AuthHistoricContainer>
  );
}

AuthHistoric.propTypes = {
  title: Prop.string,
  inputtitle: Prop.string,
  placeholder: Prop.string,
  id: Prop.string.isRequired,
  historic: Prop.arrayOf(Prop.object),
  onChangeName: Prop.func,
  onChangeEarliestDate: Prop.func,
  onChangeLatestDate: Prop.func,
  nameValue: Prop.string,
  earliestDateValue: Prop.string,
  latestDateValue: Prop.string,
  onClick: Prop.func,
};
