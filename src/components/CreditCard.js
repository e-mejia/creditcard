import React from "react";
import "../stylesheets/CreditCard.css";

export default function CreditCard(cardInfo) {
  const { name, expiration, card_number, bank_name } = cardInfo;
  const cardNum = [];

  // To provide a space between credit card numbers, add a blank to CC # array
  for (let i = 0; i < card_number.length; i++) {
    if (i === 3 || i === 7 || i === 11) {
      cardNum.push(card_number[i]);
      i++;
      cardNum.push(" ");
      i--;
    } else {
      cardNum.push(card_number[i]);
    }
  }

  return (
    <div className="card-container">
      <h1 className="bank-name">{bank_name}</h1>
      <h2 className="card-number">{cardNum}</h2>
      <span className="small-num">1234</span>
      <div className="valid-date">
        <div className="valid-text">
          <p className="valid-wordtext">VALID</p>
          <p>THRU</p>
        </div>
        <span className="date-num">{expiration}</span>
      </div>
      <p className="holder-name">{name}</p>
    </div>
  );
}
