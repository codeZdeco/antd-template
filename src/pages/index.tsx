import ErrorPage from "./ErrorPage";

export const NotFoundPage = ErrorPage[404];
export const ServerErrorPage = ErrorPage[500];
export const NoAuthorizedPage = ErrorPage[403];

export { default as LoadingPage } from "./LoadingPage";
export { default as HomePage } from "./HomePage";
export { default as LoginPage } from "./LoginPage";
export { default as SettingPage } from "./SettingPage";
export { default as ProfilePage } from "./ProfilePage";
export { default as NotificationSettingPage } from "./SettingPage/subs/NotificationSettingPage";
export { default as AccountSettingPage } from "./SettingPage/subs/AccountSettingPage";
export { default as AppearanceSettingPage } from "./SettingPage/subs/AppearanceSettingPage";
