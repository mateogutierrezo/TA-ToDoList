import { useCallback, useContext, useMemo, useState, useRef, useEffect } from "react"
import ControlPanel from "./ControlPanel"
import ImageCard from "./ImageCard"
import { ImageSizeContext } from '../contexts/ImageSizeContext'
import imagesData from '../assets/images_data.json' with { type: 'json' }

const Gallery = () => {
    const [images, setImages] = useState(imagesData);

    const { setImageSize } = useContext(ImageSizeContext);

    const [isActive, setIsActive] = useState(false);
    const [index, setIndex] = useState(-1);
    const intervalIdRef = useRef(null);
    const actualImageRef = useRef(null)

    const handleLike = useCallback((id) => {
        setImages(prev => prev.map(image => image.id === id ? { ...image, liked: !image.liked } : image));
    }, [])

    const totalLikes = useMemo(() => {
        return images.filter(image => image.liked === true).length;
    }, [images])

    const hendleSize = (size) => {
        switch (size) {
            case "small":
                setImageSize("small");
                break;
            case "medium":
                setImageSize("medium");
                break;
            case "large":
                setImageSize("large");
                break;
        }
    }

    const startCarousel = () => {
        if (!isActive) {
            setIsActive(true);
            intervalIdRef.current = setInterval(() => {
                setIndex(prev => (prev + 1) % images.length);
            }, 1000);
        }
    }

    useEffect(() => {
        if (actualImageRef.current) {
            actualImageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }, [index]);

    const stopCarousel = () => {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
        setIsActive(false)
    }

    return (
        <>
            <ul>{images.map((image, i) => (
                    <ImageCard key={image.id} image={image} onLike={handleLike} ref={index === i ? actualImageRef : null} isActive={index === i}/>
            ))}
            </ul>
            <ControlPanel totalLikes={totalLikes} onSizeChange={hendleSize} onStart={startCarousel} onStop={stopCarousel}/>
        </>
    )
}

export default Gallery