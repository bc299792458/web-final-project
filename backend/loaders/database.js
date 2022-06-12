import { createConnection } from "typeorm";
import config from "../config/ormconfig.js";

export default async ()=> {
  await createConnection(config).catch((e) => {
    console.log(`Database: ${e}`);

    // Make the process to exit since we can not provide
    // the backend service without connecting to database
    process.exit(-1);
  });
};
