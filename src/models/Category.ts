import { Question } from "./Question";

export interface Category {
  id: number;
  title: string;
  icon: string;
  questions: Array<Question>;
}
