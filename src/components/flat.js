import React from "react";
import "./flat.css";

class Flat extends React.Component {
  render() {
    const title = `${this.props.flat.name}`;
    const price = `${this.props.flat.price} ${this.props.flat.priceCurrency}`

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`,
    };

    return (
      <div className="card-flat">
        <div className="card-flat-img" style={style}></div>
        <div className="card-flat-title">
          <span className="card-flat-price">{price}</span> - {title}
        </div>
      </div>
    );
  }
}

export default Flat;
