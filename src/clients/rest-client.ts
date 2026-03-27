import { APIRequestContext, APIResponse } from '@playwright/test';

export class RESTClient {
  constructor(protected request: APIRequestContext) {}

  async get(url: string, options?: Parameters<APIRequestContext['get']>[1]): Promise<APIResponse> {
    return this.request.get(url, options);
  }

  async post(url: string, options?: Parameters<APIRequestContext['post']>[1]): Promise<APIResponse> {
    return this.request.post(url, options);
  }

  async put(url: string, options?: Parameters<APIRequestContext['put']>[1]): Promise<APIResponse> {
    return this.request.put(url, options);
  }

  async patch(url: string, options?: Parameters<APIRequestContext['patch']>[1]): Promise<APIResponse> {
    return this.request.patch(url, options);
  }

  async delete(url: string, options?: Parameters<APIRequestContext['delete']>[1]): Promise<APIResponse> {
    return this.request.delete(url, options);
  }
}
