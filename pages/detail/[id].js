import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cls from './id.module.css'

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomReviews = () => getRandomNumber(5, 100);
const getRandomStars = () => Math.random() + getRandomNumber(3, 4);

export default function Detail() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return null;

    fetch(`/api/search?id=${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return null;

  const { featured, description, href, merchant, price, img, title } = product;

  return (
    <div className={cls.deatail}>
      <div className={cls.wrapper}>
        <div className={cls.img_holder}>
          <img
            width="240"
            height="240"
            src={img}
            alt="product logo"
          />
        </div>
        <div className={cls.product_info}>
          <h3>{title}</h3>
          <p>{description}</p>
          <span>Price of Product: {price}</span>
        </div>
      </div>
    </div>
  );
}
