-- AlterTable
ALTER TABLE "Materia" ADD COLUMN     "dayOfWeek" TEXT NOT NULL DEFAULT 'segunda',
ADD COLUMN     "dayPeriod" TEXT NOT NULL DEFAULT 'noite';
