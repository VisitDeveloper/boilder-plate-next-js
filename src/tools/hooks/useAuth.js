import {
    useEffect,
    useState,
    useContext,
    createContext,
    useCallback,
    useLayoutEffect
  } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import {APP_ROUTES} from 'config/router'
import {useRouter} from 'next/router'
import useUserAuthentication from './user-authentication'
import {isRouteNeedAuth} from 'config/router'


  const authContext = createContext();
  
  function useProvideAuth() {
    const cookie = Cookie.get("auth");
    const [isAuthed, setIsAuthed] = useState(cookie);
    const router = useRouter()
    const userAuthenticationStatus = useUserAuthentication();

    // create login request for login panel
    const login = useCallback(() => setIsAuthed(true), []);
    // create logout request for logout panel
    const logout = useCallback(() => setIsAuthed(false), []);


    // object window in next js in client side for use you are create it in useEffect beacuse in client side 
    // useEffect(() => {
    //   const origin = window.location.origin || "APP_WINDOW_LOCATION_ORIGIN";
    //   // console.log(origin)
    // },[])
    

    useLayoutEffect(() => {
        const origin = window.location.origin || "APP_WINDOW_LOCATION_ORIGIN";
        let receiverChannel = new BroadcastChannel(origin);
        receiverChannel.addEventListener("message", (event) => {
          if (event.data === BROAD_CAST_CHANNEL.LOGOUT) {
            dispatch({ type: REDUX_ACTION.EMPTY_TOKEN, payload: null });
            // dispatch({ type: REDUX_ACTION.EMPTY_USER, payload: null });
            Router.push(APP_ROUTES.Login)
          }
        });
    
        if (!userAuthenticationStatus && isRouteNeedAuth(router.pathname)) {
          let senderChannel = new BroadcastChannel(origin);
          senderChannel.postMessage(BROAD_CAST_CHANNEL.LOGOUT);
          Router.push(APP_ROUTES.Login)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    
      useEffect(() => {
        if (!userAuthenticationStatus && isRouteNeedAuth(router.pathname)) {
          let senderChannel = new BroadcastChannel(origin);
          senderChannel.postMessage(BROAD_CAST_CHANNEL.LOGOUT);
          Router.push(APP_ROUTES.Login)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [router.pathname, userAuthenticationStatus]);
    
  
    useEffect(() => {
      if (!isAuthed) {
        Router.push("/login");
        Cookie.remove("auth");
      } else {
        Cookie.set("auth", true);
      }
    }, [isAuthed]);
  
    return { isAuthed, login, logout };
  }
  
  export const AuthProvider = ({ children }) => {
    const value = useProvideAuth();
    return <authContext.Provider value={value}>{children}</authContext.Provider>;
  };
  
  export default function useAuth() {
    return useContext(authContext);
  }
  