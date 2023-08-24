import { useState } from "react";

export default function TextExpander({
  collapseNumWord = 10,
  buttonColor = "blue",
  expandButtonText = "Show Text",
  collapseButtonText = "Collapse Text",
  children,
}) {
  const displayText =
    children.split(" ").slice(0, collapseNumWord).join(" ") + " ...";

  const [isFullText, setFullText] = useState(false);

  const btnStyle = {
    color: buttonColor,
  };

  return (
    <div className="TextExpander">
      <p>
        {isFullText ? children : displayText}
        <button onClick={() => setFullText(!isFullText)} style={btnStyle}>
          {isFullText ? collapseButtonText : expandButtonText}
        </button>
      </p>
    </div>
  );
}
