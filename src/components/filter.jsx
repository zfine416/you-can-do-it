import React, { Component } from "react";

class Filter extends Component {
  findSize = size => {
    const { selectedItems } = this.props;
    return selectedItems.find(s => s.name === size.name);
  };
  render() {
    const { title, categories, sort } = this.props;
    return (
      <div className="flex-center">
        <strong>{title}</strong>
        <div className="btn-group-vertical flex-wrap">
          {categories.map(item => (
            <button
              key={item.name}
              className={
                this.findSize(item)
                  ? "btn btn-default active"
                  : "btn btn-default"
              }
              href={void 0}
              onClick={() => sort(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Filter;
