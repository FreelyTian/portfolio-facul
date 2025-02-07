/*
  Warnings:

  - Added the required column `professor` to the `Materia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Materia" ADD COLUMN     "professor" TEXT NOT NULL;
