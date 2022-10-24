import Table from 'react-bootstrap/Table';
import { ProductTr } from './ProdTr';
export const ProductTable=({list,handleClick})=>{
    return(
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Product image</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {list.map(produit=><ProductTr prod={produit} key={produit.id} handleClickp={handleClick}/>

        )}
      </tbody>
    </Table>
        </div>
    )
}