import { Command } from "@/server/api/base/base.command";
import { type kategoriBarangInput } from "@/server/api/inputs/kategoriBarang.input";
import { type Prisma } from "@prisma/client";
import { KategoribarangDbAdapter } from "../adapter/kategoribarang.db.adapter";

export class DeleteKategoriBarangCommand extends Command {
  protected readonly repository = new KategoribarangDbAdapter(this.ctx);

  async execute(input: typeof kategoriBarangInput.delete._output) {
    const deleteArgs: Prisma.KategoriBarangDeleteArgs = {
      where: {
        id: input.id,
      },
    };
    return await this.repository.delete(deleteArgs);
  }
}
