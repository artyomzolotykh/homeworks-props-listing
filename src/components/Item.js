const Item = (props) => {
  
  const {url, MainImage, title, currency_code, price, quantity} = props.item;
  const titleEdited = title.length > 50 ? title.slice(0, 50) + '...' : title;

  const getFormatPrice = () => {
    switch (currency_code) {
      case 'USD':
        return '$' + price;
      case 'EUR':
        return '€' + price;
      default:
        return price + ' ' + currency_code;
    }
  }

  const getClassQuantity = () => {
    if (quantity <= 10) {
      return 'level-low';
    } else if (quantity <= 20) {
      return 'level-medium';
    } else {
      return 'level-high';
    }
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt={title}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{titleEdited}</p>
        <p className="item-price">{getFormatPrice()}</p>
        <p className={"item-quantity " + getClassQuantity()}>{quantity} left</p>
      </div>
    </div>
  )
}

export default Item;