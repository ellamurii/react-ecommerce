import { useEffect, useState } from "react"
import { productsApi } from '../services/api/products';

const useFetchProducts = () => {
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsApi.get(page).then(data => setProducts(data))
    }, [page])


    return {
        products
    }
}

export default useFetchProducts;