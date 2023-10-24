-- CreateTable
CREATE TABLE "NamaBarang" (
    "id" SERIAL NOT NULL,
    "nama_kategori" TEXT NOT NULL,
    "nama_barang" TEXT NOT NULL,

    CONSTRAINT "NamaBarang_pkey" PRIMARY KEY ("id")
);
