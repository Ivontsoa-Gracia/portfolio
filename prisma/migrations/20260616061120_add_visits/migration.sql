-- CreateTable
CREATE TABLE "ProjectVisit" (
    "id" SERIAL NOT NULL,
    "visitorId" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectVisit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProjectVisit_visitorId_idx" ON "ProjectVisit"("visitorId");

-- CreateIndex
CREATE INDEX "ProjectVisit_projectId_idx" ON "ProjectVisit"("projectId");

-- AddForeignKey
ALTER TABLE "ProjectVisit" ADD CONSTRAINT "ProjectVisit_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
