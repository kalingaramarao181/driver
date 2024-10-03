import { useState } from "react";
import "./index.css"
const Payments = () => {
    const [tripStatus, setTripStatus] = useState("Settled")
    
    
    const settiledTransactions = [
        {
          transactionId: "I1234D5",
          transactionType: "Debit",
          transactionDate: "20-09-2024",
          amount: "634.74",
        },
        {
          transactionId: "GD123S45",
          transactionType: "Debit",
          transactionDate: "20-09-2024",
          amount: "374.14",
        },
        {
          transactionId: "EF123S45",
          transactionType: "Credit",
          transactionDate: "20-09-2024",
          amount: "132.00",
        },
        {
          transactionId: "HR123S45",
          transactionType: "Debit",
          transactionDate: "20-09-2024",
          amount: "284.04",
        },
        {
          transactionId: "IY123S45",
          transactionType: "Credit",
          transactionDate: "20-09-2024",
          amount: "863.54",
        },
        {
            transactionId: "I1234D5",
            transactionType: "Debit",
            transactionDate: "20-09-2024",
            amount: "634.74",
          },
          {
            transactionId: "GD123S45",
            transactionType: "Debit",
            transactionDate: "20-09-2024",
            amount: "374.14",
          },
          {
            transactionId: "EF123S45",
            transactionType: "Credit",
            transactionDate: "20-09-2024",
            amount: "132.00",
          },
          {
            transactionId: "HR123S45",
            transactionType: "Debit",
            transactionDate: "20-09-2024",
            amount: "284.04",
          },
          {
            transactionId: "IY123S45",
            transactionType: "Credit",
            transactionDate: "20-09-2024",
            amount: "863.54",
          },
      ];
      const unSettiledTransactions = [
        {
          transactionId: "I1234D5",
          transactionType: "Debit",
          transactionDate: "20-09-2024",
          amount: "634.74",
        },
        {
          transactionId: "GD123S45",
          transactionType: "Debit",
          transactionDate: "20-09-2024",
          amount: "374.14",
        },
        {
          transactionId: "EF123S45",
          transactionType: "Credit",
          transactionDate: "20-09-2024",
          amount: "132.00",
        },
        {
          transactionId: "HR123S45",
          transactionType: "Debit",
          transactionDate: "20-09-2024",
          amount: "284.04",
        },
        {
          transactionId: "IY123S45",
          transactionType: "Credit",
          transactionDate: "20-09-2024",
          amount: "863.54",
        },
        {
            transactionId: "I1234D5",
            transactionType: "Debit",
            transactionDate: "20-09-2024",
            amount: "634.74",
          },
      ];

    const tripStatusChange = (btnStatus) => {
        setTripStatus(btnStatus)
    }

    let transactions = tripStatus === "Settled" ? settiledTransactions : unSettiledTransactions
    
  return (
    <div className="duty-container">
      <div className="selected-button-container">
        <button  className={`${tripStatus === "Settled" ? "selected-button-active" : "selected-button"} available`} onClick={() => tripStatusChange("Settled")}>Settled</button>
        <button  className={`${tripStatus === "UnSettled" ? "selected-button-active" : "selected-button"} accepted`} onClick={() => tripStatusChange("UnSettled")}>Un Settled</button>
      </div>
      <div className="payments-cards-container">
          {transactions.map((eachTransaction) => (
            <div className="transaction-card">
              <div className="transaction-card-section">
                <p className="transaction-type">{eachTransaction.transactionType}</p>
                <p className="transaction-id">{eachTransaction.transactionId}</p>
              </div>
              <p className="ifen">-</p>
              <div>
                <p style={{color: eachTransaction.transactionType === "Credit" ? "green" : "#d11608"}} className="transaction-type">{eachTransaction.amount}</p>
                <p className="transaction-id">{eachTransaction.transactionDate}</p>
              </div>
            </div>
          ))}
          </div>
    </div>
  );
};

export default Payments;
