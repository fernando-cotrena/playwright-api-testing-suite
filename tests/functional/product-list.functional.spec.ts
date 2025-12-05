import { test } from '../../src/fixtures/api'
import { ApiResponseAssertions } from '../../src/support/assertions/api-response-assertions'

test('Funcional: /productsList devuelve productos', async ({ productsApi }) => {
  const response = await productsApi.getProductsList()
  const assertions = new ApiResponseAssertions(response)
  await assertions.toBeOk()
  await assertions.toHaveStatus(200)
  await assertions.toHaveNonEmptyArray()
})
