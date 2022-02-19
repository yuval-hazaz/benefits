import { BenefitWhereUniqueInput } from "../benefit/BenefitWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PurchaseCreateInput = {
  amount: number;
  benefit: BenefitWhereUniqueInput;
  customer: CustomerWhereUniqueInput;
  date: Date;
};
