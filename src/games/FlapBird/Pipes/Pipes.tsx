interface PipePosition {
    x: number;
    y: number;
}

interface PipesProps {
    pipePosition: PipePosition;
}

export function Pipes({ pipePosition }: PipesProps) {
    return (
        <img
            src={'https://media.geeksforgeeks.org/wp-content/uploads/20231211115753/6d2a698f31595a1.png'}
            alt="pipe"
            className="pipe"
            style={{
                left: `${pipePosition.x}px`,
                top: `${pipePosition.y}px`,
                position: 'absolute',
            }}
            draggable={true}
        />
    );
}
