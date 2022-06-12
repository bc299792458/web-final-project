import config from "./index.js";
import user from "./../entity/user.js";
import shortUrl from "../entity/shortUrl.js";

export default{
    "type": "mysql",
    "host": config.db.host,
    "port": config.db.port,
    "username": config.db.user,
    "password": config.db.pwd,
    "database": config.db.database,
    "logging": true,
    "synchronize": true,
    entities: [
        user,
        shortUrl,
    ]
}