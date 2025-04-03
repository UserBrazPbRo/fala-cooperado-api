/*
  Warnings:

  - Added the required column `group` to the `reason` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reason" ADD COLUMN     "group" TEXT NOT NULL;
