
import { APIRequestContext } from '@playwright/test';

export class BaseApiClient {
  constructor(protected request: APIRequestContext) {}

  protected get(url: string, options = {}) {
    return this.request.get(url, options);
  }

  protected post(url: string, options = {}) {
    return this.request.post(url, options);
  }

  protected put(url: string, options = {}) {
    return this.request.put(url, options);
  }

  protected delete(url: string, options = {}) {
    return this.request.delete(url, options);
  }
}
