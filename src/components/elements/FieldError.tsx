import React from 'react';
import styled from 'styled-components';

type FieldErrorProps = {
  text: string
}

const ErrorContainer = styled.div`
  color: rgb(255,0,0);
`;

export const FieldError = ({ text }: FieldErrorProps) => <ErrorContainer>{text}</ErrorContainer>;
