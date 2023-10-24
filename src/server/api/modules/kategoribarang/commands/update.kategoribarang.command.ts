import { Command } from "@/server/api/base/base.command";
import { type kategoriBarangInput } from "@/server/api/inputs/kategoriBarang.input";
import { type Prisma } from "@prisma/client";
import { KategoribarangDbAdapter } from "../adapter/kategoribarang.db.adapter";

export class UpdateKategoriBarangCommand extends Command {
  protected readonly repository = new KategoribarangDbAdapter(this.ctx);

  async execute(input: typeof kategoriBarangInput.update._output) {
    const userUpdateArgs: Prisma.KategoriBarangUpdateArgs = {
      data: {
        nama_kategori: input.name,
      },
      where: {
        id: input.id,
      },
    };
    return await this.repository.update(userUpdateArgs);
  }
}
