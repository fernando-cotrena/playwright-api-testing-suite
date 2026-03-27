import { test } from '../../src/fixtures/api';
import { ApiResponseAssertions } from '../../src/utils/api-response-assertions';

test.describe('GraphQL API - Users Example', () => {
  test('should execute a graphql query', async ({ graphqlClient }) => {
    const query = `
      query GetUser($id: ID!) {
        user(id: $id) {
          id
          name
          email
        }
      }
    `;
    const variables = { id: '1' };
    
    // We hit a public GraphQL API for demonstration
    const response = await graphqlClient.execute('https://graphqlzero.almansi.me/api', query, variables);
    const assertions = new ApiResponseAssertions(response);
    
    await assertions.toBeOk();
    await assertions.toHaveStatus(200);
    
    const body = await response.json();
    if (!('data' in body)) {
      throw new Error('Expected graphql response to contain "data" property');
    }
  });
});
