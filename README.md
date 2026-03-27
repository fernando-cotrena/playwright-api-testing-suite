# 🧪 Playwright API Testing Suite

API testing automation framework using Playwright + TypeScript. This framework is highly scalable and supports both REST and GraphQL APIs.

## ✨ Features
- Structured architecture: Base Clients, Domain Services, Schemas, Utils, and Tests.
- Reusable service classes integrated seamlessly via Playwright fixtures.
- Schema definitions and validation using **Zod**.
- Built-in support for **REST** and **GraphQL** queries.
- Automatic parallel execution and detailed HTML reporting.

## 📁 Project Structure

```text
.
├─ src/
│  ├─ clients/           # Base API clients (RESTClient, GraphQLClient)
│  ├─ services/          # Domain-specific services (e.g., ProductsService, UsersService)
│  ├─ schemas/           # Data validation schemas (Zod)
│  ├─ utils/             # Utilities (Custom Response Assertions, validators)
│  └─ fixtures/          # Playwright fixtures injecting the respective services
├─ tests/
│  ├─ rest/              # REST APIs tests (functional and contract tests)
│  └─ graphql/           # GraphQL APIs tests
├─ playwright.config.ts  # Playwright global configuration
└─ package.json
```

## 🚀 Installation

1. Clone this repository.
2. Navigate into the project directory:
   ```bash
   cd playwright-api-testing-suite
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## ▶️ Running Tests

You can use the Playwright CLI to execute tests in different ways:

**Run all tests in headless mode:**
```bash
npx playwright test
```

**Run all tests in interactive UI mode:**
```bash
npx playwright test --ui
```

**Run specific test suites (e.g., only REST or GraphQL tests):**
```bash
npx playwright test tests/rest
npx playwright test tests/graphql
```

## 📊 HTML Reports

By default, Playwright generates an HTML report after a test run finishes. To open the report and review the test execution details (including network traces):
```bash
npx playwright show-report
```

---
🤝 **Let's Connect**
Check out more projects or get in touch:
👉 **LinkedIn:** [fernandocotrena](https://www.linkedin.com/in/fernandocotrena)
👉 **GitHub:** [fernandocotrena](https://github.com/fernandocotrena)