import React, { useEffect } from "react";
import DefaultLayout from "../../components/Layout/defaultLayout/DefaultLayout";
import Clearence from "../../components/card/clearence/Clearence";
import { useDispatch } from "react-redux";
import { fetchAllProduct } from "../product/ProductAction";
import CategoryCard from "../../components/card/category/CategoryCard";
import LearningCard from "../../components/card/category/LearningCard";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchAllCategories());
    dispatch(fetchAllProduct());
  }, [dispatch]);
  return (
    <div>
      <DefaultLayout pageTitle={"Home page"}>
        <div>
          <Clearence />
          <CategoryCard />
          <LearningCard />
        </div>
      </DefaultLayout>
    </div>
  );
};
export default Home;
