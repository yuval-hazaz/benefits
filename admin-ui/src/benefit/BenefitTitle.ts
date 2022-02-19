import { Benefit as TBenefit } from "../api/benefit/Benefit";

export const BENEFIT_TITLE_FIELD = "name";

export const BenefitTitle = (record: TBenefit): string => {
  return record.name || record.id;
};
