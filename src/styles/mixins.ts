import { css } from 'styled-components';

export const rounded = css`
  border-radius: 5px;
`;

export const button = css`
  background: rgb(2, 117, 216);
  color: rgb(255,255,255);
  border: 1px solid ;
  margin: 0.5em;
  padding: 0.7em;
  ${rounded}
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
