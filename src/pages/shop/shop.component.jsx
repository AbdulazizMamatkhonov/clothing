import { React, Component } from "react";
import { SHOP_DATA } from "./shop_data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.jsx";
class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((item) => {
          return (
            <CollectionPreview
              items={item.items}
              title={item.title}
              key={item.id}
            />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
