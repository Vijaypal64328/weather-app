import React from "react";
import { WiNa } from "react-icons/wi";

const ErrorCard = ({ message }) => {
  return (
    <div className="error-card">
      <WiNa size={80} color="#ff4d4d" />
      <h2>{message}</h2>
      <WiNa size={40} color="#ff4d4d" />
      <p>Please check the city name and try again.</p>
    </div>
  );
};

export default ErrorCard;
