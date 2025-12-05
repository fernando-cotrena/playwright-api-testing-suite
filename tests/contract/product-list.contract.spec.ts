import { test } from '../../src/fixtures/api'
import { productListSchema } from '../../src/support/schemas/product-list.schema'
import { validateSchema } from '../../src/support/schemas/validate-schema'

test('Contrato: /productsList cumple el esquema', async ({ productsApi }) => {
  const response = await productsApi.getProductsList()
  const body = await response.json()

  validateSchema(productListSchema, body)
})
