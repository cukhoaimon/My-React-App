export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>⭐ Start adding some items ⭐</em>
      </footer>
    );

  const packed = items.filter((item) => item.packed).length;
  const numberOfItems = items.length;
  const percentage = Math.round((packed * 100) / numberOfItems);

  return (
    <footer className="stats">
      <em>
        {packed === numberOfItems
          ? "You got everything to go 🛩️"
          : `You have ${numberOfItems} items in your list and you own ${packed} (${percentage}%) items.`}
      </em>
    </footer>
  );
}
