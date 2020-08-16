import styled from 'styled-components';
import { button } from './mixins';

export const FormSection = styled.section`
  padding-bottom: 52px;
`;

export const Button = styled.button`
  ${button}
`;

export const SubmitButton = styled.input.attrs({
  type: 'submit',
})`
  ${button}
`;
