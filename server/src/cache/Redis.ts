import * as Redis from "redis";
import { REDIS_PASSWORD } from "../config/config";
const redisOptions = {
  legacyMode: true,
  url: `redis://redis:6379`,

  //host: "redis",
  //port: 6379,
  //auth_pass: REDIS_PASSWORD,
};

let redisClient: any;

export async function initRedisClient() {
  try {
    redisClient = Redis.createClient(redisOptions);
    redisClient.on("error", (err: any) => {
      console.log(`Redis C
      lient redisClient Error - ${err}`);
      redisClient && redisClient.auth(REDIS_PASSWORD);
    });
    await redisClient.connect();
    console.log(`Redis connected..`);
    return redisClient;
  } catch (error) {
    throw new Error("Error.. Redis cfailed to connect");
  }
}
