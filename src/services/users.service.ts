import { RESTClient } from '../clients/rest-client';

export class UsersService extends RESTClient {
  async getUsersList() {
    return this.get('/users');
  }

  async getUserById(userId: number) {
    return this.get(`/users/${userId}`);
  }
}
