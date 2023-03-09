import React from "react";
import "./faq.css";
import Accordion from "../accordion/Accordion";
import { questions } from "../accordion/data";
import { useState } from "react";

const Faq = () => {
    const [data] = useState(questions)
  
  return (
    <div className="container">
      <h1 className="faq-title">faqs</h1>
      <div className="faqs">
        {data.map((item) => 
        <Accordion key={item.id} question={item.question} answer={item.answer}/>
        )}     
       {/*  {question.map((item) => (
          <div className="faq" key={item.id}>
            <div className="faq-content">
              <div className="faq-question">
                <p>{item.question}</p>
              </div>
              <div
              className="faq-button"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? (
                <div className="faq-minus">-</div>
              ) : (
                <div className="faq-plus">+</div>
              )}
            </div>
            </div>
            {show && (
                <div className="faq-answer">
                    <p>{item.answer}</p>
                </div>
                 
                
              )}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Faq;
