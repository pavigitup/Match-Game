import {Component} from 'react'
import './index.css'

class ImagesList extends Component {
  render() {
    const {images, fruitId} = this.props
    const {id, thumbnailUrl} = images

    const selectFruit = () => {
      fruitId(id)
    }
    return (
      <li key={id}>
        <button type="button" className="img-btn" onClick={selectFruit}>
          <img src={thumbnailUrl} alt="thumbnail" className="image" />
        </button>
      </li>
    )
  }
}

export default ImagesList
