import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("useEffect function");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("useffect return");
    };
  }, []);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h2>Name: {name}</h2>
      <h2>Location: Gudalur</h2>
    </div>
  );
};

export default User;
