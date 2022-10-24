import { ProductCard } from "./ProductCard";
export const ProductList=({list})=>{
    
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>{
list.map(
    prod=><ProductCard key={prod.id} produit={prod}/>
    )}
        </div>
    )
}