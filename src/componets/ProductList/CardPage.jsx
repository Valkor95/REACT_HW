import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useGetProductByIdQuery} from "../../store/API/slices/fakeStoreApi.js";

const CardPage = () => {
    const {id} = useParams();

    useEffect(() => {
        if(id){
            useGetProductByIdQuery(id)
        }
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default CardPage;