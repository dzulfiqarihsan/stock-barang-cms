import { z } from "zod";
import { withId } from "./_base.input";
import { paginationInput } from "./_pagination.input";

export const kategoriBarangValidation = z.object({
  nama_kategori: z.string(),
});

export const kategoriBarangInput = {
  getAll: z.object(paginationInput).default({
    meta: undefined,
  }),

  create: kategoriBarangValidation,

  update: kategoriBarangValidation.merge(withId),

  delete: z.object({ id: z.number() }),

  getById: z.object({ id: z.number() }),
};
