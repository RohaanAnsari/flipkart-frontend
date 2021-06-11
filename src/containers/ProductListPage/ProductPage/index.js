import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductPage } from '../../../actions'
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/Card';
import { generatePublicUrl } from '../../../urlConfig';

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product)
  const { page } = product;

  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = { params };
    dispatch(getProductPage(payload));
  }, [])

  return (
    <div style={{ margin: '0 10px' }}>
      <h4 style={{ margin: '10px 0 ' }}>{page.title}</h4>
      <Carousel renderThumbs={() => { }} >
        {
          page.banners && page.banners.map((banner, index) =>
            <a
              style={{ display: 'block', cursor: 'pointer' }}
              key={index}
              href={banner.navigateTo}
            >
              <img src={`https://flipkartbackend.herokuapp.com${banner.img}`} alt={banner.id} />
            </a>
          )
        }
      </Carousel>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '10px 0'
        }}
      >
        {
          page.products && page.products.map((product, index) =>
            <Card
              key={index}
              style={{
                width: '400px',
                height: '200px',
                margin: '0 5px'
              }}
            >
              <img
                style={{
                  width: '100%',
                  height: '95%',
                  objectFit: 'contain',
                  padding: '5px'
                }}
                src={`https://flipkartbackend.herokuapp.com${product.img}`}
                alt=''
              />
            </Card>
          )
        }
      </div>
    </div >

  )
}

export default ProductPage
