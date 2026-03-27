import { RESTClient } from '../clients/rest-client';

export class ProductsService extends RESTClient {
  async getProductsList() {
    return this.get('/products');
  }

  async getProductById(productId: number) {
    return this.get(`/products/${productId}`);
  }
}
