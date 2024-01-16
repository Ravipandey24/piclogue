import type { Config } from "drizzle-kit";


const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env.local') })

export default {
  schema: "./utils/drizzle/schema",
  out: "./utils/drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URI as string
  }
} satisfies Config;