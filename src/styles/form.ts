import styled from 'styled-components';
import { rounded, button } from './mixins';

export const Button = styled.button`
  ${button}
`;

export const SubmitButton = styled.input.attrs({
  type: 'submit',
})`
  ${button}
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.7' : '')};
`;

export const Input = styled.input`
  padding: 0.5em;
  ${rounded}
  border: 1px solid rgb(232,244,248);
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 0.5em;
  ${rounded}
  border: 1px solid rgb(232,244,248);
  width: 100%;
  height: 600px;
  resize: none;
`;
