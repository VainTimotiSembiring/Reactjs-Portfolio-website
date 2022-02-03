import React from 'react';
import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductItem,
  ProductButton
} from './ProductsElements';

const Products = ({heading, data}) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((product, index) => {
            return (
              <ProductCard key={index}>
                 <ProductImg src={product.img} alt={product.alt}/>
                 <ProductInfo>
                   <ProductTitle>{product.name}</ProductTitle>
                   <ProductDesc>{product.desc}</ProductDesc>
                   <ProductItem>{product.item}</ProductItem>
                   <ProductButton>{product.button}</ProductButton>
                 </ProductInfo>
                 
              </ProductCard>
            )
              
            
          

        })} 
      
      </ProductsWrapper>
    </ProductsContainer>
 )

}

export default Products;
