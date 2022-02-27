import {
    Route,
    Redirect 
  } from 'react-router-dom';
  
  function AdminPrivateRoute({ children, isAuthenticated , user, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            isAuthenticated && user?.role==='admin'
              ? (
                children
              ):<Redirect
              to={{
                pathname: '/signin',
                state: { from: location }
              }}
            />)
        }
      />
    );
  }
  
  export default AdminPrivateRoute;