import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
  text: string
}

const HeaderContainer = styled.header``;

export const Header = ({ text }: HeaderProps) => (
  <HeaderContainer>
    <h1>{text}</h1>
  </HeaderContainer>
);
