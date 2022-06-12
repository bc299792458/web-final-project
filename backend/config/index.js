import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error(".env file not found");
}


export default {
	ip: process.env.IP,
    port: parseInt(process.env.PORT, 10),
    db: {
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		user: process.env.DB_USERNAME,
		pwd: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
	}
};