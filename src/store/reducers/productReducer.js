const initState = {
    products:[
        {id: '1', title: '1st product', desc: 'product 111', price: '$100'},
        {id: '2', title: '2nd product', desc: 'product 111', price: '$100'},
        {id: '3', title: '3rd product', desc: 'product 111', price: '$100'},
        {id: '4', title: '4th product', desc: 'product 111', price: '$100'},
    ]
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            console.log("created prod" + action.product);
            return state;
        case 'CREATE_PRODUCT_ERROR':
            console.log("created error" + action.err);
            return state;
        default:
            return state;
    }
}

export default productReducer