import { useEffect, useState, version } from "react";
import { FakeStoreApi } from "../Services/FakeStoreApi";
import { Loader } from "../Components/Loader";
import { useSearchParams } from "react-router-dom";
import Item from "../Components/Item";
import NotFound from "./NotFound";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Query, setQuery] = useSearchParams();
  const searchQuery = Query.get("q");
  useEffect(() => {
    const fetchproducts = async () => {
      setLoading(true);
      const products =
        searchQuery != null
          ? await FakeStoreApi?.getProductByQuery(searchQuery)
          : await FakeStoreApi?.getAllProducts();

      setproducts(products);
      setLoading(false);
    };
    fetchproducts();
    fetchproducts().catch(console.error);
  }, [searchQuery]);

  return (
    <div
      style={{
        backgroundColor: "#bdc3c7",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px"
      }}
    >
      {loading == true && searchQuery == null ? (
        <Loader />
      ) : products.length > 0 ? (
        products.map((product, index) => {
          return <Item key={index} product={product} />;
        })
      ) : (
        <div>
          <NotFound />
        </div>
      )}
    </div>
  );
};
export default Products;
