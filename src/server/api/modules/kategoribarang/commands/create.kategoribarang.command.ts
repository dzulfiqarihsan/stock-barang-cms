import { Command } from "@/server/api/base/base.command";
import { type kategoriBarangInput } from "@/server/api/inputs/kategoriBarang.input";
import { type Prisma } from "@prisma/client";
import { KategoribarangDbAdapter } from "../adapter/kategoribarang.db.adapter";

export class CreateKategoriBarangCommand extends Command {
  protected readonly repository = new KategoribarangDbAdapter(this.ctx);

  async execute(input: typeof kategoriBarangInput.create._output) {
    const createArgs: Prisma.KategoriBarangCreateArgs = {
      data: {
        // isi disini
        nama_kategori: input.nama_kategori,
      },
    };

    return await this.repository.create(createArgs);
  }
}
