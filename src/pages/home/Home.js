import React, { useEffect } from "react";
import DefaultLayout from "../../components/Layout/defaultLayout/DefaultLayout";
import Hero from "../../components/card/clearence/Hero";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../product/ProductAction";
import CategoryCard from "../../components/card/category/CategoryCard";
import Carousel from "../../components/Layout/carousel/Carousel";
import { fetchAllCategories } from "../category/CatAction";

const Home = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { catSlice } = useSelector((state) => state.category);
  useEffect(() => {
    // dispatch(fetchAllCategories());
    !productList.length && dispatch(fetchAllProduct());
    !catSlice.length && dispatch(fetchAllCategories());
  }, [dispatch, productList, catSlice]);
  return (
    <div>
      <DefaultLayout pageTitle={"Home page"}>
        <div>
          <Hero />
          <Carousel />
          <CategoryCard />
        </div>
      </DefaultLayout>
    </div>
  );
};
export default Home;
