import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
// import { HashRouter as Route} from 'react-router-dom'
import { routes } from './routes.js'


export const App = () => {
  return (
    <React.Fragment>
      {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
    </React.Fragment>
  )

}






