import { test as base } from '@playwright/test'
import { ProductsService } from '../../support/services/products-api'
import { ApiResponseAssertions } from '../../support/assertions/apiResponseAssertions'

type ApiFixtures = {
  productsApi: ProductsService
  apiAssertions: ApiResponseAssertions
}

export const test = base.extend<ApiFixtures>({
  productsApi: async ({ request }, use) => {
    const api = new ProductsService(request)
    await use(api)
  },
})
