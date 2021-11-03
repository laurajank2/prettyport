import React from 'react';
import { AccomplishmentsData } from "./accomplishmentsData";
import "./../styles/projects.css";

function Accomplishments() {
    return (
        <div className="background">
            <h1 className="header">Accomplishments</h1>
            {AccomplishmentsData.map((item, index) => {
              return (
                
                <li key={index} className={item.headerCName}>
                    <h2 className='small-title'>{item.title}</h2>
                    <div className="row">
                      <div className="column">
                        <p>{item.date}</p>
                        <ul>
                          <li>{item.info}</li>
                        </ul>
                      </div>
                      <div className="column">
                        <img src={item.image} width="100%" alt={item.imgAlt}></img>
                      </div>
                    </div>
                </li>
              );
            })}
        </div>
    )
}

export default Accomplishments;

