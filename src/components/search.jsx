import React, { Component } from 'react'
import { SearchBar, WhiteSpace } from 'antd-mobile';

export default class search extends Component {
    render() {
        return (
            <div>
                <WhiteSpace />
                <SearchBar placeholder="Search" maxLength={8} />
                <WhiteSpace />
            </div>
        )
    }
}
