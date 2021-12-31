import Link from "next/link";

export default function NavBar({}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        backgroundColor: "#e1e1e1",
        padding: "10px",
      }}
    >
      <NavButton url="/">Home</NavButton>
      <NavButton url="/quiz">Quiz</NavButton>
    </div>
  );
}

function NavButton({ children, url }) {
  return (
    <div style={{ fontSize: "50px" }}>
      <Link href={url}>{children}</Link>
    </div>
  );
}
