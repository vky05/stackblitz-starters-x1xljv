import React from 'react';
import '../components/PuzzlePiece.css'; // Add your styling

const PuzzlePiece = ({ imageUrl, onDragStart }) => {
  return (
    <img
      src={imageUrl}
      alt="Puzzle Piece"
      draggable="true"
      onDragStart={onDragStart}
    />
  );
};

export default PuzzlePiece;
