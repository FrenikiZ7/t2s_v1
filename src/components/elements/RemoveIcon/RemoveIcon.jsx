import Prop from 'prop-types';
import React, { useState } from 'react';

import { Delete } from '@styled-icons/fluentui-system-filled/Delete';
import * as Styled from './RemoveIcon-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';
import { Popup } from '../Popup/Popup';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { Row } from '../../RowContainer/Row';

export function RemoveIcon({ id, message }) {
  const [isRemoving, setIsRemoving] = useState();

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    setIsRemoving(!isRemoving);
  };

  const HandleRemove = (e) => {
    e.stopPropagation();
    setIsRemoving(false);
  };

  const HandleCancelRemove = (e) => {
    e.stopPropagation();
    setIsRemoving(false);
  };

  return (
    <>

      {isRemoving ? (
        <Styled.MessageContainer>
          <Text text={message} />

          <Styled.OptionsContainer>
            <Button
              text="Sim"
              onclick={(e) => HandleRemove(e)}
              bgcolor={theme.colors.white}
              bghover={theme.colors.mediumred}
              textcolor={theme.colors.black}
              texthover={theme.colors.black}
              border={theme.colors.white}
              borderhover={theme.colors.white}
            />

            <Button
              text="Não"
              onclick={(e) => HandleCancelRemove(e)}
              bgcolor={theme.colors.white}
              bghover={theme.colors.primary}
              textcolor={theme.colors.black}
              texthover={theme.colors.black}
              border={theme.colors.white}
              borderhover={theme.colors.white}
            />
          </Styled.OptionsContainer>
        </Styled.MessageContainer>

      ) : (
        <Styled.RemoveIconElement isremoving={isRemoving ? 'isremoving' : undefined}>
          <IconDiv
            hovercolor={theme.colors.red}
            name="Remover"
            onclick={handleRemoveClick}
          >
            <Delete />
          </IconDiv>
        </Styled.RemoveIconElement>
      )}
    </>

  );
}

RemoveIcon.propTypes = {
  id: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]),
  message: Prop.string,
};
