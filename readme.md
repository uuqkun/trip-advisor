# Artificial Intelligence Midterm Test

## Simple Expert System: Travel Advisor

## Description

Expert system built for midterm test of **Artificial Intelligence** subject on [`UIN Maulana Malik Ibrahim Malang`](https://informatika.uin-malang.ac.id/)

## Author

| Details    |                             |
| ---------- | --------------------------- |
| Name       | `Achmad Furqon Rachmadie`   |
| Student ID | `220605110146`              |
| Subject    | `Artificial Intelligence B` |
| Regarding  | `Midterm Test`              |

## Requirement

| Lib/package name                         | Version            |
| ---------------------------------------- | ------------------ |
| [NodeJS](https://nodejs.org/en/download) | v20.11.0 or higher |

### Dependencies

| Lib/package name                                       | Version |
| ------------------------------------------------------ | ------- |
| [Axios](https://axios-http.com/docs/intro)             | v1.6.8, |
| [Nodemon](https://www.npmjs.com/package/nodemon)       | v3.1.0, |
| [Typescript](https://www.typescriptlang.org/download/) | v5.4.5  |

### Dev Dependencies

| Lib/package name                                 | Version |
| ------------------------------------------------ | ------- |
| [ts-node](https://www.npmjs.com/package/ts-node) | v10.9.2 |

## Installation

1. Clone project
   ```
   git clone https://github.com/uuqkun/trip-advisor.git
   ```
2. Move to project's directory
   ```
    cd ./travel-advisor
   ```
3. Install Dependencies

   Dependencies

   ```
   npm install axios nodemon typescript
   ```

   Dev Dependencies

   ```
   npm install -D ts-node
   ```

4. Create `tsconfig.json` (_In case you don't have any_)

   ```
   npx tsc --init
   ```

   After initialize `tsconfig.json`, copy & paste these lines on it

   ```json
   {
     "compilerOptions": {
       "target": "es2016",
       "module": "commonjs",
       "esModuleInterop": true,
       "forceConsistentCasingInFileNames": true,
       "strict": true,
       "skipLibCheck": true,
       "outDir": "./dist",
       "resolveJsonModule": true
     },
     "include": ["**/**/*"],
     "exclude": ["node_modules"]
   }
   ```

5. Run program

   ```
    npm run start
   ```
