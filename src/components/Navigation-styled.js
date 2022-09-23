import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkNav = styled(Link)`
  color: ${p => p.theme.colors.brown};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[5]}px 0px;

  &:focus,
  &:hover,
  &:active {
    color: ${p => p.theme.colors.accentText};
  }
`;
