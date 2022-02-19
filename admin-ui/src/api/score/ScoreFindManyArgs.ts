import { ScoreWhereInput } from "./ScoreWhereInput";
import { ScoreOrderByInput } from "./ScoreOrderByInput";

export type ScoreFindManyArgs = {
  where?: ScoreWhereInput;
  orderBy?: ScoreOrderByInput;
  skip?: number;
  take?: number;
};
