import { Customer } from "../customer/Customer";

export type Score = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  expirationDate: Date | null;
  id: string;
  status?: "New" | "Used" | "Splitted" | null;
  updatedAt: Date;
};
