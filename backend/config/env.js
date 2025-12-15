import { config } from "dotenv";

config({path : `.env.${process.env.NODE_ENV || 'development'}.local`});


export const {

    PORT,
    NODE_ENV,
     REFRESH_TOKEN_SECRET,
     ACCESS_TOKEN_SECRET,
     ACCESS_TOKEN_EXPIRATION,
     REFRESH_TOKEN_EXPIRATION,
    DB_URI,

} = process.env;

