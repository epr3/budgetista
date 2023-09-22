import { relations, sql } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";

import { real, sqliteTable, text } from "drizzle-orm/sqlite-core";

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

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$default(() => createId()),
  nickname: text("nickname").notNull(),
  email: text("email").notNull().unique(),
  verifiedAt: text("verified_at"),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const settings = sqliteTable("settings", {
  id: text("id")
    .primaryKey()
    .$default(() => createId()),
  currency: text("currency", { enum: [Currency.RON, Currency.EUR, Currency.USD] }),
  userId: text("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
});

export const categories = sqliteTable("categories", {
  id: text("id")
    .primaryKey()
    .$default(() => createId()),
  icon: text("icon"),
  name: text("name").notNull(),
  userId: text("user_id")
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

export const transactions = sqliteTable("transactions", {
  id: text("id")
    .primaryKey()
    .$default(() => createId()),
  type: text("type", { enum: [TransactionType.INCOME, TransactionType.EXPENSE] }).notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  amount: real("amount").notNull(),
  description: text("description"),

  categoryId: text("category_id")
    .references(() => categories.id)
    .notNull(),
  userId: text("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
});

export const userPassports = sqliteTable("user_passports", {
  id: text("id")
    .primaryKey()
    .$default(() => createId()),
  hashedPassword: text("hashed_password"),
  userId: text("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  passportType: text("passport_type", {
    enum: [PassportType.PASSWORD, PassportType.GOOGLE],
  }).notNull(),
});

export const tokens = sqliteTable("tokens", {
  id: text("id")
    .primaryKey()
    .$default(() => createId()),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_DATE`),
  email: text("email")
    .references(() => users.email, { onDelete: "cascade" })
    .notNull(),
  tokenType: text("token_type", {
    enum: [TokenType.VALIDATION, TokenType.RESET_PASSWORD],
  }).notNull(),
  token: text("token").notNull(),
});

export const schema = {
  users,
  userPassports,
  tokens,
  settings,
  categories,
  transactions,
};
