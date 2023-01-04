import { Strategy } from "passport-local";
import { findByEmail } from "../../../services/user.service.js";
import * as bcrypt from "bcrypt";

export const LocalStrategy = new Strategy(
  {
    usernameField: "email",
    password: "password",
  },
  async (email, password, done) => {
    try {
      const user = await findByEmail(email);
      if (!user) {
        done(null, false);
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        done(null, false);
      }
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);
