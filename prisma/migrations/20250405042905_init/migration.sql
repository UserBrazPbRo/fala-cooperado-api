/*
  Warnings:

  - You are about to drop the column `response` on the `feedback` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "feedback" DROP COLUMN "response",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "paId" INTEGER;

-- CreateTable
CREATE TABLE "interaction" (
    "id" SERIAL NOT NULL,
    "interaction" TEXT NOT NULL,
    "feedbackId" INTEGER,

    CONSTRAINT "interaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "interaction" ADD CONSTRAINT "interaction_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "feedback"("id") ON DELETE SET NULL ON UPDATE CASCADE;
