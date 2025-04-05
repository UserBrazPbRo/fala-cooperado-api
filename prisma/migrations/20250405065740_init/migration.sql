-- AlterTable
ALTER TABLE "interaction" ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "interaction" ADD CONSTRAINT "interaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
