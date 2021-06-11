import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductBySlug } from '../../../actions';
import { generatePublicUrl } from '../../../urlConfig';
import { Link } from 'react-router-dom';
import { MaterialButton } from '../../../components/MaterialUI';

const ProductStore = (props) => {
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
    under30k: 30000,
  })

  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug));
  }, [])

  const product = useSelector(state => state.product);

  return (
    <>
      {
        Object.keys(product.productsByPrice).map((key, index) => {
          return (
            <div className="card"
              index={index}
              style={{ width: 'calc(100% - 20px)' }}
            >
              <div className="cardHeader">
                <div>{props.match.params.slug.split('-')[0]} Mobile Under ₹{priceRange[key]}</div>
                <button
                  style={{
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '2px',
                    backgroundColor: '#0099CC',
                    color: 'white'
                  }}
                >View all</button>
              </div>
              <div style={{ display: 'flex' }}>
                {
                  product.productsByPrice[key].map(product => <div className="productContainer">
                    <Link
                      to={`/${product.slug}/${product._id}/p`}
                      style={{
                        display: 'block'
                      }}
                      className="productImgContainer"
                    >
                      <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                    </Link>
                    <div className="productInfo">
                      <div
                        style={{ margin: '5px 0', fontWeight: '600' }}
                      >
                        {product.name}
                      </div>
                      <div>
                      </div>
                      <div className="productPrice">
                        ₹ {product.price}
                      </div>
                    </div>
                  </div>)
                }
              </div>
            </div>
          );
        })
      }
    </>
  )
}

export default ProductStore
