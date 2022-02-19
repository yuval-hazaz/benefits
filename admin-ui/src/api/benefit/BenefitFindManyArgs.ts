import { BenefitWhereInput } from "./BenefitWhereInput";
import { BenefitOrderByInput } from "./BenefitOrderByInput";

export type BenefitFindManyArgs = {
  where?: BenefitWhereInput;
  orderBy?: BenefitOrderByInput;
  skip?: number;
  take?: number;
};
