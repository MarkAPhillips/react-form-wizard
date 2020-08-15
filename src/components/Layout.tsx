import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from '.';

type LayoutProps = {
  children: ReactNode;
}

const LayoutContainer = styled.main`
  height: 100%;
`;

export const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer>
    <Header text="Form Wizard" />
    {children}
  </LayoutContainer>
);
