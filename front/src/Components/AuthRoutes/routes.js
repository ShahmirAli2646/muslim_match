import { lazy } from 'react';


const routes = [
  {
    path: 'user-profile/view-profile',
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
    path: 'user-profile/edit-profile',
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
    path: 'user-profile/my-matches',
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
  

];

export default routes;