import styled, { css } from 'styled-components';
import { VerticalLongSlideWrapper } from '../../../../../components/elements/VerticalLongSlide/VerticalLongSlide-Styles';

export const PlayerContactsContainer = styled.article`
  ${({ theme }) => css`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
    ),
    url('/assets/images/backgrounds/slider-bg-1.png');
    border-radius: 12px;
    width: 100%;
    height: 100%;
    gap: ${theme.spacings.small};
    font-family: ${theme.fonts.primary};
  `}
`;
