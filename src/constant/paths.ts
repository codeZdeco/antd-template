type PathType = {
  [key: string]: string;
};

const instance: PathType = {
  default: "/",
  home: "home",
  login: "login",
  event: "events",
  profile: "profile",
  notification: "notifications",
  setting: "settings",
};

export default instance;
