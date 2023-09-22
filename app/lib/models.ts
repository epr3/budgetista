import { relations } from "drizzle-orm";

import { pgEnum, pgTable, uuid, numeric, varchar, timestamp, date } from "drizzle-orm/pg-core";

export enum Currency {
  RON = "RON",
  EUR = "EUR",
  USD = "USD",
}

export enum PassportType {
  PASSWORD = "PASSWORD",
  GOOGLE = "GOOGLE",
}

export enum TokenType {
  VALIDATION = "VALIDATION",
  RESET_PASSWORD = "RESET_PASSWORD",
}

export enum TransactionType {
  EXPENSE = "EXPENSE",
  INCOME = "INCOME",
}

export const transactionTypeEnum = pgEnum("transaction_type", [
  TransactionType.EXPENSE,
  TransactionType.INCOME,
]);

export const currencyEnum = pgEnum("currency", [Currency.EUR, Currency.RON, Currency.USD]);

export const passportTypeEnum = pgEnum("passport_type", [
  PassportType.GOOGLE,
  PassportType.PASSWORD,
]);

export const tokenTypeEnum = pgEnum("token_type", [TokenType.VALIDATION, TokenType.RESET_PASSWORD]);

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
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
});

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  icon: varchar("icon"),
  name: varchar("name").notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
});

export const usersRelations = relations(users, ({ many, one }) => ({
  userPassports: many(userPassports),
  settings: one(settings, {
    fields: [users.id],
    references: [settings.userId],
  }),
}));

export const transactions = pgTable("transactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: transactionTypeEnum("type").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  amount: numeric("amount").notNull(),
  description: varchar("description"),

  categoryId: uuid("category_id")
    .references(() => categories.id)
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
});

export const userPassports = pgTable("user_passports", {
  id: uuid("id").primaryKey().defaultRandom(),
  hashedPassword: varchar("hashed_password"),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  passportType: passportTypeEnum("passport_type").notNull(),
});

export const tokens = pgTable("tokens", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: date("created_at").notNull().defaultNow(),
  email: varchar("email")
    .references(() => users.email, { onDelete: "cascade" })
    .notNull(),
  tokenType: tokenTypeEnum("token_type").notNull(),
  token: varchar("token").notNull(),
});

export const schema = {
  users,
  userPassports,
  tokens,
  settings,
  categories,
  transactions,
  tokenTypeEnum,
  passportTypeEnum,
  currencyEnum,
};
