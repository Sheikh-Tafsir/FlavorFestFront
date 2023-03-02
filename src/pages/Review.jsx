import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import "../css pages/Review.css"

const Review = () => {
  return (
    <div className="review">
        <h1>They all love our food</h1>
        <p>Good food is not only delicious, but it is also essential for our physical and mental well-being. It provides us with the necessary nutrients, energy, and satisfaction to keep us going throughout the day.</p>
        <div className="reviewCardBar">
            <div className="reviewCard">
                <img src="https://i.pinimg.com/originals/08/b8/0f/08b80f4e96b53bf8b4420b179a098519.jpg"></img>
                <h3>Tafsir Rahman</h3>
                <p> all aspects of the projects were followed steps by step and with good results.</p>
            </div>
            <div className="reviewCard">
                <img src="https://i.pinimg.com/originals/08/b8/0f/08b80f4e96b53bf8b4420b179a098519.jpg"></img>
                <h3>Arafat Bin Amin</h3>
                <p>all aspects of the projects were followed steps by step and with good results.</p>
            </div>
            <div className="reviewCard">
                <img src="https://i.pinimg.com/originals/08/b8/0f/08b80f4e96b53bf8b4420b179a098519.jpg"></img>
                <h3>Salman Sajid</h3>
                <p>all aspects of the projects were followed steps by step and with good results.</p>
            </div>
        </div>
    </div>
  )
}

export default Review