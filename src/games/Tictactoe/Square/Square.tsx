import './Square.module.scss';

type SquareProps = {
  value: string | null;
  onClick: () => void;
};

export function Square ({ value, onClick }: SquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

