import { useCallback, useContext, useMemo, useState, useRef, useEffect } from "react"
import ControlPanel from "./ControlPanel"
import ImageCard from "./ImageCard"
import { ImageSizeContext } from '../contexts/ImageSizeContext'

const Gallery = () => {
    let imagesArray = [
        {
            id: 1,
            src: "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1749310239&s=463b18fc3bb51dc5d96e866c848527c4",
            alt: "Burger picture",
            liked: false
        },
        {
            id: 2,
            src: "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
            alt: "Pizza picture",
            liked: false
        },
        {   
            id: 3,
            src: "https://www.tasteofhome.com/wp-content/uploads/2025/02/Favorite-Mediterranean-Salad_EXPS_TOHcom25_41556_MD_P2_02_05_1b.jpg",
            alt: "Salad picture",
            liked: false
        },
        {
            id: 4,
            src: "https://hips.hearstapps.com/hmg-prod/images/tagliatelle-plato-pasta-elle-gourmet-67f36d4f59140.jpg?crop=0.669xw:1.00xh;0.150xw,0&resize=640:*",
            alt: "Pasta picture",
            liked: false
        }
    ]

    const [images, setImages] = useState(imagesArray);

    const { setImageSize } = useContext(ImageSizeContext);

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
        intervalIdRef.current = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 1000);
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