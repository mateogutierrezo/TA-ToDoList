import { useCallback, useContext, useMemo, useState } from "react"
import ControlPanel from "./ControlPanel"
import ImageCard from "./ImageCard"
import { ImageSizeContext } from '../contexts/ImageSizeContext'

const Gallery = () => {
    let imagesArray = [
        {
            id: 1,
            title: "Burger",
            src: "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1749310239&s=463b18fc3bb51dc5d96e866c848527c4",
            alt: "Burger picture",
            liked: false
        },
        {
            id: 2,
            title: "Pizza",
            src: "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
            alt: "Pizza picture",
            liked: false
        },
        {   
            id: 3,
            title: "Salad",
            src: "https://www.tasteofhome.com/wp-content/uploads/2025/02/Favorite-Mediterranean-Salad_EXPS_TOHcom25_41556_MD_P2_02_05_1b.jpg",
            alt: "Salad picture",
            liked: false
        }
    ]

    const [images, setImages] = useState(imagesArray);

    const { setImageSize } = useContext(ImageSizeContext);

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

    return (
        <>
            <ul>{images.map((image) => (
                    <ImageCard key={image.id} image={image} onLike={handleLike}/>
            ))}
            </ul>
            <ControlPanel totalLikes={totalLikes} onSizeChange={hendleSize}/>
        </>
    )
}

export default Gallery