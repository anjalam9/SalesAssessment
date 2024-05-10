import React from "react";
import "./ProductDetails.css";
import { useAppSelector } from "../../store/hooks";
import DataState from "../../store/apislice";

const ProductDetails: React.FC = () => {
  const productData: DataState = useAppSelector((state) => state.product);
  const product = productData?.data;

  return (
    <div>
      <div className="productDetails">
        <div className="productCard shadow">
          <img className="image" alt="Loading..." src={product.image} />
          <div className="title">{product.title}</div>
          <div className="subtitle">{product.subtitle}</div>
          <div className="tag-box">
            {product.tags?.map((tag: any) => {
              return (
                <span key={tag} className="tags">
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
