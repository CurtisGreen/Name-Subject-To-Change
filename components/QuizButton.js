export default function QuizButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: "50px",
        margin: "5px",
        padding: "5px",
        backgroundColor: "var(--theme-color)",
        border: "none",
        borderRadius: "var(--border-radius)",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
