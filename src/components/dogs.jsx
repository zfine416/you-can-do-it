import React, { Component } from "react";
import Dog from "./common/dog";
import Filter from "./filter";

class Dogs extends Component {
  render() {
    const {
      breeds,
      getImage,
      sizes,
      temperaments,
      sizeSort,
      handleTemperaments,
      selectedSizes,
      selectedTemperaments
    } = this.props;
    return (
      <div className="row">
        <div className="col-3">
          <Filter
            categories={sizes}
            title="Dog Size"
            sort={sizeSort}
            selectedItems={selectedSizes}
          />
          <Filter
            categories={temperaments}
            title="Dog Temperaments"
            sort={handleTemperaments}
            selectedItems={selectedTemperaments}
          />
        </div>
        <div className="flex flex-wrap space-evenly dog-list">
          {breeds.map(breed => (
            <Dog
              key={breed.id}
              breed={breed}
              image={() => getImage(breed.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Dogs;
