export type FetchedQuestionType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionType = FetchedQuestionType & {
  questions: string[];
};

export enum DIFFICULTY {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
