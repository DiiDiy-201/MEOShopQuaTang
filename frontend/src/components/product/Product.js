import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, col }) => {
  return (
    <>
      <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
        <div
          className="eg-product-carde-alpha shadow-lg "
          style={{ borderRadius: "20px" }}
        >
          <div className="eg-porduct-thumb">
            <Link to={`/product/${product._id}`}>
              {product.images ? (
                <img
                  className="card-img-top mx-auto"
                  src={product?.images[0]?.url}
                  alt="Product Img"
                  style={{ borderRadius: "15px" }}
                />
              ) : (
                ""
              )}
            </Link>
          </div>
          <div className="eg-porduct-body mt-2">
            <h5 className="eg-product-title">
              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </h5>
            <div className="eg-product-card-price">
              <ins>
                <span className="price-amount">
                  <bdi>{product.price} vnđ</bdi>
                </span>
              </ins>
            </div>

            <div className="product-card-bottom">
              <ul className="product-rating">
                <div className="ratings mt-auto">
                  <div className="rating-outer">
                    <div
                      className="rating-inner"
                      style={{ width: `${(product.ratings / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span id="no_of_reviews">
                    ({product.numOfReviews} Đánh giá)
                  </span>
                </div>
              </ul>
              <div className="product-add-btn">
                <Link to={`/product/${product._id}`}>
                  Xem chi tiết <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;