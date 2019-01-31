import React, { Component } from "react";
import axios from "axios";
import NavBar from "./components/navbar";
import Dogs from "./components/dogs";
import Loading from "./components/common/loading";
import { getTemperaments, getBreedSizes } from "./services/categories";
import { getMissingPhotos } from "./services/missingPhotos";
import {
  filterSize,
  getAllPhotos,
  objArrSearch,
  filterTemperaments
} from "./utils/helpers";
import "./App.css";

class App extends Component {
  state = {
    breeds: [],
    photos: [],
    missingPhotos: [],
    temperaments: [],
    sizes: [],
    selectedSizes: [],
    selectedTemperaments: []
  };
  async componentDidMount() {
    const { data: breeds } = await axios("https://api.TheDogAPI.com/v1/breeds");
    const photosArr = await getAllPhotos();
    const photos = await Promise.all(photosArr).then(res => res);
    this.setState({
      breeds,
      photos,
      temperaments: getTemperaments(),
      sizes: getBreedSizes(),
      missingPhotos: getMissingPhotos()
    });
  }
  getImage = id => {
    const { photos, missingPhotos } = this.state;
    if (photos[id - 1].data.length) {
      return photos[id - 1].data[0].url;
    } else {
      return missingPhotos.filter(breed => breed.id === id)[0].url;
    }
  };
  handleSize = size => {
    //check if it already exist
    const selectedSizes = [...this.state.selectedSizes];
    const index = selectedSizes
      .map(function(x) {
        return x.name;
      })
      .indexOf(size.name);
    objArrSearch(size.name, selectedSizes)
      ? selectedSizes.splice(index, 1)
      : selectedSizes.push(size);
    this.setState({ selectedSizes });
  };
  handleTemperaments = temperament => {
    const selectedTemperaments = [...this.state.selectedTemperaments];
    const index = selectedTemperaments
      .map(function(x) {
        return x.name;
      })
      .indexOf(temperament.name);
    objArrSearch(temperament.name, selectedTemperaments)
      ? selectedTemperaments.splice(index, 1)
      : selectedTemperaments.push(temperament);
    this.setState({ selectedTemperaments });
  };
  updateData = () => {
    const { breeds, selectedSizes, selectedTemperaments } = this.state;
    let filtered = [...breeds];
    //neither selected
    if (!selectedSizes.length && !selectedTemperaments.length) return filtered;
    // filter by size
    filtered = selectedSizes.length
      ? filterSize(filtered, selectedSizes)
      : filtered;
    // filter by temperament
    filtered = filterTemperaments(filtered, selectedTemperaments);

    return filtered;
  };
  render() {
    const {
      selectedSizes,
      selectedTemperaments,
      photos,
      sizes,
      temperaments
    } = this.state;
    const filtered = this.updateData();
    return (
      <div>
        <NavBar />
        {photos.length ? (
          <Dogs
            breeds={filtered}
            getImage={this.getImage}
            sizes={sizes}
            temperaments={temperaments}
            sizeSort={this.handleSize}
            selectedSizes={selectedSizes}
            selectedTemperaments={selectedTemperaments}
            handleTemperaments={this.handleTemperaments}
          />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
