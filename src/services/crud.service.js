import { ApiPayload } from "../model/service/api-payload.model";
import { ApiResponse } from "../model/service/api-response.model";
import { BaseService } from "./base.service";

export abstract class CrudService extends BaseService {
  abstract entityBaseUrl: string;

  create(payload) {
    return this.axiosInstanceWithToken.post(
      `/${this.entityBaseUrl}/create`,
      payload
    );
  }

  update(payload, entityId) {
    return this.axiosInstanceWithToken.put(
      `/${this.entityBaseUrl}/update/${entityId}`,
      payload
    );
  }

  getList(payload) {
    return this.axiosInstanceWithToken.post(
      `/${this.entityBaseUrl}/list`,
      payload
    );
  }

  getJustNameList(payload) {
    return this.axiosInstanceWithToken.post(
      `/${this.entityBaseUrl}/short/list`,
      payload
    );
  }

  getById(entityId) {
    return this.axiosInstanceWithToken.get(
      `/${this.entityBaseUrl}/byId/${entityId}`
    );
  }

  delete(entityId) {
    return this.axiosInstanceWithToken.delete(
      `/${this.entityBaseUrl}/remove/${entityId}`
    );
  }
  
  logicDelete(entityId) {
    return this.axiosInstanceWithToken.delete(
      `/${this.entityBaseUrl}/remove/logic/${entityId}`
    );
  }
}
