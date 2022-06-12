import { createClient } from "redis";

let redisClient;

const redisLoader = async () => {
  redisClient = createClient({
    url: "redis://redis:6379",
  });
  await redisClient.connect();
  try {
    const pong = await redisClient.ping();
    if (!pong) {
      throw new Error("Redis connection fail");
    }
  } catch (e) {
    console.log(`Redis: ${e}`);
    process.exit(-1);
  }
};

export { redisLoader, redisClient };
