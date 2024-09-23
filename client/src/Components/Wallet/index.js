import React, { useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { useDeviceType } from "../Functions/deviceConverter";
import "./index.css";

const Wallet = () => {
    const { isMobile, isTablet, isDesktop } = useDeviceType();
  const transactions = [
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
  return (
    <div>
      <div className="wallet-topbar-container">
        <IoWalletOutline className="wallet-icon" />
        <div className="topbar-balance-container">
          <p className="total-balance">Total Balance</p>
          <p className="total-balance-rupee">₹8561.32</p>
        </div>
      </div>
      <div className={"wallet-cards-container"} style={{flexDirection: (!isTablet && !isDesktop) && "column"}}>
        <div className="wallet-card-container" style={{marginRight: (!isTablet && !isDesktop) && "10px"}}>
          <button className="add-money">+Add Money</button>
          <img
            className="wallet-card"
            alt="wallet"
            src="https://www.shutterstock.com/image-vector/presentation-bar-chart-graph-financial-260nw-1755927398.jpg"
          />
        </div>
        <div className="wallet-transaction-card">
          <h1 className="transaction-title">Transactions:</h1>
          <div className="transaction-cards">
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
      </div>
    </div>
  );
};

export default Wallet;
