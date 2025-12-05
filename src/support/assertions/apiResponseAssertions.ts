import { APIResponse } from '@playwright/test';

export class ApiResponseAssertions {
  private response: APIResponse;

  constructor(response: APIResponse) {
    this.response = response;
  }

  async toBeOk(): Promise<void> {
    if (!this.response.ok()) {
      throw new Error(`Expected response to be OK (2xx) but got ${this.response.status()}`);
    }
  }

  async toHaveStatus(expectedStatus: number): Promise<void> {
    const actual = this.response.status();
    if (actual !== expectedStatus) {
      throw new Error(`Expected status ${expectedStatus} but got ${actual}`);
    }
  }

  async toHaveNonEmptyArray(): Promise<void> {
    const body = await this.response.json();
    if (!Array.isArray(body)) {
      throw new Error(`Expected response body to be an array, but got ${typeof body}`);
    }
    if (body.length === 0) {
      throw new Error(`Expected response array to have at least one item, but it was empty`);
    }
  }

  // Podemos agregar más métodos según necesites, por ejemplo:
  // async toIncludeKeys(keys: string[]) { ... }
  // async toHaveProperty(path: string, value: any) { ... }

}
