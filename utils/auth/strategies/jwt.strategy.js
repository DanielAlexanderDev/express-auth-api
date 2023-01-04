import { Strategy, ExtractJwt } from "passport-jwt";
import config from "../../../config/config.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET,
};

export const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});
