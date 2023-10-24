/*
  Warnings:

  - Added the required column `updatedAt` to the `KategoriBarang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kategori_Id` to the `NamaBarang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `NamaBarang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "KategoriBarang" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "NamaBarang" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "kategori_Id" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "NamaBarang" ADD CONSTRAINT "NamaBarang_kategori_Id_fkey" FOREIGN KEY ("kategori_Id") REFERENCES "KategoriBarang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
