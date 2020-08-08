import React, {useState, useEffect} from 'react';
import './App.css';
import Quiz from './component/quiz';
import {questionType, quiz} from './types/quizTypes';
import {apiFetch} from './services/jsfunctions';

function App() {
  let [quest, setQuest] = useState<quiz[]>([])

  useEffect(()=>{
    async function quizApi(){
        let res: quiz[] = await apiFetch()
        setQuest(res)
    }
    quizApi()
  },[])

  if(!quest.length){
    return <h1 className='loading'>Loading...</h1>
  }else{
    return (
      <div className="App">
        <Quiz quest = {quest} />
      </div>
  );
}
}

export default App;
