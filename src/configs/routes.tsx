import { RouteObject, Outlet } from "react-router-dom";
import { NotFoundPage, LoginPage } from "pages";
import { paths } from "constant";
import { AppLayout } from "components/layout";
import React from "react";

const Home = React.lazy(() => import("pages/HomePage"));
const Profile = React.lazy(() => import("pages/ProfilePage"));
const Setting = React.lazy(() => import("pages/SettingPage"));
const AccountSetting = React.lazy(
  () => import("pages/SettingPage/subs/AccountSettingPage"),
);

const extendedRoutes: RouteObject[] = [
  {
    index: true,
    path: paths.home,
    element: <Home />,
  },
  {
    path: paths.profile,
    element: <Profile />,
  },
  {
    path: paths.setting,
    element: (
      <Setting>
        <Outlet />
      </Setting>
    ),
    children: [
      {
        index: true,
        path: "account",
        element: <AccountSetting />,
      },
    ],
  },
];

const routes: RouteObject[] = [
  {
    path: paths.default,
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      ...extendedRoutes,
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: paths.login,
    element: <LoginPage />,
  },
];

export default routes;
