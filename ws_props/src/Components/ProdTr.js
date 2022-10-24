import Button from 'react-bootstrap/Button';
export const ProductTr=({prod,handleClickp})=>{
  const{title,price,image,category}=prod
    return(
        <tr>
           <td><Button onClick={()=>handleClickp(title)}>Click here</Button></td>
           <td>{title}</td>
           <td><img src={image} width="50px"/> </td>
           <td>{category}</td>
           <td>{price}</td>
        </tr>
    )
}