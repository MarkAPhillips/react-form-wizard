import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '../styles/form';
import { FormTypes } from '../config/types';
import { createForm } from '../actions';

const HomeContainer = styled.section``;

export const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

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
