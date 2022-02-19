import { BenefitWhereUniqueInput } from "../benefit/BenefitWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PurchaseUpdateInput = {
  amount?: number;
  benefit?: BenefitWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  date?: Date;
};
