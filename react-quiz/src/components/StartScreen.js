function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Wellcome to The React Quiz!</h2>
      <h3>{numQuestions} question to master your React mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        Let's goooooooooo
      </button>
    </div>
  );
}

export default StartScreen;
