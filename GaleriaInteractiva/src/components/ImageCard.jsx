import { memo, useContext, forwardRef } from 'react'
import { ImageSizeContext } from '../contexts/ImageSizeContext'

const ImageCard = memo(forwardRef(({ image, onLike, isActive }, ref) => {
    const { imageSize } = useContext(ImageSizeContext);

    return (
        <>
            <li ref={ref}>
                <button className="like button" onClick={() => onLike(image.id)}><p className='heart'>{image.liked ? "❤️" : "♡"}</p></button>
                <img className={`${imageSize} ${isActive ? 'active' : ''}`} src={image.src} alt={image.alt}/>
            </li>
        </>
    );
}));

export default ImageCard