import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'


const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env.local') })

const runMigrate = async () => {
  console.log(process.env.DATABASE_URI)
  if (!process.env.DATABASE_URI) {
    throw new Error("DATABASE_URL is not defined");
  }

  const client = postgres(process.env.DATABASE_URI)
  const db = drizzle(client);

  console.log("⏳ Running migrations...");

  const start = Date.now();

  await migrate(db, { migrationsFolder: path.resolve(__dirname, './migrations') });

  const end = Date.now();

  console.log("✅ Migrations completed in", end - start, "ms");

  process.exit(0);
};

runMigrate().catch((err) => {
  console.error("❌ Migration failed");
  console.error(err);
  process.exit(1);
});
