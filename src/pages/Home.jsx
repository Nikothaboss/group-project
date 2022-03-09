import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import {BASE_URL} from '../utils/api'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => setData(response.data.data));
      
  }, []);

  return (
    <>
      
      <div className= "main">
        <h1>Hotelrooms</h1>
        <div className= "page">
        {data.length > 0
          ? data.map(({attributes, id}) => {
              return (
                <div key={id} className= "rooms">
                  <p>{attributes.title}</p>
                  <img src={attributes.img_url}/> 
                  <p>{attributes.number}</p>
                  <p>{attributes.description}</p>
                  <p>{attributes.room_details.details}</p>
                </div>
              )

            })
          : null}
          </div>
      </div>
    </>
  );
};

export default Home