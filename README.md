# Proyecto Hardhat (Solidity + TypeScript)

Proyecto base de Hardhat para compilar, testear y desplegar contratos en red local y en **Sepolia**.

## Contrato Desplegado:

- Dirección del contrato: 0x1489412c20005c444d56f89b3ac59e27df3d30e8
- Red: Sepolia Testnet
- Explorador: [Ver en Etherscan](https://sepolia.etherscan.io/address/0x1489412c20005c444d56f89b3ac59e27df3d30e8)

## 1) Estructura del proyecto

- Contratos: [`contracts/`](contracts/)
  - [`contracts/Contratohardhat.sol`](contracts/Contratohardhat.sol)
- Scripts de despliegue: [`scripts/deploy.ts`](scripts/deploy.ts)
- Tests: [`test/`](test/) (actualmente sin tests)

## 2) Contrato incluido

### [`contracts/Contratohardhat.sol`](contracts/Contratohardhat.sol)
Contrato simple que expone un mensaje fijo para la práctica.

- `message()` devuelve el texto completo (con saltos de línea) que incluye:
  - Bienvenido al Contrato
  - Materia: BlockChain
  - Profesor: Ruben Santana
  - Estudiante: Gavy Colmenares
  - Practica Nº1 HARDHAT

## 3) Requisitos

- Node.js + npm (recomendado LTS)
- Cuenta con fondos de prueba en Sepolia (faucet) si vas a desplegar en testnet

## 4) Instalación

En la raíz del proyecto:

```bash
npm install
```

## 5) Configuración de red Sepolia ([`.env`](.env))

Este proyecto usa variables de entorno (ver configuración en [`hardhat.config.ts`](hardhat.config.ts)).

En tu archivo [`.env`](.env) define al menos:

- `PRIVATE_KEY` → clave privada de la cuenta que firmará despliegues 
- `ETHERSCAN_API_KEY` → API key para verificación en Etherscan

Nota: no publiques tu [`.env`](.env) ni tu `PRIVATE_KEY`.

## 6) Compilar

```bash
npx hardhat compile
```

## 7) Ejecutar tests

```bash
npx hardhat test
```

Nota: actualmente no hay tests incluidos en [`test/`](test/).

## 8) Red local (Hardhat)

### 8.1) Levantar nodo local

En una terminal:

```bash
npx hardhat node
```

### 8.2) Desplegar Contratohardhat en localhost

En otra terminal:

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

El script [`scripts/deploy.ts`](scripts/deploy.ts) despliega **Contratohardhat** y luego lee e imprime el mensaje del contrato.

## 9) Desplegar en Sepolia

1. Asegúrate de tener `PRIVATE_KEY` en [`.env`](.env).
2. Ejecuta el despliegue indicando la red `sepolia` (definida en [`hardhat.config.ts`](hardhat.config.ts)).

Ejemplo (Contratohardhat con el script):

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

## 10) Nota sobre despliegues

Si ejecutas el despliegue en Sepolia, copia la dirección que imprime la terminal y consúltala en Etherscan (Sepolia) para ver el contrato.
"# Practica-Hardhat-Sepolia" 
