import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Link to='/'><Icon name="backward" /></Link>}
                    onLeftClick={() => console.log("onLeftClick")}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
                        <Icon key="1" name="shop" />

                    ]}>
                    NavBar
        </NavBar>

            </div>
        );
    }
}
