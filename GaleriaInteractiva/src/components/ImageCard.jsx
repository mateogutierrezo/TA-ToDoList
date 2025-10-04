import { memo, useContext } from 'react'
import { ImageSizeContext } from '../contexts/ImageSizeContext'

const ImageCard = memo(({ image, onLike }) => {
    const { imageSize } = useContext(ImageSizeContext);

    return (
        <>
            <li>
                <button className="like button" onClick={() => onLike(image.id)}><p className='heart'>{image.liked ? "❤️" : "♡"}</p></button>
                <img className={imageSize} src={image.src} alt={image.alt}/>
            </li>
        </>
    )
})

export default ImageCard