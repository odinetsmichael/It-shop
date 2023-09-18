import { productsConst } from '../constants/productPageConst';
import { products } from '../store/front-end-data.json';
import {ref} from 'vue'
export let specificationFilter = ref("---");
export let typeFilter = ref("---");

export function getFilterData () {
    
    let specifications = [productsConst.FilterDefault];
    let types = [productsConst.FilterDefault];
    products.forEach((product) => {
        if(specifications.indexOf(product.specification) == -1){
            specifications.push(product.specification);
        }
        if(types.indexOf(product.type) == -1){
            types.push(product.type);
        }
    })
    return {specifications: specifications, types: types};
}

export function setFilterData (filterName, filterValue) {
    if (filterName == 'specification'){
        this.specificationFilter = filterValue;
    }
    else if (filterName == 'type'){
        this.typeFilter = filterValue;
    }
}
