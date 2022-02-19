import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  amount?: SortOrder;
  benefitId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
