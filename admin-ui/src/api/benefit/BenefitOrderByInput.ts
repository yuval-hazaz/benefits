import { SortOrder } from "../../util/SortOrder";

export type BenefitOrderByInput = {
  cost?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
