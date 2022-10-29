import React, { useState } from 'react'
import '../Project1/Style.css';

import {data1} from '../Project1/data1';

const ReactProject1 = () => {

  const [members, setMembers] = useState(data1)

  const removeItem = (id) => {
    let newMembers = members.filter((person) => person.id !== id);
    setMembers(newMembers);
  };
  return (
    <>
      <main>
        <section className='container'>
          <h1 className='heading'>
            5 birthdays today"
          </h1>
          <article className='person'>
            {
              members.map((person) => {
                const { id, name, age, img } = person;
                return (
                  <div key={id} className='div'>
                    <img src={img} alt='' style={{width:'50%'}}/>
                    <h1>{name}</h1>
                    <h2>{age}</h2>
                    {<button className='btn' onClick={() => removeItem(id)}>Remove Item</button>}
                  </div>
                )
              })
            }
            <button style={{ marginTop: '10px' }} onClick={() => setMembers([])}>Clear Members</button>
          </article>
        </section>
      </main>



    </>
  )
}

export default ReactProject1