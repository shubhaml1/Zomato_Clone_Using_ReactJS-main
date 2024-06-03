import React from "react";
import Filters from "../common/filters";
import "./diningOut.css";
import Collection from "../common/collection";
import { restaurants } from "../../data/diningOut";
import ExploreSection from "../common/exploreSection";

const collectionList = [
  {
    id: "1",
    title: "Trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/a70d7021ee58db56864d1edd46d838c8_1692557361.png",
    places: "12 places",
  },
  {
    id: "2",
    title: "Unique Dining experience",
    cover:
      "https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places: "9 places",
  },
  {
    id: "3",
    title: "8 insta worthy places",
    cover:
      "https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png",
    places: "8 places",
  },
  {
    id: "4",
    title: "Romantic Candle night Dinner",
    cover:
      "https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg",
    places: "14 places",
  },
  {
    id: "5",
    title: "Celibrity Owned Places",
    cover:
      "https://b.zmtcdn.com/data/collections/b283b7b84679debdb6275be02fdd76b5_1674569878.jpg",
    places: "7 places",
  },
  {
    id: "6",
    title: "Serene Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
    places: "12 places",
  },
  {
    id: "7",
    title: "Newly opened places",
    cover:
      "https://b.zmtcdn.com/data/collections/a247de0031551d916cbce6a8401c501f_1674569722.jpg",
    places: "18 places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const diningList = restaurants;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection list={diningList} collectionName="Dine-out Restaurants in Lucknow" />
    </div>
  );
};

export default DiningOut;
