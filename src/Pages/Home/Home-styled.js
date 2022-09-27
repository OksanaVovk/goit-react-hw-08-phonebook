import styled from 'styled-components';

export const Title = styled.h1`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: 0 0 20px 0;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.8;
  margin: 0 0 40px 0;
  text-align: justify;
`;

export const TextAccent = styled.p`
  color: ${p => p.theme.colors.accentText};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.8;
  margin: 0;
`;
