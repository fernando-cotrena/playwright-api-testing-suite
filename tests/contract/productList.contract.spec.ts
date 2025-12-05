import { test } from '../../src/fixtures/api'
import { productListSchema } from '../../src/support/schemas/productList.schema'
import { validateSchema } from '../../src/support/schemas/validateSchema'

test('Contrato: /productsList cumple el esquema', async ({ productsApi }) => {
  const response = await productsApi.getProductsList()
  const body = await response.json()

  validateSchema(productListSchema, body)
})
