import React, { Component } from 'react'
import { connect } from 'react-redux'
import createProduct from '../../store/actions/productAction'

class CreateProduct extends Component {
    state = {
        title: '',
        category: '',
        desc: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProduct(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h5 className="grey-text text-darken-3">Create Product</h5>
                    <div className="input-field">
                      <label htmlFor="title">Title</label>
                      <textarea className="materialize-textarea" id="title" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                      <label htmlFor="category">Category</label>
                      <textarea className="materialize-textarea" id="category" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                      <label htmlFor="desc">Description</label>
                      <textarea className="materialize-textarea" id="desc" onChange={this.handleChange}></textarea>
                    </div>
                   <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (product) => dispatch(createProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(CreateProduct)