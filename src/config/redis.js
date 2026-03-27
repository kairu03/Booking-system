import { Redis } from "@upstash/redis";

// lazy initialization, creates new Redis client using env variables when getRedis() is called
export const getRedis = () => new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
});

