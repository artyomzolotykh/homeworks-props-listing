import Item from "./Item";

const Listing = ({items}) => {
  return (
    <div className="item-list">
      {items.map(item => item.state === 'active' ? <Item key={item.listing_id} item={item} /> : null)}
    </div>
  )
}

Listing.defaultProps = {
  items: []
};

export default Listing;