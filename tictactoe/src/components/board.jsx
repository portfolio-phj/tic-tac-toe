import Square from "./square";
import "../css/board.css";

function Board() {
  return (
    <div id="board-background">
      <div className="board-line">
        <Square value={1}></Square>
        <Square value={2}></Square>
        <Square value={3}></Square>
      </div>
      <div className="board-line">
        <Square value={4}></Square>
        <Square value={5}></Square>
        <Square value={6}></Square>
      </div>
      <div className="board-line">
        <Square value={7}></Square>
        <Square value={8}></Square>
        <Square value={9}></Square>
      </div>
    </div>
  );
}

export default Board;
