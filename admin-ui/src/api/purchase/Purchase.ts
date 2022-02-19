import { Benefit } from "../benefit/Benefit";
import { Customer } from "../customer/Customer";

export type Purchase = {
  amount: number;
  benefit?: Benefit;
  createdAt: Date;
  customer?: Customer;
  date: Date;
  id: string;
  updatedAt: Date;
};
