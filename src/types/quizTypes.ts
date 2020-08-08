import { type } from "os";

export type questionType = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
}

export type quiz = {
    question: string,
    correctAns: string,
    incorrectAns: string[],
}