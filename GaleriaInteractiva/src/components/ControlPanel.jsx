const ControlPanel = ({totalLikes, onSizeChange}) => {
    return (
        <div className="panel">
            <p>Liked photos: {totalLikes}</p>
            <div className="sizes">
                <p>Image size</p>
                <button onClick={() => onSizeChange("small")}>small</button>
                <button onClick={() => onSizeChange("medium")}>medium</button>
                <button onClick={() => onSizeChange("large")}>large</button>
            </div>
            <button className="play">Play animation</button>
        </div>
    )
}

export default ControlPanel