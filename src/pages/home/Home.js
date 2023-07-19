import React, { useEffect } from "react";
import DefaultLayout from "../../components/Layout/defaultLayout/DefaultLayout";
import Clearence from "../../components/card/clearence/Clearence";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../product/ProductAction";
import CategoryCard from "../../components/card/category/CategoryCard";

const Home = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    // dispatch(fetchAllCategories());
    !productList.length && dispatch(fetchAllProduct());
  }, [dispatch, productList]);
  return (
    <div>
      <DefaultLayout pageTitle={"Home page"}>
        <div>
          <Clearence />
          <CategoryCard />
        </div>
      </DefaultLayout>
    </div>
  );
};
export default Home;
