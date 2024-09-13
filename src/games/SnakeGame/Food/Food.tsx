import './Food.module.scss';

type FoodProps = {
  position: number[];
};

export function Food({ position }: FoodProps) {
  return (
    <div
      className="food"
      style={{ left: `${position[0] * 20}px`, top: `${position[1] * 20}px` }}
    />
  );
};


