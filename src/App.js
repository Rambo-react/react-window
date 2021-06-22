import { useSelector } from 'react-redux'
import './App.css'
import Filter from './components/Header/FilterBar/Filter'
import ListHeaders from './components/Header/ListHeaders/ListHeaders'
import Title from './components/Header/TitleBar/Title'
import ProductList from './components/Product/Product'
import styled from 'styled-components'


const AppWrapper = styled.div`
margin: 0;
height:100%;
`

const App = () => {

  // let totalProductCount = useSelector((state) => state.products.totalProductCount)
  
  // const isFetching = useSelector((state) => state.products.isFetching)
  //  let productsData = products.map((item)=> {
  //    return (
  //    <div key={item.id}>
  //       <div>ean_plu: {item.ean_plu} </div>
  //       <div>name: {item.name} </div>
  //       <div>producer: {item.producer} </div>
  //       <div>wt_vol_pce: {item.wt_vol_pce} </div>
  //    </div>
  //    )
  //  })
     

  return (
    <AppWrapper>
      <Title />
      <Filter />
      <ListHeaders />
      <ProductList/>
    
    </AppWrapper>
  )
}







export default App;
