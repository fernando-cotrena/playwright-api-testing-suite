import { BaseApiClient } from './base-api-client'

export class ProductsService extends BaseApiClient {
  async getProductsList() {
    return this.get('/products')
  }

  async getProductById(productId: number) {
    return this.get(`/products/${productId}`)
  }
}
