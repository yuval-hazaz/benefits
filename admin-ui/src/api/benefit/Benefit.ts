import { Purchase } from "../purchase/Purchase";

export type Benefit = {
  cost: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  purchases?: Array<Purchase>;
  updatedAt: Date;
};
