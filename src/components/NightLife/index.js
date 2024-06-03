import React from "react";
import "./nightLife.css";
import Filters from "../common/filters";
import Collection from "../common/collection";
import { restaurants } from "../../data/nightLife";
import ExploreSection from "../common/exploreSection";

const collectionList = [
  {
    id: "1",
    title: "21 Lit Party Places",
    cover:
      "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg",
    places: "21 places",
  },
  {
    id: "2",
    title: "Finest Micro Breweries to Visit",
    cover:
      "https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078835.jpg",
    places: "21 places",
  },
  {
    id: "5",
    title: "Celibrity Owned Places",
    cover:
      "https://b.zmtcdn.com/data/collections/b283b7b84679debdb6275be02fdd76b5_1674569878.jpg",
    places: "7 places",
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
    id: "7",
    title: "Newly opened places",
    cover:
      "https://b.zmtcdn.com/data/collections/a247de0031551d916cbce6a8401c501f_1674569722.jpg",
    places: "18 places",
  },
  {
    id: "6",
    title: "Serene Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
    places: "12 places",
  },
];

const nightFilters = [
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

const nightList = restaurants;

const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection
        list={nightList}
        collectionName="Night Life restaurants in Lucknow"
      />
    </div>
  );
};

export default NightLife;
