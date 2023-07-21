import { collection, getDocs, query } from "firebase/firestore";
import { TBL_PRODUCT } from "../../utility/Constant";
import { db } from "../../config/Firebase";
import { setProductList } from "./ProductSlice";
import { toast } from "react-toastify";

export const fetchAllProduct = () => async (dispatch) => {
  try {
    //read all data from TBL_CATEGORY
    const q = query(collection(db, TBL_PRODUCT));
    const productSnap = await getDocs(q);
    // console.log(productSnap);
    const productList = [];
    productSnap.forEach((item) => {
      const slug = item.id;
      const data = item.data();
      productList.push({ ...data, slug });
    });
    dispatch(setProductList(productList));
    // console.log(productList);
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
};
