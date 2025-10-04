import './App.css'
import Gallery from './components/Gallery'
import { ImageSizeProvider } from './contexts/ImageSizeContext'

function App() {
    return (
        <>
            <ImageSizeProvider>
                <Gallery/>
            </ImageSizeProvider>
        </>
    )
}

export default App
