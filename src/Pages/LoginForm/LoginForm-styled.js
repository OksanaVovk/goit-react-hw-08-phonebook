import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkNav = styled(Link)`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  padding: ${p => p.theme.space[5]}px 0px;

  &:focus,
  &:hover,
  &:active {
    color: ${p => p.theme.colors.accentText};
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.8;
`;
