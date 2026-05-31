import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [cart, addToCart] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>Total items: {cart.length}</div>
      <div>
        <input
          className="border"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="border pl-1 pr-1"
          onClick={() => {
            if (text.trim() === "") return;
            addToCart([...cart, { name: text, quantity: 1 }]);
            setText("");
            cart.map((item, i) => {
              i === index ? { ...item, quantity: item.quantity + 1 } : item;
            });
          }}
        >
          {" "}
          Add
        </button>
        <button className="border pl-1 pr-1" onClick={() => addToCart([])}>
          Empty
        </button>
      </div>

      <div>
        {cart.map((items, index) => (
          <div key={index}>
            <p>{items}</p>
            <p>Quantity: {count}</p>
            <div className="flex gap-1.5">
              <button
                className="border pr-1 pl-1 text-center"
                onClick={() => {
                  updateCount(0);
                  updateCount(count + 1);
                }}
              >
                Add
              </button>
              <button
                className="border pr-1 pl-1 text-center"
                onClick={() => {
                  if (count > 0) {
                    updateCount(count - 1);
                  }
                }}
              >
                Remove
              </button>
              <button
                className="border pr-1 pl-1 text-center"
                onClick={() => addToCart(cart.filter((_, i) => i !== index))}
              >
                Clear
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
