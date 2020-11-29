import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Public = ({component:Component, ...rest}) => {
  const userLogged=localStorage.getItem("token");
  if(userLogged)
    return <Redirect to="/administration"/>
  return <Route {...rest} component={Component}/>
};

export default Public;