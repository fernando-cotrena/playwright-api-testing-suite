
import { BaseApiClient } from './base-api-client';

export class ProductsService extends BaseApiClient {
  
  async getProductsList() {
    return this.get('/products');
  }

  async searchProduct(product: number) {
    return this.post('/products', {
      form: { search_product: product }
    });
  }
}
