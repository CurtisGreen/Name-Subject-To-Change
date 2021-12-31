export default function RandomKanjiButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: "30px",
        backgroundColor: "var(--theme-color)",
        border: "none",
        padding: "10px",
        borderRadius: "var(--border-radius)",
        cursor: "pointer",
      }}
    >
      Random Kanji
    </button>
  );
}
