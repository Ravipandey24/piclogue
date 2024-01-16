import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as dbSchema from './schema/schema';

const schema = { ...dbSchema }

if (!process.env.DATABASE_URI) {
    throw new Error("DATABASE_URL is missing");
}
const connectionString = process.env.DATABASE_URI as string

const client = postgres(connectionString)

export const db = drizzle(client, { schema });
