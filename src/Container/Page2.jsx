import React, { Component } from 'react'
import Caraousel from '../components/Caraousel';
import Search from '../components/search';
import List from '../components/ListToko';

export default class Page2 extends Component {
    render() {
        return (
            <div>
                <Search />
                <Caraousel />
                <List />
            </div>
        )
    }
}
