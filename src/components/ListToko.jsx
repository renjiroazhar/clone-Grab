import React, { Component } from 'react'
import { Grid, Image, Container, Button, Icon, Menu, Label } from 'semantic-ui-react'
import { WhiteSpace } from 'antd-mobile';
import './image.css'
import { Link } from 'react-router-dom'



export default class Lista extends Component {
    state = {
        food: [{
            image: 'http://www.dapurkobe.co.id/wp-content/uploads/ayam-goreng-pedas.jpg',
            judul: 'Ayam Geprek',
            harga: 8000

        },
        {
            image: 'https://news.ralali.com/wp-content/uploads/2018/07/ayam-geprek.jpg',
            judul: 'Ayam usus',
            harga: 4000
        },
        {
            image: 'https://news.ralali.com/wp-content/uploads/2018/07/ayam-geprek.jpg',
            judul: 'Ayam usus',
            harga: 4000
        },
        {
            image: 'https://news.ralali.com/wp-content/uploads/2018/07/ayam-geprek.jpg',
            judul: 'Ayam usus',
            harga: 4000
        }]

    }
    render() {
        return (
            <div>
                <div>
                    <WhiteSpace />
                    <Container>

                        {this.state.food.map(datum => {
                            return (
                                <div>
                                    <Grid>
                                        <Grid.Column width={5}>
                                            <Image src={datum.image} />
                                        </Grid.Column>
                                        <Grid.Column width={11}>
                                            <p>{datum.judul}</p>

                                            <p>Harga :{datum.harga} </p>

                                            <Link to="/makanan"><Button content='Lihat' primary /></Link>
                                        </Grid.Column>
                                    </Grid>
                                </div>

                            )
                        })}
                        <WhiteSpace />
                        <Button color='green'>Beli</Button>


                    </Container>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
}




