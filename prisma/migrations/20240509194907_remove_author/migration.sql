/*
  Warnings:

  - You are about to drop the column `authorId` on the `Materia` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Materia" DROP CONSTRAINT "Materia_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Materia" DROP COLUMN "authorId";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId";
