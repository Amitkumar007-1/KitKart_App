const FakeStoreApi = {
  getAllProducts: async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    return result;
  },
  getProductById: async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await res.json();

    return result;
  },
  getProductByQuery: async (query) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    const prod = result.filter((product) =>
      product?.title?.toLowerCase()?.includes(query)
    );
    return prod;
  }
};
export { FakeStoreApi };
