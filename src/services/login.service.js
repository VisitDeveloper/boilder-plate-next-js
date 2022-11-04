// custom
import { BaseService } from "./base.service";

export class LoginService extends BaseService {
  login(payload) {
    return this.axiosInstanceWithoutToken.post("api/v1/auth/login", payload);
  }

  getUserByTokenOfSSO() {
    return this.axiosInstanceWithToken.get("/getUser");
  }
}
