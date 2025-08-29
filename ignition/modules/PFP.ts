import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PFPModule = buildModule("PFPModule", (m) => {
  const initialOwner = m.getAccount(0);
  const pfp = m.contract("PFP", [initialOwner]);

  return { pfp };
});

export default PFPModule; 