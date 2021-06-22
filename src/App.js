import { useSelector } from 'react-redux'
import './App.css'
import Filter from './components/Header/FilterBar/Filter'
import ListHeaders from './components/Header/ListHeaders/ListHeaders'
import Title from './components/Header/TitleBar/Title'
import ProductList from './components/Product/Product'
import styled from 'styled-components'


const AppWrapper = styled.div`
margin: 0;
display: flex;
flex-direction: column;
flex: 1;
`

const App = () => {
  return (
    <AppWrapper>
      <Title />
      <Filter />
      <ListHeaders />
      <ProductList />

    </AppWrapper>
  )
}







export default App;
