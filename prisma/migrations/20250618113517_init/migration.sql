/*
  Warnings:

  - You are about to drop the column `apellidos` on the `Solicitud` table. All the data in the column will be lost.
  - Added the required column `apellido` to the `Solicitud` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Solicitud" DROP COLUMN "apellidos",
ADD COLUMN     "apellido" TEXT NOT NULL;
