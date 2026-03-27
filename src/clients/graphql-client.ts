import { APIRequestContext, APIResponse } from '@playwright/test';

export class GraphQLClient {
  constructor(protected request: APIRequestContext) {}

  /**
   * Executes a GraphQL query or mutation.
   * @param url The GraphQL endpoint URL.
   * @param query The GraphQL query/mutation string.
   * @param variables Optional variables for the query.
   * @param headers Optional request headers (e.g., Authorization).
   */
  async execute(
    url: string,
    query: string,
    variables?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<APIResponse> {
    return this.request.post(url, {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      data: {
        query,
        variables,
      },
    });
  }
}
