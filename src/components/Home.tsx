import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '../styles/form';
import { FormTypes } from '../config/types';
import { createForm, resetFormData } from '../actions';

const HomeContainer = styled.section`
  padding: 16px;
`;

export const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFormData());
  }, []);

  const handleClick = (type: FormTypes) => {
    dispatch(createForm(type));
    history.push('/steps');
  };

  return (
    <HomeContainer>
      Select workflow:
      <div>
        <Button onClick={() => handleClick('type1')}>Form Type 1</Button>
        <Button onClick={() => handleClick('type2')}>Form Type 2</Button>
      </div>
    </HomeContainer>
  );
};
