# playwright-api-testing-suite

Playwright API Testing Suite
Descripción

Proyecto de automatización de pruebas de APIs usando Playwright y TypeScript, con enfoque en:

Tests funcionales y de contrato para endpoints de productos.

Reutilización de servicios y assertions.

Parametrización de tests y ejecución paralela.

Reportes visuales generados por Playwright.

Estructura del proyecto
.
├─ src/
│  ├─ fixtures/          # Fixtures de Playwright (API clients)
│  └─ support/
│     ├─ services/       # Clientes API (ProductsApi, SearchApi)
│     ├─ assertions/     # Clases de validación de responses
│     ├─ schemas/        # Schemas de validación de JSON
│     └─ data/           # Datos de prueba
├─ tests/
│  ├─ functional/        # Tests funcionales de endpoints
│  └─ contract/          # Tests de contrato (status, estructura)
├─ report/               # Reportes HTML de ejecución
├─ test-results/         # Resultados crudos de Playwright
├─ playwright.config.ts  # Configuración de Playwright
├─ package.json
└─ README.md

Instalación
git clone <repo-url>
cd <project-folder>
npm install

Ejecución de tests
Todos los tests
npx playwright test

Tests específicos
npx playwright test tests/functional/product-list.functional.spec.ts

Con reporte HTML
npx playwright test --reporter=html
npx playwright show-report