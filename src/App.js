import React from 'react';
import { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './assets/images/image.png';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

class App extends Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country })

    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                {/* <Navbar/> */}
                <img className={styles.image} src={coronaImage} alt='COVID-19' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
                {/* <Footer/> */}
            </div>
        )
    }
}

export default App;