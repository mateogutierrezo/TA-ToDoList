const ControlPanel = ({totalLikes, onSizeChange, onStart, onStop}) => {
    return (
        <div className="panel">
            <p>Liked photos: {totalLikes}</p>
            <div className="sizes">
                <p>Image size</p>
                <button onClick={() => onSizeChange("small")}>small</button>
                <button onClick={() => onSizeChange("medium")}>medium</button>
                <button onClick={() => onSizeChange("large")}>large</button>
            </div>
            <div className="animation-controllers">
                <p>Animation</p>
                <button className="play" onClick={() => onStart()}>Play</button>
                <button className="play" onClick={() => onStop()}>Stop</button>
            </div>
        </div>
    )
}

export default ControlPanel