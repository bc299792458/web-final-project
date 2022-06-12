import { EntitySchema } from "typeorm";

export default new EntitySchema({
    name: "ShortUrl", // Will use table name `category` as default behaviour.
    tableName: "shortUrl", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        uid: {
            type: "int"
        },
        origin: {
            type: "varchar"
        },
        short: {
            type: "varchar"
        },
        date: {
            type: "varchar"
        },
    }
});