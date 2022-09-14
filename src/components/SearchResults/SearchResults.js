import { useEffect, useState } from "react";
import cls from './SearchResults.module.css'

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomReviews = () => getRandomNumber(5, 100);
const getRandomStars = () => Math.random() + getRandomNumber(3, 4);

const Result = ({
  date,
  featured,
  description,
  href,
  merchant,
  price,
  img,
  title,
}) => {
  return (
    <div className={cls.results_page}>
      <div className={cls.results_card_conatiner}>
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls.card}>
          <img
            width="100"
            height="100"
            src={img}
            alt="product img"
          />
          <h2>{title} &rarr;</h2>
        </a>
      </div>
    </div>
  );
};

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("/api/offers")
      .then((res) => res.json())
      .then(setSearchResults);
  }, []);

  return (
    <div className={cls.wrapper}>
      {searchResults.map((result) => (
        <Result key={result.id} {...result} />
      ))}
    </div>
  );
}