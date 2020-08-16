import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
  text: string
}

const HeaderContainer = styled.header`
  padding: 16px;
  border-bottom: 1px solid rgb(188,188,188);
`;

export const Header = ({ text }: HeaderProps) => (
  <HeaderContainer>
    <h1>{text}</h1>
  </HeaderContainer>
);
