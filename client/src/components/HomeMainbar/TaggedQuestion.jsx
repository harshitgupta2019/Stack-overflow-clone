import React, { useState } from "react";
import "./HomeMainbar.css";
import { useSelector } from "react-redux";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import Questions from "./Questions";
const TaggedQuestion = () => {
  const { tag } = useParams();
  const [count, setCount] = useState(0);
  const questionsList = useSelector((state) => state.questionsReducer);
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  //  const q=questionsList.data.map((question) =>
  //  question.questionTags
  //    .filter((q) => q === tag));
  // q=questionsList.data.map((question) =>question.questionTags.filter((q) => q === tag));
  const checkAuth = () => {
    if (user === null) {
      console.log(questionsList);
      alert("login or signup to ask a question");
      navigate('/Auth');
    } else {
      navigate('/AskQuestion');
    }
  };
  let c=0;
  for(let i=0;i<questionsList.data.length;i++)
  {
    for(let j=0;j<questionsList.data[i].questionTags.length;j++)
    {
        if(questionsList.data[i].questionTags[j]===tag)
        c++;
    }
  }
  // console.log(questionsList) 
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        <h1>Question Tagged [{tag}]</h1>

        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        <p>{c} questions</p>
        
          {
           
          questionsList.data.map((question) =>
            question.questionTags
              .filter((q) => q === tag)
               .map(() => (
                  
                 <Questions question={question} />
                  
             ))     
          )  
         }
      </div>
    </div>
  );
};

export default TaggedQuestion;
