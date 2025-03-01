import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title";
import ProductItem from "../ProductItem";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);
  

  useEffect(() => {
    setLatestProduct(products.slice(-10))
  }, [products])

  return (
    <div className="my-10">
      <div className="text-center py-10 text-3xl">
        <Title text1={"LASTEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
          molestiae aperiam optio cupiditate, commodi quia delectus
          reprehenderit voluptate nihil eius quo distinctio, deserunt nulla
          architecto possimus. Autem ullam porro quo?
        </p>
      </div>

      {/* Render Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProduct.map((product, index) => (
            <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price} />
          ))
        }
      </div>
    </div>
  );
}

export default LatestCollection;
