/*
  Warnings:

  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reason` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_paId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_reasonId_fkey";

-- DropTable
DROP TABLE "Feedback";

-- DropTable
DROP TABLE "Pa";

-- DropTable
DROP TABLE "Reason";

-- CreateTable
CREATE TABLE "feedback" (
    "id" SERIAL NOT NULL,
    "reasonId" INTEGER,
    "paId" INTEGER,
    "feedback" TEXT NOT NULL,
    "email" TEXT,
    "cpf" TEXT,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reason" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "reason_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pa" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "pa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_paId_fkey" FOREIGN KEY ("paId") REFERENCES "pa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_reasonId_fkey" FOREIGN KEY ("reasonId") REFERENCES "reason"("id") ON DELETE SET NULL ON UPDATE CASCADE;
