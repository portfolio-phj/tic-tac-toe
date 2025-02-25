import "../css/board.css";
import { useState } from "react";

function Board() {
  const [OXlist, setOXlist] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isOX, setisOX] = useState(true);
  const [winnername, setwinnername] = useState("");

  function handleclick(i) {
    if (OXlist[i]) return;

    let copyOXlist = [...OXlist];

    if (isOX) {
      copyOXlist[i] = "O";
    } else {
      copyOXlist[i] = "X";
    }
    console.log("list:", copyOXlist);
    console.log("OX:", isOX);
    setOXlist(copyOXlist);
    setisOX(!isOX);

    Whowinner(copyOXlist);
  }

  function Whowinner(board) {
    const winnerlist = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winnerlist) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setwinnername(`WINNER: ${board[a]}`);
        setTimeout(() => {
          location.reload(true);
        }, 5000);
      }
    }
  }

  return (
    <div id="board-background">
      <p id="board-title">TIC-TAC-TOE</p>
      <p id="winnername">{winnername}</p>
      <div id="board-back">
        <div className="board-line">
          <button className="square" onClick={() => handleclick(0)}>
            {OXlist[0]}
          </button>
          <button className="square" onClick={() => handleclick(1)}>
            {OXlist[1]}
          </button>
          <button className="square" onClick={() => handleclick(2)}>
            {OXlist[2]}
          </button>
        </div>
        <div className="board-line">
          <button className="square" onClick={() => handleclick(3)}>
            {OXlist[3]}
          </button>
          <button className="square" onClick={() => handleclick(4)}>
            {OXlist[4]}
          </button>
          <button className="square" onClick={() => handleclick(5)}>
            {OXlist[5]}
          </button>
        </div>
        <div className="board-line">
          <button className="square" onClick={() => handleclick(6)}>
            {OXlist[6]}
          </button>
          <button className="square" onClick={() => handleclick(7)}>
            {OXlist[7]}
          </button>
          <button className="square" onClick={() => handleclick(8)}>
            {OXlist[8]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
