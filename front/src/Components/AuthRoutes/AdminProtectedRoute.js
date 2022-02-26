import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import adminroute from './adminroute'; // Route list
import Loader from '../CommonContent/Loader';


const AdminProtectedRoute = () => (
  <Switch>
    <Suspense
      fallback={<Loader />}
    >
      {adminroute.map(({ component: Component, path, exact }) => (
        <Route
          path={`/${path}`}
          key={path}
          exact={exact}
        >
          <Component />
        </Route>
      ))}
    </Suspense>
  </Switch>
);

export default AdminProtectedRoute;