import { test } from '../../src/fixtures/api'
import { ApiResponseAssertions } from '../../src/support/assertions/api-response-assertions'

const productId = [1,2,3]

for (const id of productId) {
  test(`Filter product by id: => /products/${id}`, async ({ productsApi }) => {
    const response = await productsApi.getProductById(id)
    const assertions = new ApiResponseAssertions(response)

    await assertions.toBeOk()
    await assertions.toHaveStatus(200)

  })
}
