import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // if item is empty
    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      package: false,
    };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trips?</h3>

        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Your item name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
