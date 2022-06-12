import { EntitySchema } from "typeorm";

export default new EntitySchema({
    name: "User", // Will use table name `category` as default behaviour.
    tableName: "user", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        uid: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        account: {
            type: "varchar"
        },
        pwd: {
            type: "varchar"
        },
        email: {
            type: "varchar"
        },
        birthday: {
            type: "varchar"
        }
    }
});