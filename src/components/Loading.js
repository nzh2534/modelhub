import "../App.css";

function Loading() {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span></span>
      </div>
    </div>
  );
}

export default Loading;