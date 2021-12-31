export default function Main({ children }) {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </main>
  );
}
