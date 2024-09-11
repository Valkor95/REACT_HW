import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useGetProductByIdQuery} from "../../store/API/slices/fakeStoreApi.js";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/slices/cartCount.js";
import LoadingIndicator from "./LoadingIndicator.jsx";
import NoProductsMessage from "./NoProductsMesssage.jsx";

const CardPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const {data:product, isLoading, isError} = useGetProductByIdQuery()

    const handleAddToCart = () => {
        dispatch(addToCart({id: product.id}));
    };

    if(isLoading) return <LoadingIndicator/>
    if (isError)  return <NoProductsMessage/>;

    return (
        <div>
            
        </div>
    );
};

export default CardPage;