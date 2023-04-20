import React,{useState,useEffect}  from 'react'
import { Link,useParams} from 'react-router-dom'
import {Row , Col , Image , ListGroup , Card , Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


const ProductScreen = () => {

const [product, setProduct]= useState({})
const {id}= useParams();

useEffect(()=>{

  const fetchProduct=async()=>{
    const res= await axios.get(`/api/product/${id}`)
    setProduct(res.data)
  }
  fetchProduct()

},[id])



// fetching from frontend
// const {id}= useParams();
// const product = products.find(p => p._id === (id))



  return(
    <>
   <Link className='btn btn-dark my-3'> Go Back</Link>
   <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid></Image>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
                Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
                Description: {product.description}
            </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup className='text-center' variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col><strong>${product.price}</strong></Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock>0 ? 'In Stock' : 'Out Of Stock'}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='btn-block ' type='button' disabled={product.countInStock===0}>
                Add To Cart
              </Button>

            </ListGroup.Item>

          </ListGroup>

        </Card>
      </Col>

   </Row>
   </>
  )
}

export default ProductScreen