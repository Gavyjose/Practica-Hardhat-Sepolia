// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/// @title Contratohardhat
/// @notice Contrato simple que expone un mensaje fijo para la Práctica Nº1 (Hardhat).
contract Contratohardhat {
    /// @notice Devuelve el mensaje completo solicitado.
    /// @dev Se devuelve como un string con saltos de línea (\n) para facilitar su lectura.
    function message() external pure returns (string memory) {
        return string(
            abi.encodePacked(
                "Bienvenido al Contrato\n",
                "Materia: BlockChain\n",
                "Profesor: Ruben Santana\n",
                "Estudiante: Gavy Colmenares\n",
                unicode"Practica Nº1 HARDHAT"
            )
        );
    }
}

