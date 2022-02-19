import { IntFilter } from "../../util/IntFilter";
import { BenefitWhereUniqueInput } from "../benefit/BenefitWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type PurchaseWhereInput = {
  amount?: IntFilter;
  benefit?: BenefitWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeFilter;
  id?: StringFilter;
};
