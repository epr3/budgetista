/*
  Warnings:

  - You are about to drop the column `nickname` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `first_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_user_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "nickname",
ADD COLUMN     "first_name" TEXT NOT NULL;

-- DropTable
DROP TABLE "sessions";
