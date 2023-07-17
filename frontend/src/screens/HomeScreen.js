import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useParams } from 'react-router-dom'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const { keyword } = useParams()
  const { pageNumber } = useParams() || 1
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
    // const fetchProducts = async () => {
    //   const { data } = await axios.get('/api/products')

    //   setProducts(data)
    // }
    // fetchProducts()
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta></Meta>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          ></Paginate>
        </>
      )}
    </>
  )
}

export default HomeScreen
