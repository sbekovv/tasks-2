import React, { useState } from "react";
import "./App.css";

export const Header = () => {
  const [Open, setOpen] = useState(false);
  const [result, setResult] = useState(0);
  const [text, setText] = useState("");

  const form = () => {
    setOpen(true);
  };

  const formHeader = () => setOpen(false);

  const headerSubmit = (e) => {
    e.preventDefault();
  };

  const minus = (event) => {
    if (result - event >= 0) {
      setResult(result - event);
      const hideDelay = 2000;
      setTimeout(() => {
        setText("");
      }, hideDelay);
    } else {
      setText("Нельзя Жайнак");
      const hideErrorDelay = 2000;
      setTimeout(() => {
        setText("");
      }, hideErrorDelay);
    }
  };

  return (
    <div className="container">
      {Open ? (
        <div className="result" onSubmit={headerSubmit}>
          <div className="result-text">
            <h1>Result:</h1>
            <span>{result}</span>
            <p>{text}</p>
            {}
          </div>
          <button className="result-btn" onClick={() => setResult(result * 5)}>
            *5
          </button>
          <button className="result-btn" onClick={() => setResult(result / 5)}>
            /5
          </button>
          <button className="result-btn" onClick={() => setResult(result + 5)}>
            +5
          </button>
          <button className="result-btn" onClick={() => minus(5)}>
            -5
          </button>
          <button className="result-btn" onClick={() => setResult(0)}>
            reset
          </button>

          <button className="result-btn" onClick={formHeader}>
            Отмена
          </button>
        </div>
      ) : (
        <div className="header-btns">
          <h1>My app</h1>
          <div className="header-list">
            <a className="header-btn">Home</a>
            <a className="header-btn">About</a>
            <a className="header-btn" onClick={form}>
              Counter
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
