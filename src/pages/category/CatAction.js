import { toast } from "react-toastify";
import { setCatList } from "./CatSlice";
import { TBL_CATEGOR } from "../../utility/Constant";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/Firebase";

export const fetchAllCategories = () => async (dispatch) => {
  try {
    //read all data from TBL_CATEGORY
    const q = query(collection(db, TBL_CATEGOR));
    const catSnap = await getDocs(q);
    console.log(catSnap);
    const catList = [];
    catSnap.forEach((item) => {
      const slug = item.id;
      const data = item.data();
      catList.push({ ...data, slug });
    });
    dispatch(setCatList(catList));
    // console.log(catList);
  } catch (error) {
    toast.error(error.message);
  }
};
