import React, { useEffect } from 'react';
import {
    useGetProductsQuery,
    useLazyGetProductsByCategoryQuery
} from "../store/API/slices/fakeStoreApi.js";
import {useParams} from "react-router-dom";
import LoadingIndicator from "../componets/ProductList/LoadingIndicator.jsx";
import NoProductsMessage from "../componets/ProductList/NoProductsMesssage.jsx";
import ProductGrid from "../componets/ProductList/ProductGrid.jsx";

const ProductList = () => {
    const {categoriesName} = useParams();
    const {data: allProducts, isLoading: isLoadingAllProducts} = useGetProductsQuery();
    const [getProductsByCategory, { data: categoryProducts, isLoading: isLoadingCategoryProducts }] = useLazyGetProductsByCategoryQuery()

    useEffect(() => {
        if(categoriesName){
            getProductsByCategory(categoriesName)
        }
    }, [categoriesName]);

    if(isLoadingAllProducts || isLoadingCategoryProducts) return <LoadingIndicator/>
    const productsToDisplay = categoriesName ? categoryProducts : allProducts;
    if (!productsToDisplay) {
        return <NoProductsMessage/>;
    }

    return  (
        <ProductGrid products={productsToDisplay}/>
    );
};

export default ProductList;
