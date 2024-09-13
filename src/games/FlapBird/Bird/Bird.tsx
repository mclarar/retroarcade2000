
interface BirdPosition {
    x: number;
    y: number;
}

interface BirdProps {
    birdPosition: BirdPosition;
}

export function Bird({ birdPosition }:BirdProps) {
    return (
        <img
            src={"https://media.geeksforgeeks.org/wp-content/uploads/20231211115925/flappy_bird_by_jubaaj_d93bpnj.gif"}
            alt="bird"
            className="bird"
            style={{
                left: `${birdPosition.x}px`,
                top: `${birdPosition.y}px`,
                position: 'absolute',
            }}
            draggable={true}
        />
    );
};

export default Bird;
