-- CreateEnum
CREATE TYPE "Level" AS ENUM ('easy', 'hard', 'difficult');

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "level" "Level" NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
