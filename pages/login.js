import MainLayout from "../src/components/layout";
// import useAuth  from './../src/tools/hooks/useAuth'
import Router from "next/router";
import { APP_ROUTES } from "./../src/config/router";
import { LAYOUT_TYPE } from "../src/types/layout-type";
// import {addTokenActions} from './../src/redux/token/action'
import { addUserTest } from "./../src/redux/user/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log("user", user);
  const handleLogin = () => {
    // login();
    // dispatch(addTokenActions(1))
    dispatch(addUserTest());
    Router.push(APP_ROUTES.Home);
  };

  useEffect(() => {
    if (user) {
      Router.push(APP_ROUTES.Home);
    }
  }, []);
  return (
    <div>
      Login
      <button onClick={handleLogin}>click to login</button>
    </div>
  );
}

Login.getLayout = (page) => {
  return (
    <MainLayout
      title={"login page"}
      description={"login page"}
      type={LAYOUT_TYPE.JUST_HEADER}
    >
      {page}
    </MainLayout>
  );
};

export default Login;
