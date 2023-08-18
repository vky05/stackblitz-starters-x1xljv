import React, { useState } from 'react';
import PuzzlePiece from '../components/PuzzlePiece';
// import './PuzzleBoard.css'; // Add your styling

const PuzzleBoard = () => {
  const [completed, setCompleted] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData('text/plain');
    const dropTarget = e.target;

    // Check if the drop target is correct
    if (dropTarget.classList.contains('correct-target')) {
      dropTarget.appendChild(document.getElementById(pieceId));
      checkCompletion(); // Check if the puzzle is complete
    }
  };

  const checkCompletion = () => {
    const puzzleBoard = document.querySelector('.puzzle-board');
    const puzzlePieces = puzzleBoard.querySelectorAll('.puzzle-piece');

    // Check if all puzzle pieces are in the correct targets
    const isCompleted = Array.from(puzzlePieces).every((piece) =>
      piece.parentNode.classList.contains('correct-target')
    );

    if (isCompleted) {
      setCompleted(true);
    }
  };

  return (
    <div
      className="puzzle-board"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {/* Correct target areas */}
      <div className="correct-target"></div>
      <div className="correct-target"></div>
      <div className="correct-target"></div>

      {/* Puzzle pieces */}
      <PuzzlePiece
        imageUrl="path_to_piece_1.jpg"
        onDragStart={handleDragStart}
      />
      <PuzzlePiece
        imageUrl="path_to_piece_2.jpg"
        onDragStart={handleDragStart}
      />
      <PuzzlePiece
        imageUrl="path_to_piece_3.jpg"
        onDragStart={handleDragStart}
      />
    </div>
  );
};

export default PuzzleBoard;
