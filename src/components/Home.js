import React, { useContext, useEffect, useState } from 'react'
import Cards from './Cards'
import Banner from './Banner'
import Popular from './Popular'
import axios from 'axios'
import AppContext from '../services/AppContext'

const Home = () => {

  const [state, setState] = useContext(AppContext);
  const [fruits, setFruits] = useState([]);
  const [Vegetables, setVegetables] = useState([]);


  const fetchProducts = () => {
   /* axios.get("http://localhost:1337/api/freshcarts").then((res) => {
      let products = res.data.data;
      categorizeProducts(products);
      setState([...state, products]);
    });*/


  };
  const categorizeProducts = (products) => {
    let tempFruits = [];
    let tempVegetables = [];
    for (let product of products) {
      if(product.type === "fruits" && product.popular === 1) {
        tempFruits.push(product);
      }
      if(product.type === "vegetables" && product.popular === 1) {
        tempVegetables.push(product);
      }
    }
    setFruits(tempFruits);
    setVegetables(tempVegetables);
  }

  useEffect(() => {
    if (state.products.length === 0){
      fetchProducts();
    } else {
      categorizeProducts(state.products);
    }   
  }, []);

  return (
   <>
   <Banner />
   <Cards /> 
   <Popular title="Popular Fruits" items={fruits} />
   <Popular title="Popular Vegetables" items={Vegetables} />
   </> 
  )
}

export default Home