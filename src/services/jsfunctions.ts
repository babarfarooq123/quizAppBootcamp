import {questionType, quiz} from './../types/quizTypes';

const shuffleArray = (array: string[])=>
    [...array].sort(()=>Math.random() - 0.5)

export let apiFetch = async ():Promise<quiz[]> =>{
    let data = await fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
    let {results} = await data.json()
    return results.map((r1:questionType)=>{
        return {
            question: r1.question,
            correctAns: r1.correct_answer,
            incorrectAns: shuffleArray(r1.incorrect_answers.concat(r1.correct_answer))
        }
    })
}