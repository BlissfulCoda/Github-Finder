const MONGO_IP = (process.env.MONGO_IP ??= "mongo");
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DATABASE = process.env.MONGO_DATABSE;
const REDIS_URL = (process.env.REDIS_URL ??= "redis");
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_HOST = (process.env.REDIS_HOST ||  "redis");
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const SECRET_SESSION = process.env.SECRET_SESSION || 6379;

export {
  MONGO_IP,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DATABASE,
  REDIS_URL,
  REDIS_PORT,
  REDIS_HOST,
  SECRET_SESSION,
  REDIS_PASSWORD,
};
