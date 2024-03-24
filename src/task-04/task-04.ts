import { Points, RPSInput, Shape, Outcome } from './models/rock-paper-scissors';

export const rockPaperScissors = (gameSet: readonly RPSInput[]): number => {
  let score = 0;
  const losePoint = Points.get(Outcome.LOOSE);
  const drawPoint = Points.get(Outcome.DRAW);
  const winPoint = Points.get(Outcome.WIN);
  const rockPoint = Points.get(Shape.ROCK);
  const paperPoint = Points.get(Shape.PAPER);
  const scissorsPoint = Points.get(Shape.SCISSORS);

  return score;
};
