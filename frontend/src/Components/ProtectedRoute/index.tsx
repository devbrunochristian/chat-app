/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { UserStateInterface } from '../../store/reducers/userReducer/types';

interface Props {
  Component: any;
  path: string;
}

const ProtectedRouter = ({ Component, path }: Props) => {
  const isLogged = useSelector(
    (state: UserStateInterface) => state.user.isLogged
  );
  return (
    <Route
      path={path}
      render={() => (isLogged ? <Component /> : <Redirect to="/" />)}
    />
  );
};

export default ProtectedRouter;
