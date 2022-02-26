import {
    Route,
    Redirect 
  } from 'react-router-dom';
  
  function PrivateRoute({ children, isAuthenticated , user, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            isAuthenticated && user.role!=='admin'
              ? (
                children
              ):isAuthenticated && user.role==='admin'?(
                <Redirect
              to={{
                pathname: '/admin/admin-panel',
                state: { from: location }
              }}
            />
              ):
              
              <Redirect
              to={{
                pathname: '/signin',
                state: { from: location }
              }}
            />)
        }
      />
    );
  }
  
  export default PrivateRoute;