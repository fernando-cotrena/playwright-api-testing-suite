import { test } from '../../src/fixtures/api'
import { ApiResponseAssertions } from '../../src/support/assertions/apiResponseAssertions'

test('Funcional: /productsList devuelve productos', async ({ productsApi }) => {
  const response = await productsApi.getProductsList()
  const assertions = new ApiResponseAssertions(response)
  await assertions.toBeOk()
  await assertions.toHaveStatus(400)
  await assertions.toHaveNonEmptyArray()
})
