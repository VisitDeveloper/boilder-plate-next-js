// import App from "next/app";
import "./../public/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./../src/redux/store";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { PUBLIC_ROUTE } from "./../src/config/router";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import fa from "../lang/fa.json";

const messages = {
  en,
  fa,
};

function getDirection(locale) {
  if (locale === "fa") {
    return "rtl";
  }
  return "ltr";
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // run auth check on initial load
    authCheck(router.asPath);

    // set authorized to false to hide page content while changing routes
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // run auth check on route change
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    // const publicPaths = ['/login'];
    const publicPaths = PUBLIC_ROUTE;
    const path = url.split("?")[0];

    // check user is there or not ====>
    if (!store.getState().user && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
      });
    } else {
      setAuthorized(true);
    }
  }

  useEffect(() => {
    let dir = router.locale == "fa" ? "rtl" : "ltr";
    let lang = router.locale == "fa" ? "fa" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <IntlProvider locale={router.locale} messages={messages[router.locale]}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {() =>
            authorized &&
            getLayout(
              <Component dir={getDirection(router.locale)} {...pageProps} />
            )
          }
        </PersistGate>
      </Provider>
    </IntlProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  //Anything returned here can be accessed by the client
  return { pageProps };
};

export default MyApp;
