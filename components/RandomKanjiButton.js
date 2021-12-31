export default function RandomKanjiButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: "30px",
        backgroundColor: "#e1e1e1",
        border: "none",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Random Kanji
    </button>
  );
}
