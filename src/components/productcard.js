import { Card, Col, Row } from 'antd';
import { Button, Radio } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import './product.css'
import {addProduct} from '../features/shop/productSlice'
import Shop from './shop';

const ProductCard=()=>{
    const items = useSelector(state => state.product.items)
    const dispatch = useDispatch()
    
return(
  <div className="site-card-wrapper , productcard">
      
    <Row gutter={16}>
    {items.map(item =>  {
        return(
        <Col span={8}>
        <Card className='card' title={item.title} bordered={false} key={item.id}>
          <img src={item.img}/>
          <div>price: {item.price}</div><br/>
          <span>description: {item.desc}</span>
          <div className='buybtn'><Button className='primary' type="primary" value={item.id} onClick={e => dispatch(addProduct(item.id))}>buy now</Button><Button type="dashed">
          Dashed
        </Button></div>
        </Card>
      </Col>)})}
    </Row>
  </div>
);
}
export default ProductCard;