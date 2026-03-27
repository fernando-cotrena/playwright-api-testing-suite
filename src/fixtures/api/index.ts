import { test as base } from '@playwright/test';
import { ProductsService } from '../../services/products.service';
import { UsersService } from '../../services/users.service';
import { GraphQLClient } from '../../clients/graphql-client';
import { ApiResponseAssertions } from '../../utils/api-response-assertions';

type ApiFixtures = {
  productsApi: ProductsService;
  usersApi: UsersService;
  graphqlClient: GraphQLClient;
};

export const test = base.extend<ApiFixtures>({
  productsApi: async ({ request }, use) => {
    const api = new ProductsService(request);
    await use(api);
  },
  usersApi: async ({ request }, use) => {
    const api = new UsersService(request);
    await use(api);
  },
  graphqlClient: async ({ request }, use) => {
    const client = new GraphQLClient(request);
    await use(client);
  },
});
