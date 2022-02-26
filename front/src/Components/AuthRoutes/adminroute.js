import { lazy } from 'react';


const adminroute = [
  
  {
    path: 'admin/admin-panel',
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

export default adminroute;