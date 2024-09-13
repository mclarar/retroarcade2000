import './Snake.module.scss';

type SnakeProps = {
  snake: number[][];
};

export function Snake ({ snake }: SnakeProps) {
  return (
    <>
      {snake.map((segment, index) => (
        <div
          key={index}
          className="snake-segment"
          style={{ left: `${segment[0] * 20}px`, top: `${segment[1] * 20}px` }}
        />
      ))}
    </>
  );
};

