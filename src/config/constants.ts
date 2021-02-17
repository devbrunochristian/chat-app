import dotenv from 'dotenv';

dotenv.config();

export const { APP_KEY, APP_URL, APP_PORT, APP_DATABASE } = process.env;
