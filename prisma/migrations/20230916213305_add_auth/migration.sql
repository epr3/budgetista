-- CreateEnum
CREATE TYPE "PASSPORT_TYPE" AS ENUM ('PASSWORD', 'GOOGLE');

-- CreateEnum
CREATE TYPE "TOKEN_TYPE" AS ENUM ('VALIDATION', 'RESET_PASSWORD');

-- CreateTable
CREATE TABLE "user_passports" (
    "id" TEXT NOT NULL,
    "password" TEXT,
    "user_id" TEXT NOT NULL,
    "passport_type" "PASSPORT_TYPE" NOT NULL,

    CONSTRAINT "user_passports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "token_type" "TOKEN_TYPE" NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tokens_email_key" ON "tokens"("email");

-- AddForeignKey
ALTER TABLE "user_passports" ADD CONSTRAINT "user_passports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;
