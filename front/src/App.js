import React, { useEffect , Fragment } from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import Navbar from './Components/Navbar';
import Profile from './Components/Profile/Profile'
import EditProfile from "./Components/Profile/EditProfile/EditProfile";
import Matches from './Components/Matches/Matches'
import AdminPanel from './adminPanel/Admin'
import { lazy, Suspense } from 'react';
import Loader from './Components/CommonContent/Loader'
import ProtectedRoutes from "./Components/AuthRoutes/ProtectedRoutes";
import PublicRoute from "./Components/AuthRoutes/PublicRoute";
import PrivateRoute from "./Components/AuthRoutes/PrivateRoute";
import { useSelector } from 'react-redux'
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
  return (

    <Router>
      
       <Fragment>
      <Navbar/>
      <Suspense fallback={<Loader />}>
        <Switch>
        <PublicRoute
            path="/signin"
            isAuthenticated={isAuthenticated}
          >
            <SignIn />
          </PublicRoute>
          <PublicRoute
            path="/signup"
            isAuthenticated={isAuthenticated}
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
            path="/"
            isAuthenticated={isAuthenticated}
          >
            <ProtectedRoutes />
          </PrivateRoute>
        </Switch>
        </Suspense>
        </Fragment> 
      
    </Router>
  );
}

export default App;