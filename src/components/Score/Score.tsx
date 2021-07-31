import * as React from 'react';

interface IProps {
  score: number,
  count: number
}

const Score: React.FC<IProps> = ({ score, count }) => {

  const format_score = score.toString(10).padStart(2, '0');
  const format_count = count.toString(10).padStart(2, '0');

  return (
    <p className="score">
      <strong className="score__strong">{format_score}</strong>/{format_count}
    </p>
  )
}

export default Score;