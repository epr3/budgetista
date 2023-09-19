import { pgEnum, pgTable, numeric, varchar, date, uuid, timestamp } from "drizzle-orm/pg-core";

export const currencyEnum = pgEnum("currency", ["RON", "EUR", "USD"]);

export const passportTypeEnum = pgEnum("passport_type", ["PASSWORD", "GOOGLE"]);

export const tokenTypeEnum = pgEnum("token_type", ["VALIDATION", "RESET_PASSWORD"]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  nickname: varchar("nickname").notNull(),
  email: varchar("email").notNull().unique(),
  verifiedAt: timestamp("verified_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const settings = pgTable("settings", {
  id: uuid("id").primaryKey().defaultRandom(),
  currency: currencyEnum("currency"),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
});

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  icon: varchar("icon"),
  name: varchar("name").notNull(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
});

export const transactions = pgTable("transactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  amount: numeric("amount").notNull(),
  description: varchar("description"),
  categoryId: uuid("category_id")
    .references(() => categories.id)
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
});

export const userPassports = pgTable("user_passports", {
  id: uuid("id").primaryKey().defaultRandom(),
  hashedPassword: varchar("hashed_password"),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  passportType: passportTypeEnum("passport_type").notNull(),
});

export const tokens = pgTable("tokens", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: date("created_at").notNull().defaultNow(),
  email: varchar("email")
    .references(() => users.email)
    .notNull(),
  tokenType: tokenTypeEnum("token_type").notNull(),
  token: varchar("token").notNull(),
});
