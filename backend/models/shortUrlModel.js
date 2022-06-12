import { redisClient } from "../loaders/redis.js";
import { nanoid } from 'nanoid';
import { getRepository } from "typeorm";
import user from "../entity/user.js";
import shortUrl from "../entity/shortUrl.js";

export class shortUrlModel{
    getUrl = async (shortId) => {
        return await redisClient.get(shortId);
    }
    insertUrl = async (url, uid) => {
        const shortId = nanoid(5);
        const date = new Date().toUTCString();
        await redisClient.set(shortId, url);
        let newUrl = getRepository(shortUrl).create();
        newUrl.uid = uid;
        newUrl.origin = url;
        newUrl.short = shortId;
        newUrl.date = date;
        await getRepository(shortUrl).save(newUrl);
        return shortId;
    }
    getHistoryByUid = async (uid) => {
        const shorts = await getRepository(shortUrl).find({
            where:{
                uid: uid,
            }
        });
        return shorts;
    }
}