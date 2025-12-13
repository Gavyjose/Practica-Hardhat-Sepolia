import hre from "hardhat";

async function main() {
  await hre.run("compile");

  // Desplegamos el contrato de la práctica
  const contrato = await hre.viem.deployContract("Contratohardhat");

  console.log("Contratohardhat deployed to:", contrato.address);

  // Leer el mensaje
  const mensaje = await contrato.read.message();
  console.log("Mensaje del contrato:\n" + mensaje);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
