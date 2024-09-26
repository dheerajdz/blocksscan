import React from 'react';


const Feedback = () => {
  const cards = [
    {
      id: 1,  
      text: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      author: "William Shakespeare",
      name:'Hamlet'
    },
    {
      id: 2,  
      text: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      author: "William Shakespeare",
      name:'Hamlet'

    },
    {
        id: 3,  
        text: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        author: "William Shakespeare",
        name:'Hamlet'
        // height:'300px',
        // width:'250px',
  
    },
    {
        id: 4,  
        text: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        author: "William Shakespeare",
        name:'Hamlet'
  
    },
    {
        id: 5,  
        text: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        author: "William Shakespeare",
        name:'Hamlet'
  
    },
    {
        id: 6,  
        text: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        author: "William Shakespeare",
        name:'Hamlet',
  
    },
    {
        id: 7,  
        text: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        author: "William Shakespeare",
        name:'Hamlet'
  
    },
    {
        id: 8,  
        text: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        author: "William Shakespeare",
        name:'Hamlet'
  
    },
    


    // You can add more cards similarly by copying the structure
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <p>{card.text}</p>
          <div className="author">{card.author}</div>
          <div className="name">{card.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;