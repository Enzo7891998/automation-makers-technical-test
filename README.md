# automation-makers-technical-test

Pruebas automatizadas del flujo de login de [saucedemo.com](https://www.saucedemo.com/) construidas con Playwright, TypeScript y Cucumber siguiendo el patrón Page Object.

## Estructura del proyecto

La estructura está pensada para crecer agrupando por funcionalidad: features, pages y steps comparten la misma carpeta (`login`, en este caso).

```
automation-makers-technical-test
├── cucumber.js                       Configuración de Cucumber
├── tsconfig.json                     Configuración de TypeScript
├── package.json
├── features
│   └── login
│       └── login.feature             Escenarios Gherkin del login
└── src
    ├── drivers
    │   └── PageDriver.ts             Ciclo de vida del navegador
    ├── pages
    │   ├── BasePage.ts               Page base con utilidades comunes
    │   └── login
    │       ├── LoginPage.ts          Page object de la pantalla de login
    │       └── HomePage.ts           Page object de la home (post login)
    ├── steps
    │   ├── common
    │   │   └── navigation.steps.ts   Steps reutilizables entre features
    │   └── login
    │       └── login.steps.ts        Steps específicos del login
    ├── support
    │   ├── hooks.ts                  Hooks Before/After
    │   └── world.ts                  World de Cucumber con las dependencias
    └── testdata
        └── Users.ts                  Datos de prueba (credenciales)
```

## Requisitos previos

- Node.js 18 o superior (recomendado 20 LTS)
- npm 9 o superior
- Conexión a internet (los tests apuntan al sitio público de Sauce Demo)

Para verificar la versión instalada:

```bash
node --version
npm --version
```

## Instalación

1. Clonar el repositorio y entrar en la carpeta del proyecto:

   ```bash
   cd automation-makers-technical-test
   ```

2. Instalar las dependencias. El script `postinstall` descarga automáticamente el navegador Chromium que utiliza Playwright:

   ```bash
   npm install
   ```

   Si por algún motivo la descarga del navegador no se ejecuta, se puede lanzar manualmente:

   ```bash
   npx playwright install chromium
   ```

## Ejecución de los tests

Ejecutar toda la suite en modo headless:

```bash
npm test
```

Ejecutar la suite viendo el navegador:

```bash
npm run test:headed
```

Ejecutar un único feature:

```bash
npx cucumber-js features/login/login.feature
```

Filtrar escenarios por nombre:

```bash
npx cucumber-js --name "Successful login"
```

## Reportes

Tras cada ejecución se genera un reporte HTML en `reports/cucumber-report.html`. Se puede abrir directamente en el navegador.

## Datos de prueba

Las credenciales viven en [src/testdata/Users.ts](src/testdata/Users.ts) y se referencian desde los escenarios por su clave (`standard`, `lockedOut`, etc.). Para agregar un nuevo usuario basta con extender ese objeto y usar la nueva clave en los `.feature`.

-------------------------------------

 API TESTING MODULE
--------------------------------------
Además de la automatización UI, este repositorio incluye documentación del módulo de pruebas de API.

 Módulo de Automatización – Smoke Test de Inicio de Sesión
(SauceDemo)

Los escenarios de automatización del módulo UI están documentados en el siguiente archivo:

 https://docs.google.com/spreadsheets/d/1guAEt0anXQ7LG6gGP6BnjnsPwGyqV3-BCCXW7QHVPaA/edit?gid=0

--------------------------------
 Módulo Funcional

Los casos de prueba, escenarios, técnicas y tipos de pruebas están documentados en el siguiente archivo:

https://docs.google.com/spreadsheets/d/1guAEt0anXQ7LG6gGP6BnjnsPwGyqV3-BCCXW7QHVPaA/edit?gid=1210323104
------------------------------ 
Reporte del módulo API Testing

El reporte completo del módulo API Testing se encuentra documentado en Google Docs e incluye la especificación detallada de:

Diseño de casos de prueba
Ejecución de escenarios en Postman
Validaciones realizadas
Resultados obtenidos (SCREENS)

 https://docs.google.com/document/d/1HMwwkKkrBkXEuoWdFvorMyFkqKDUQbHShPlm_W0lFf8/edit

 Casos de prueba del módulo API

La documentación completa de los casos de prueba del módulo API se encuentra en Google Sheets e incluye los escenarios ejecutados.

 https://docs.google.com/spreadsheets/d/1guAEt0anXQ7LG6gGP6BnjnsPwGyqV3-BCCXW7QHVPaA/edit?gid=541592026
----------------------------  

 APIs utilizadas
ReqRes → https://reqres.in/api/
MockAPI → https://mockapi.io/api/v1/users
 Cobertura de pruebas API

Se incluyen los siguientes escenarios:

POST /users
Creación de usuario (caso positivo)
Body vacío
Tipos de datos inválidos
Campos adicionales
JSON mal formado
GET /users/{id}
Consulta de usuario creado
ID inexistente
ID inválido
Validación de autenticación simulada

Herramientas utilizadas
Postman
Playwright
Cucumber
GitHub Projects (gestión de tareas):
https://github.com/users/Enzo7891998/projects/1
