export default function Button({ onClick, loading }) {
  return (
    <div className="convert-button-container">
      <button
        className="convert-button"
        onClick={onClick}
        disabled={loading}
        onTouchStart={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {" "}
        {loading ? "Converting..." : "Convert"}
      </button>
    </div>
  );
}
