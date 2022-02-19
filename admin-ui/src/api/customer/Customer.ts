import { Purchase } from "../purchase/Purchase";
import { Score } from "../score/Score";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  phone_2: string | null;
  purchases?: Array<Purchase>;
  scores?: Array<Score>;
  tz: string | null;
  updatedAt: Date;
};
