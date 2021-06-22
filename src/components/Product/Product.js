import * as React from "react"
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useDispatch, useSelector } from 'react-redux';
// import './Product.css';
import styled from "styled-components";
import DropDownSelect from "../DropDownSelect/DropDownSelect";
import { changeProductGroup, changeShelf } from "../../redux/products-reducer";

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
            flex-basis: 200px;
            padding-left: 30px;
        }
        &:nth-child(2) {
            flex-basis: 300px;
        }
        &:nth-child(3) {
            flex-basis: 200px;
        }
        &:nth-child(4) {
            flex-basis: 80px;
        }
        &:nth-child(5) {
            flex-basis: 150px;
        }
        &:nth-child(6) {
            flex-basis: 150px;
        }
    }

`

const TableWrapper = styled.div`
flex: 1;
`

const Row = ({ index, style }) => {
    const dispatch = useDispatch()
    const filterValue = useSelector((state) => state.filter);
    const products = useSelector((state) => state.products.products)
    const filteredProducts = React.useMemo(() => products.filter((product) => product.name.includes(filterValue)), [products, filterValue])
    const item = filteredProducts[index]
    const shelfs = useSelector((state) => state.shelfs.shelfs)
    const productGroups = useSelector((state) => state.productGroups.productGroups)

    const handleShelfChange = (productId, shelf_id) => {
        dispatch(changeShelf(productId, shelf_id));
    };

    const handleGroupChange = (productId, groupId) => {
        dispatch(changeProductGroup(productId, groupId));
    };

    return (
        <RowWrapper style={style} key={`row-${item && item.id || -1}`}>
            <RowItem>
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.producer}</div>
                <div>{item.wt_vol_pce}</div>
                <DropDownSelect itemChange={handleShelfChange} productId={item.id} childId={item.shelf_id} arrayList={shelfs} />
                <DropDownSelect itemChange={handleGroupChange} productId={item.id} childId={item.product_group_id} arrayList={productGroups} />
            </RowItem>
        </RowWrapper>

    )
}


const ProductList = () => {
    const productsCount = useSelector((state) => state.products.products.filter((products) => products.name.includes(state.filter)).length)
    return (
        <TableWrapper>
            <AutoSizer onResize={(size) => console.log(size)} >
                {({ height, width }) => (
                    <List
                        className="List"
                        height={height}
                        itemCount={productsCount}
                        itemSize={35}
                        width={width}
                    >
                        {Row}
                    </List>
                )}
            </AutoSizer>
        </TableWrapper>
    )
}

export default ProductList