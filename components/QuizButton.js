export default function QuizButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ fontSize: "2rem", margin: "5px", padding: "5px" }}
    >
      {children}
    </button>
  );
}
