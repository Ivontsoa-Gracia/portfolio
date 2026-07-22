-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isSelected" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "metric1" TEXT,
ADD COLUMN     "metric2" TEXT;
