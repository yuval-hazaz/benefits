import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ScoreCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  expirationDate?: Date | null;
  status?: "New" | "Used" | "Splitted" | null;
};
