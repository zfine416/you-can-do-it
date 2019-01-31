const extraBreeds = [{
  id: 21,
  name: "Australian Cattle Dog",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06142213/day_3_dec_15_043.jpg"
}, {
  id: 32,
  name: "Bearded Collie",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000849/Bearded-Collie-On-White-03.jpg"
}, {
  id: 50,
  name: "Border Collie",
  url: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Border-Collie-2.jpg"
}, {
  id: 61,
  name: "Bull Terrier",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12230801/Miniature-Bull-Terrier-On-White-01.jpg"
}, {
  id: 76,
  name: "Chesapeake Bay Retriever",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234759/Chesapeake-Bay-Retriever-On-White-03.jpg"
}, {
  id: 86,
  name: "Cocker Spaniel",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/16105011/English-Cocker-Spaniel-Slide03.jpg"
}, {
  id: 111,
  name: "Finnish Spitz",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12233256/Finnish-Spitz-On-White-01.jpg"
}, {
  id: 145,
  name: "Kooikerhondje",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12210847/Nederlandse-Kooikerhondje-Puppy-MP.jpg"
}, {
  id: 212,
  name: "Saint Bernard",
  url: "https://vetstreet-brightspot.s3.amazonaws.com/e5/b4/ca8e2af94c3883e042c1f610fec4/saint-bernard-ap-1fjqfu-645-x-380.jpg"
}, {
  id: 213,
  name: "Saluki",
  url: "https://images.dog.ceo/breeds/saluki/n02091831_4626.jpg"
}, {
  id: 222,
  name: "Shiba Inu",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224408/Shiba-Inu-On-White-03.jpg"
}, {
  id: 239,
  name: "Standard Schnauzer",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232847/Giant-Schnauzer-On-White-01.jpg"
}, {
  id: 243,
  name: "Thai Ridgeback",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12223626/Thai-Ridgeback-On-White-01.jpg"
}, {
  id: 246,
  name: "Tibetan Terrier",
  url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231104/Lhasa-Apso-On-White-01-400x267.jpg"
}];

export function getMissingPhotos() {
  return extraBreeds.filter(b => b);
}