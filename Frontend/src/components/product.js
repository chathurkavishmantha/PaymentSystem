import React, { Component } from 'react';
import axio from 'axios';

class product extends Component {

    constructor(props){
        super(props);

        this.state = {
            item_id: null,
            item_name: null,
            model_name: null,
            item_desc: null,
            seller: null,
            stock: null,
            unit_price: null,
            status: null
        }
    }

    componentDidMount(){
        axio.get('http://localhost:8080/api/item/find/' + this.props.match.params.item_id)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    render(){
        return(
            <div>
                <h1>product</h1>
            </div>
        )
    }
}

export default product;