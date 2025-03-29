import { useState } from "react";

export default function Bolar() {
  const [bolles, setBolles] = useState(0);
  const [sixes, setSixes] = useState(0);
  const handleBoll = () => {
    const updatedBoll = bolles + 1;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setBolles(updatedBoll);
  };

  const scoreStyle = {
    border: "2px solid red",
  };
  return (
    <div style={scoreStyle}>
      <h3>Bolars: Bangla Bolars</h3>
      <p>
        <small>Six: {sixes}</small>
      </p>
      {bolles > 6 && <p>Over ses: 6</p>}
      <h2>Score: {bolles}</h2>
      <button onClick={handleBoll}>Boll</button>
    </div>
  );
}
