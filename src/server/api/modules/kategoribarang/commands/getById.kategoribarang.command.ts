import { Command } from "@/server/api/base/base.command";
import { type kategoriBarangInput } from "@/server/api/inputs/kategoriBarang.input";
import { Prisma } from "@prisma/client";
import { KategoribarangDbAdapter } from "../adapter/kategoribarang.db.adapter";

export class GetByIdKategoriBarangCommand extends Command {
  protected readonly repository = new KategoribarangDbAdapter(this.ctx);

  async execute(input: typeof kategoriBarangInput.getById._output) {
    const findFirstOrThrowArgs =
      Prisma.validator<Prisma.KategoriBarangFindFirstOrThrowArgs>()({
        where: {
          id: input.id,
        },
      });

    return await this.repository.findFirstOrThrow(findFirstOrThrowArgs);
  }
}
