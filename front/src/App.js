import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch , Route , Redirect} from "react-router-dom";
import Navbar from './Components/Navbar';
import Profile from './Components/Profile/Profile'
import EditProfile from "./Components/Profile/EditProfile/EditProfile";
import Matches from './Components/Matches/Matches'
import AdminPanel from './adminPanel/Admin'
import { lazy, Suspense } from 'react';
import Loader from './Components/CommonContent/Loader'
import ProtectedRoutes from "./Components/AuthRoutes/ProtectedRoutes";
import AdminProtectedRoute from './Components/AuthRoutes/AdminProtectedRoute'
import PublicRoute from "./Components/AuthRoutes/PublicRoute";
import PrivateRoute from "./Components/AuthRoutes/PrivateRoute";
import AdminPrivateRoute from "./Components/AuthRoutes/AdminPrivateRoute";
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
// const SignIn =  lazy(() => import('./Components/SignIn'));
// const SignUp =  lazy(() => import('./Components/Register'));


const SignIn = React.lazy(() =>
  import("./Components/SignIn").then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module);
      }, 1000);
    });
  })
);

const SignUp = React.lazy(() =>
  import("./Components/Register").then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module);
      }, 1000);
    });
  })
);


function App() {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn)
  console.log('authentication' , isAuthenticated)
  const user = useSelector(state => state.auth.user)
  const isComplete = useSelector(state => state.checkProfile.isComplete)
  console.log('user' , user)
  return (

    <Router>

      <Fragment>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Navbar isComplete={isComplete} isAuthenticated={isAuthenticated} user={user} />
        </Grid>
        
        <Route exact path="/" render={() => (
          isAuthenticated ? (
            <Redirect to="/user-profile" />
          ) : (
            <Redirect to="/signin" />
          )
        )} />
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute
              path="/signin"
              isAuthenticated={isAuthenticated}
              user={user}
            >
              <SignIn />
            </PublicRoute>
            <PublicRoute
              path="/signup"
              isAuthenticated={isAuthenticated}
              user={user}
            >
              <SignUp />
            </PublicRoute>
            {/* <PublicRoute
            path="/forgot-password"
            isAuthenticated={isAuthenticated}
          >
            <ForgotPassword />
          </PublicRoute> */}
            <PrivateRoute
              path="/user-profile"
              isAuthenticated={isAuthenticated}
              user={user}
            >
              <ProtectedRoutes />
            </PrivateRoute>
            <AdminPrivateRoute
              path="/admin"
              isAuthenticated={isAuthenticated}
              user={user}
            >
              <AdminProtectedRoute />
            </AdminPrivateRoute>
          </Switch>
        </Suspense>
      </Fragment>
      <ToastContainer />
    </Router>
  );
}

export default App;