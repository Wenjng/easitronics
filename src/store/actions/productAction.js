const createProduct = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('products').add({
            ...product,
            imageUrl: 'tobeadded',
            inStock: false
        }).then(() => {
            dispatch({type: 'CREATE_PRODUCT', product})
        })
        dispatch({type: 'CREATE_PRODUCT', product: product});
    }
}

export default createProduct