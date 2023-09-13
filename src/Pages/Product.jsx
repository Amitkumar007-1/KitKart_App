import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FakeStoreApi } from "../Services/FakeStoreApi";
import { Loader } from "../Components/Loader";
import SingleProduct from "../Components/SingleProduct";
const Product = () => {
  const { productid } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fecthProductById = async () => {
      setLoading(true);
      const product = await FakeStoreApi.getProductById(productid);
      setProduct(product);
      setLoading(false);
    };
    fecthProductById();
    fecthProductById().catch((error) => console.log(error));
  }, []);
  return <>{loading ? <Loader /> : <SingleProduct product={product} />}</>;
};
export default Product;
