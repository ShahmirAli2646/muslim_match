import { lazy } from 'react';


const routes = [
  {
    path: 'view-profile',
    component:lazy(() =>
    import("../Profile/Profile").then((module) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(module);
        }, 1000);
      });
    })
  ) ,
    exact: true
  },
  {
    path: 'edit-profile',
    component: lazy(() =>
    import("../Profile/EditProfile/EditProfile").then((module) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(module);
        }, 1000);
      });
    })
  )  ,
    exact: true
  },
  {
    path: 'my-matches',
    component: lazy(() =>
    import("../Matches/Matches").then((module) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(module);
        }, 1000);
      });
    })
  ) ,
    exact: true
  },
  {
    path: 'admin-panel',
    component: lazy(() =>
    import("../../adminPanel/Admin").then((module) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(module);
        }, 1000);
      });
    })
  ) ,
    exact: true
  },

];

export default routes;