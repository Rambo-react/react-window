import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useDispatch, useSelector } from 'react-redux';
// import './Product.css';
import styled from "styled-components";
import DropDownSelect from "../DropDownSelect/DropDownSelect";
import { changeShelf } from "../../redux/products-reducer";

const RowWrapper = styled.div`
display: flex;

`
const RowItem = styled.div`

display: flex;
flex-wrap: nowrap;
justify-content: space-between;
min-width: 100%;   
    div{
        &:nth-child(1) {
            color: red;
            flex-basis: 200px;
            padding-left: 30px;
        }
        &:nth-child(2) {
            color: gray;
            flex-basis: 300px;
        }
        &:nth-child(3) {
            color: green;
            flex-basis: 200px;
        }
        &:nth-child(4) {
            color: green;
            flex-basis: 80px;
        }
        &:nth-child(5) {
            color: green;
            flex-basis: 150px;
        }
        &:nth-child(6) {
            flex-basis: 150px;
        }
    }

`



const Row = ({ index, style }) => {

    const products = useSelector((state) => state.products.products)
    const shelfs = useSelector((state) => state.shelfs.shelfs)
    const productGroups = useSelector((state) => state.productGroups.productGroups)
    const item = products[index]

    
    return (
        <RowWrapper style={style}>
            {
                item
                    ? <RowItem>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.producer}</div>
                        <div>{item.wt_vol_pce}</div>
                        <DropDownSelect itemChange={changeShelf} productId={item.id} childId={item.shelf_id} arrayList={shelfs} />
                        <DropDownSelect itemChange={()=>{console.log('qqq')}} productId={item.id} childId={item.product_group_id} arrayList={productGroups} />
                    </RowItem>
                    : "Loading. . ."
            }
        </RowWrapper>

    )
}


const ProductList = () => {
    return (

        <AutoSizer>
            {({ height, width }) => (
                <List
                    className="List"
                    height={height}
                    itemCount={700}
                    itemSize={35}
                    width={width}
                >
                    {Row}
                </List>
            )}
        </AutoSizer>

    )
}

export default ProductList