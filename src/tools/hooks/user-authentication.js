// library
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function useUserAuthentication() {
  const [userAuthenticationStatus, setUserAuthenticationStatus] = useState(true);

  const token = useSelector((state) => state.token);
  // const user = useSelector(store => store.user);

  useEffect(() => {
    if (token === null || user === null) {
      if (userAuthenticationStatus === false) return;
      setUserAuthenticationStatus(false);
    } else {
      if (userAuthenticationStatus === true) return;
      setUserAuthenticationStatus(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, user, userAuthenticationStatus]);

  return userAuthenticationStatus;
}

export default useUserAuthentication;
