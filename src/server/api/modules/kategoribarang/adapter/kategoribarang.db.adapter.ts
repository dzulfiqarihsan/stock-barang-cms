import { DbAdapter } from "@/server/api/base/base.prisma.db.adapter";
import { type Prisma } from "@prisma/client";

export class KategoribarangDbAdapter extends DbAdapter {
  async create(data: Prisma.KategoriBarangCreateArgs) {
    return await this.ctx.prisma.kategoriBarang.create(data);
  }

  async update(data: Prisma.KategoriBarangUpdateArgs) {
    return await this.ctx.prisma.kategoriBarang.update(data);
  }

  async delete(data: Prisma.KategoriBarangDeleteArgs) {
    return await this.ctx.prisma.kategoriBarang.delete(data);
  }

  async findMany<T extends Prisma.KategoriBarangFindManyArgs>(
    data: Prisma.SelectSubset<T, Prisma.KategoriBarangFindManyArgs>
  ) {
    return await this.ctx.prisma.kategoriBarang.findMany<T>(data);
  }

  async findFirstOrThrow<T extends Prisma.KategoriBarangFindFirstOrThrowArgs>(
    data: Prisma.SelectSubset<T, Prisma.KategoriBarangFindFirstOrThrowArgs>
  ) {
    return await this.ctx.prisma.kategoriBarang.findFirstOrThrow<T>(data);
  }

  async count(data: Prisma.KategoriBarangCountArgs) {
    return await this.ctx.prisma.kategoriBarang.count(data);
  }
}
