/*
  Warnings:

  - The required column `code` was added to the `feedback` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "feedback" ADD COLUMN     "code" TEXT NOT NULL;
