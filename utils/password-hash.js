import bcrypt from "bcrypt";

const ROUNDS = 10;

export const hashPassword = async (pass) => {
  const hashedPass = await bcrypt.hash(pass, ROUNDS);
  return hashedPass;
};
