# Change Log
This file explains how I created and maintain the project.

The following tools were used to generate this project:
- TypeScript Compiler (tsc)

## 0.1.0 (2024-07-01)
The following steps were used to generate this project:
- Create project file (`Wiser-Client.esproj`).
- Create `launch.json` to enable debugging.
- Create `nuget.config` to specify location of the JavaScript Project System SDK (which is used in the first line in `Wiser-Client.esproj`).
- Install npm packages and create `tsconfig.json`: `npm init && npm i --save-dev eslint typescript @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser && npx tsc --init --sourceMap true`.
- Create `app.ts`.
- Update `package.json` entry point.
- Update TypeScript build scripts in `package.json`.
- Create `.eslintrc.json` to enable linting.
- Add project to solution.

## 0.2.0 (2024-07-02)
Initital realease
- Extract JSON from the Wiser Hub
- Create API interface
- Create WiserClient
- Create ReadMe
- Perform test