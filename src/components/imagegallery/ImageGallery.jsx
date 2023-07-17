import css from './ImageGallery.module.css'
import { ImageGalleryItem } from "../imagegalleryitem/ImageGalleryItem"
import PropTypes from "prop-types"

export const ImageGallery = ({images, onClick}) => {
    return (
        <ul className={css.ImageGallery}>
            {images.map(item => {
              return <ImageGalleryItem key={item.id} dataItem={item} onClick={onClick}/>
          })}
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}