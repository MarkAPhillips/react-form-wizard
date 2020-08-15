/* eslint-disable max-len */
import React from 'react';
import { FormStepProps } from '../types';
import { FormSection } from '../../styles/form';

const Details = ({ title, formOptions, formData }: FormStepProps) => {
  const { register } = formOptions;
  const { name = '' } = formData;
  return (
    <FormSection>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio. Integer quis auctor elit sed vulputate mi sit. Quam pellentesque nec nam aliquam sem et tortor. In eu mi bibendum neque egestas. Sapien eget mi proin sed libero enim sed faucibus. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Feugiat vivamus at augue eget arcu dictum varius duis at. Purus in massa tempor nec feugiat nisl pretium fusce id. Adipiscing tristique risus nec feugiat in. Gravida rutrum quisque non tellus orci. Leo vel fringilla est ullamcorper eget nulla facilisi. Sit amet volutpat consequat mauris nunc congue. Nunc sed id semper risus in hendrerit.
      </p>
      <div>
        <label htmlFor="name">
          Name
          <input type="text" ref={register} name="name" defaultValue={name} />
        </label>
      </div>
    </FormSection>
  );
};

export default Details;
