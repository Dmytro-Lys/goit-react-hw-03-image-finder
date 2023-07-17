import css from './ImageGalleryItem.module.css'
import PropTypes from "prop-types"

export const ImageGalleryItem = ({dataItem, onClick }) => {
    const {webformatURL, tags, largeImageURL} = dataItem
    return(
      <li className={css.ImageGalleryItem}>
        <img className={css["ImageGalleryItem-image"]} src={webformatURL} alt={tags} onClick={() => onClick({ largeImageURL, tags })} />
      </li>
    )
}

ImageGalleryItem.propTypes = {
    dataItem: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}