import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export const ProductCard=({produit:{category,image,price,tiltle}})=>{
    return(
        <div>
            <Card style={{ width: '18rem' }}>
        <img  src={image} alt="" width="100px" />
        <Card.Body>
          <Card.Title>{tiltle}</Card.Title>
          <Card.Text>
          category:{category}<br/>
          {price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
           
        </div>
    ) 

    
}