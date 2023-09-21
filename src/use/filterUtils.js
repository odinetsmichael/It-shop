import { productsConst } from '../constants/productPageConst';
import { products } from '../store/front-end-data.json';
import {ref} from 'vue'

export let specificationFilter = ref("---");
export let typeFilter = ref("---");


export let productFilter = function() {

    function getFilterData () {
        
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

    function setFilterData (filterName, filterValue) {
        if (filterName == 'specification'){
            specificationFilter.value = filterValue;
        }
        else if (filterName == 'type'){
            typeFilter.value = filterValue;
        }
    }

    return {
        getFilterData : getFilterData,
        setFilterData : setFilterData,
    };
}();
