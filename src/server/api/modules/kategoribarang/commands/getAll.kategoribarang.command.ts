import { Command } from "@/server/api/base/base.command";
import { type kategoriBarangInput } from "@/server/api/inputs/kategoriBarang.input";
import { Prisma } from "@prisma/client";
import { KategoribarangDbAdapter } from "../adapter/kategoribarang.db.adapter";

export class GetAllKategoriBarangCommand extends Command {
  protected readonly repository = new KategoribarangDbAdapter(this.ctx);

  async execute(input: typeof kategoriBarangInput.getAll._output) {
    const { page, perPage, sortKey = "id", sortDir = "asc" } = input.meta;

    const findManyArgs = Prisma.validator<Prisma.KategoriBarangFindManyArgs>()({
      skip: (page - 1) * perPage,
      take: perPage,
      orderBy: {
        [sortKey]: sortDir,
      },
    });
    const users = await this.repository.findMany(findManyArgs);
    const totalData = await this.repository.count({});

    return {
      data: users,
      page,
      perPage,
      totalData,
      totalPage: Math.ceil(totalData / perPage),
    };
  }
}
