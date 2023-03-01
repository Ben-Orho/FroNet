
import React from 'react';
import { useState } from 'react';
import "./Faqs.css"

const Faqs = () => {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected == i){
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className='Faqs-container'>
        <div className='left-faqs'>
            <p>FAQS</p>
            <h1>Frequently asked questions about FroNet</h1>
            <button>see more Questions</button>
        </div>
        <div className='right-accordian'>
          <div className='accordian'>
            {data.map((item, i) => (
              <div className='item'>
                <div className='header' onClick={() => toggle(i)}>
                  <h2>{item.Question}</h2>
                  <span>{selected == i ? "-" : "+"}</span>
                </div>
                <div className={selected == i ? "answer show" : "answer"}>{item.answer}</div>
              </div>

            ))}

          </div>
        </div>
    
    </div>
  )
}
const data = [
  {
    Question: "How to register on FroNet?",
    answer: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti nobis, accusamus libero voluptas dignissimos, qui cum tempore ex fugiat pariatur ratione culpa aut ea assumenda vitae voluptates dolore quis eaque ipsum similique quod! Fugit dolorem rerum aut quae aliquid pariatur aperiam quia repellendus vel possimus, atque quaerat assumenda distinctio?"
  },
  {
    Question: "How to get FroNet to my Hostel?",
    answer:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti nobis, accusamus libero voluptas dignissimos, qui cum tempore ex fugiat pariatur ratione culpa aut ea assumenda vitae voluptates dolore quis eaque ipsum similique quod! Fugit dolorem rerum aut quae aliquid pariatur aperiam quia repellendus vel possimus, atque quaerat assumenda distinctio?"
  },
  {
    Question: "How to access unlimited data?",
    answer:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti nobis, accusamus libero voluptas dignissimos, qui cum tempore ex fugiat pariatur ratione culpa aut ea assumenda vitae voluptates dolore quis eaque ipsum similique quod! Fugit dolorem rerum aut quae aliquid pariatur aperiam quia repellendus vel possimus, atque quaerat assumenda distinctio?"
  }
]
export default Faqs