import * as Redis from "redis";

const { REDIS_PORT } = process.env;
const redisOptions = {
  legacyMode: true,
  url: REDIS_PORT,
};

let redisClient: any;

export async function initRedisClient() {
  try {
    redisClient = Redis.createClient(redisOptions);
    redisClient.on("error", (err: any) =>
      console.log(`Redis Client redisClient Error - ${err}`)
    );
    await redisClient.connect();
    console.log(`Redis connected..`)
    return redisClient;
  } catch (error) {
    throw new Error("Error.. Redis cfailed to connect");
  }
}

