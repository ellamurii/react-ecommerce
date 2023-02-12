import APP from "../../config/App";
import { formatDateRelative } from "./utils/dateFormats";
import { formatMoney } from './utils/numberFormats';

const PATH = 'products';

const get = async (page = 1, sort = 'price', limit = 50) => {
    const result = await fetch(`${APP.API_URI}/${PATH}?_page=${page}&_limit=${limit}&_sort=${sort}`)
        .then((response) => response.json())
        .then((data) => data?.map((product) => ({
            ...product,
            priceFormatted: formatMoney(product.price),
            dateRelative: formatDateRelative(product.date),
        })));

    return result;
};

export const productsApi = {
    get,
};