import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";


export const profiles = pgTable('profiles', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 256 }),
  fullname: varchar('fullname', { length: 256 }),
  email: varchar('email', { length: 256 }),
});

// Profile controllers
export const insertProfileSchema = createInsertSchema(profiles);
export const selectProfileSchema = createSelectSchema(profiles);
export const profileIdSchema = selectProfileSchema.pick({ id: true });
export const updateProfileSchema = selectProfileSchema;

export type Profile = z.infer<typeof selectProfileSchema>;
export type NewProfile = z.infer<typeof insertProfileSchema>;
export type ProfileId = z.infer<typeof profileIdSchema>["id"]