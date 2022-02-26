import {
    Route,
    Redirect
  } from 'react-router-dom';
  import jwt from 'jwt-decode'
  function PublicRoute({ children, isAuthenticated , user, ...rest }) {
    
    // console.log('admin toke' , use)
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            !isAuthenticated ? (
              children
            ) : isAuthenticated && user.role==='admin'?(
              <Redirect
                to={{
                  pathname: '/admin/admin-panel',
                  state: { from: location }
                }}
              />
            ): 
            <Redirect
                to={{
                  pathname: '/user-profile/view-profile',
                  state: { from: location }
                }}
              />
            )
        }
      />
    );
  }
  
  export default PublicRoute;