import Prop from 'prop-types';
import React from 'react';
import * as Styled from './IconCard-Styles';
import { theme } from '../../../styles/theme';

export function IconCard({
  children, bgcolor = theme.colors.black, bghover = '', active, activecolor = theme.colors.primary, onClick, name = 'Ícone', hovercolor = '', color = theme.colors.white,
}) {
  return (
    <Styled.IconCardContainer
      onClick={onClick}
      title={name}
      aria-label={name}
      hovercolor={hovercolor}
      active={active ? 'active' : undefined}
      activecolor={activecolor}
      color={color}
      bgcolor={bgcolor}
      bghover={bghover}
    >
      {children}
    </Styled.IconCardContainer>
  );
}

IconCard.propTypes = {
  children: Prop.node.isRequired,
  onClick: Prop.func,
  active: Prop.bool,
  name: Prop.string,
  hovercolor: Prop.string,
  activecolor: Prop.string,
  color: Prop.string,
};
