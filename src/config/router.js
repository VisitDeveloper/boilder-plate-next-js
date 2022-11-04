export const APP_ROUTES = {
    Login : '/login',
    Home : '/'
}

export const PUBLIC_ROUTE = [
  APP_ROUTES.Login,
]


// public route 
export const isRouteNeedAuth = (path) => {
    if (path.startsWith("/sso/")) return false;
    switch (path) {
      case APP_ROUTES.Login:
        return false;
      default:
        return true;
    }
  };