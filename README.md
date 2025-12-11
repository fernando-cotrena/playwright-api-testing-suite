🧪 Playwright API Testing Suite

Automatización de pruebas de API usando Playwright + TypeScript, con foco en:

Tests funcionales y de contrato.

Reutilización de servicios, fixtures y assertions.

Validación de esquemas (Zod / Ajv).

Ejecución paralela.

Reportes HTML generados automáticamente.

📁 Estructura del proyecto
.
├─ src/
│  ├─ fixtures/          # Fixtures de Playwright (API clients)
│  └─ support/
│     ├─ services/       # Clientes API (ProductsApi, SearchApi)
│     ├─ assertions/     # Validaciones reutilizables
│     ├─ schemas/        # Esquemas JSON
│     └─ data/           # Datos de prueba
├─ tests/
│  ├─ functional/        # Tests funcionales
│  └─ contract/          # Tests de contrato
├─ playwright-report/    # Reportes HTML (autogenerado)
├─ test-results/         # Resultados crudos
├─ playwright.config.ts  # Configuración de Playwright
└─ package.json

🚀 Instalación
git clone <repo-url>
cd playwright-api-testing-suite
npm install

▶️ Ejecución de tests
🔹 Ejecutar todos los tests
npm test

🔹 Ejecutar solo tests de contrato
npm run test:contract

🔹 Ejecutar solo tests de servicio (o funcionales)
npm run test:service

🔹 Ejecutar ambas suites manualmente
npm run test:all

📊 Reportes HTML
Generar y abrir reporte estándar:
npm run report

🤝 Conectemos

Si querés ver más proyectos o contactar:

👉 LinkedIn: https://www.linkedin.com/in/fernandocotrena

👉 GitHub: https://github.com/fernandocotrena