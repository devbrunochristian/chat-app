/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

interface Props {
  component: any
  path: string
}

const ProtectedRouter = ({ component, path }: Props) => {
  const isLogged = useSelector((state: any) => state.isLogged);
  return (
    <Route
      path={path}
      render={() => (
        isLogged
          ? component
          : <Redirect to='/' />
      )}
    />
  );
};

export default ProtectedRouter;
