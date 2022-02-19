import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ScoreWhereInput = {
  amount?: IntNullableFilter;
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "New" | "Used" | "Splitted";
};
