import css from "./Modal.module.css"
import PropTypes from "prop-types"

export const Modal = ({imageOptions, onClick }) => {
    const { largeImageURL, tags } = imageOptions
    return (
        <div class={css.Overlay} onClick={onClick}>
           <div class={css.Modal}>
              <img src={largeImageURL} alt={tags} />
           </div>
        </div>
    )
}

Modal.propTypes = {
    imageOptions: PropTypes.object.isRequired
}