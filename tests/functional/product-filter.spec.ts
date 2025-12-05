import { test } from '../../src/fixtures/api'
import { ApiResponseAssertions } from '../../src/support/assertions/api-response-assertions'

const productIds = [1, 2, 3]

/**
 * Ejemplo 1: test secuencial usando for-of
 */
for (const id of productIds) {
  test(`Sequential: product ${id}`, async ({ productsApi }) => {
    const response = await productsApi.getProductById(id)
    const assertions = new ApiResponseAssertions(response)

    await assertions.toBeOk()
    await assertions.toHaveStatus(200)
  })
}

/**
 * Ejemplo 2: test paralelo usando test.describe.parallel
 */
test.describe.parallel('Products Detail - Parallel', () => {
  for (const id of productIds) {
    test(`Parallel: product ${id}`, async ({ productsApi }) => {
      const response = await productsApi.getProductById(id)
      const assertions = new ApiResponseAssertions(response)

      await assertions.toBeOk()
      await assertions.toHaveStatus(200)
    })
  }
})
