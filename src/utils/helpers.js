import _ from 'lodash';
import axios from "axios";

function findRange(selectedSizes) {
  const arr = [];
  selectedSizes.forEach(z => {
    arr.push(z.size.min);
    arr.push(z.size.max);
  });
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
};

function getAvgHeight(height) {
  const heightArr = height.split("-");
  return heightArr.length === 1 ?
    Number(heightArr[0]) :
    Number(heightArr[0]) + Number(heightArr[1]) / 2;
};

export function getAllPhotos() {
  const photos = [];
  for (let i = 1; i < 265; i++) {
    photos.push(
      axios(`https://api.TheDogAPI.com/v1/images/search?breed_id=${i}`)
    );
  }
  return photos;
};

export function objArrSearch(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
      return myArray[i];
    }
  }
}

export function filterTemperaments(filtered, selected) {
  const names = [];
  _.each(selected, function (item) {
    names.push(item.name);
  });
  return filtered.filter(a => names.every(b => {
    if (!a.temperament) a.temperament = "";
    return a.temperament.split(', ').includes(b)
  }));
}

export function filterSize(filtered, selected) {
  const {
    min,
    max
  } = findRange(selected);
  return _.filter(filtered, item => {
    const {
      metric: height
    } = item.height;
    return getAvgHeight(height) > min && getAvgHeight(height) < max;
  });
};