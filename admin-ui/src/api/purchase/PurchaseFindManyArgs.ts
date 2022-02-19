import { PurchaseWhereInput } from "./PurchaseWhereInput";
import { PurchaseOrderByInput } from "./PurchaseOrderByInput";

export type PurchaseFindManyArgs = {
  where?: PurchaseWhereInput;
  orderBy?: PurchaseOrderByInput;
  skip?: number;
  take?: number;
};
