import { kategoriBarangInput } from "@/server/api/inputs/kategoriBarang.input";
import {
  createTRPCRouter,
  protectedProcedure,
  type TRPCContext,
} from "@/server/api/trpc";
import { CreateKategoriBarangCommand } from "../commands/create.kategoribarang.command";
import { DeleteKategoriBarangCommand } from "../commands/delete.kategoribarang.command";
import { GetAllKategoriBarangCommand } from "../commands/getAll.kategoribarang.command";
import { GetByIdKategoriBarangCommand } from "../commands/getById.kategoribarang.command";
import { UpdateKategoriBarangCommand } from "../commands/update.kategoribarang.command";

export class KategoriBarangController {
  routerGroup() {
    return createTRPCRouter({
      create: protectedProcedure
        .input(kategoriBarangInput.create)
        .mutation(async ({ input, ctx }) => await this.create(input, ctx)),

      update: protectedProcedure
        .input(kategoriBarangInput.update)
        .mutation(async ({ input, ctx }) => await this.update(input, ctx)),

      delete: protectedProcedure
        .input(kategoriBarangInput.delete)
        .mutation(async ({ input, ctx }) => await this.delete(input, ctx)),

      getAll: protectedProcedure
        .input(kategoriBarangInput.getAll)
        .query(async ({ input, ctx }) => await this.getAll(input, ctx)),

      getById: protectedProcedure
        .input(kategoriBarangInput.getById)
        .query(async ({ input, ctx }) => await this.getById(input, ctx)),
    });
  }

  async create(
    input: typeof kategoriBarangInput.create._output,
    ctx: TRPCContext,
  ) {
    const commandHandler = new CreateKategoriBarangCommand(ctx);

    return await commandHandler.execute(input);
  }

  async update(
    input: typeof kategoriBarangInput.update._output,
    ctx: TRPCContext,
  ) {
    const commandHandler = new UpdateKategoriBarangCommand(ctx);

    return await commandHandler.execute(input);
  }

  async delete(
    input: typeof kategoriBarangInput.delete._output,
    ctx: TRPCContext,
  ) {
    const commandHandler = new DeleteKategoriBarangCommand(ctx);

    return await commandHandler.execute(input);
  }

  async getAll(
    input: typeof kategoriBarangInput.getAll._output,
    ctx: TRPCContext,
  ) {
    const commandHandler = new GetAllKategoriBarangCommand(ctx);
    const res = await commandHandler.execute(input);

    return res;
  }

  async getById(
    input: typeof kategoriBarangInput.getById._output,
    ctx: TRPCContext,
  ) {
    const commandHandler = new GetByIdKategoriBarangCommand(ctx);

    return await commandHandler.execute(input);
  }
}
