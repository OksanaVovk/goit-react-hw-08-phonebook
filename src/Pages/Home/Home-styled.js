import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  // text-indent: 1.5em;
`;

export const TextAccent = styled.p`
  color: ${p => p.theme.colors.accentText};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.8;
  margin: 0;
`;

export const LinkBack = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: 500;
  margin-botton: 15px;

  &:focus,
  &:hover {
    color: red;
  }
`;

export const ImgBack = styled.img`
  objectfit: 'cover';
  maxwidth: '1200px';
`;

export const ConteinerInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const Score = styled.span`
  margin-left: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-bottom: 1px solid black;
  font-size: 18px;
  padding-bottom: 15px;
`;
