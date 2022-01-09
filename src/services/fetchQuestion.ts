import { FetchedQuestionType, DIFFICULTY } from "../types/question.type";

const shuffleArray = (arr: string[]) =>
  [...arr].sort(() => Math.random() - 0.5);

export const fetchQuestion = async (
  difficulty: DIFFICULTY,
  offset: number = 10
) => {
  const endPoint: string = `https://opentdb.com/api.php?amount=${offset}&difficulty=${difficulty}&type=multiple`;
  const fetchedQuestions = await (await fetch(endPoint)).json();

  return fetchedQuestions?.results.map(
    (fetchedQuestion: FetchedQuestionType) => ({
      ...fetchedQuestion,
      questions: shuffleArray([
        ...fetchedQuestion.incorrect_answers,
        fetchedQuestion.correct_answer,
      ]),
    })
  );
};
