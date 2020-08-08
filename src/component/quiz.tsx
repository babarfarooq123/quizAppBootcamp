import React, {useEffect, useState} from 'react';
import {apiFetch} from './../services/jsfunctions';
import {questionType, quiz} from './../types/quizTypes';

let c: number = 0
let d: number = 0
let enteredValue: string = ''
let correctCount: number = 0
function Quiz(Props:{quest:quiz[]}){
    let [ele, setEle] = useState<quiz>(Props.quest[0])
    
    function handler(e:any){
        e.preventDefault()
        console.log(Props.quest[c].correctAns,  enteredValue)
        if(Props.quest[c].correctAns == enteredValue){
            correctCount++
            console.log(correctCount)
        }
        
        c++
        if(c === Props.quest.length){
            d = 1
        }
        setEle(Props.quest[c])
        console.log(e)
        enteredValue = ''
    }

    if(d === 1){
        
        return <div>
            <h1 className='resultHeading'>Quiz Done</h1>
            <div className='resultMain'>
                <div className='result'>
                    <h2>You Scored</h2>
                    <h2>{correctCount}</h2>
                </div>
            </div>
        </div>
    }else{
        console.log(Props.quest)
        
        return(
            <div className='quizMain'>
                <div className='quiz'>
                    <h3>{ele.question}</h3>
                    <form onSubmit={handler}>
                        {
                            ele.incorrectAns.map((opt:string,index:number)=>{
                                return <div className='opt'>
                                    <label key={opt}>
                                    <input onChange={(e)=>{
                                        enteredValue = e.target.value
                                    }} type='radio' name='opt' value={opt} />
                                    {opt}
                                </label>
                                <br />
                                </div>
                            })
                        }
                        <br />
                        <button className='quizBtn' type='submit' >Next</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Quiz