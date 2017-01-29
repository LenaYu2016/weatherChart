import React,{Component} from 'react';
import {connect} from 'react-redux';
import GoogleMap from '../components/google.map';
import Chart from '../components/chart';
class WeatherList extends Component{
    renderWeather(e){
       const temps=e.list.map(l=>l.main.temp);
        const pressures=e.list.map(l=>l.main.pressure);
        const humidities=e.list.map(l=>l.main.humidity);
    const {lat,lon}= e.city.coord;
        return (
            <tr key={e.city.name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
            <td>
                <Chart data={temps} color="red" units="K"/>
            </td>
                <td>
                    <Chart data={pressures} color="green"  units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="blue" units="%"/>
                </td>
            </tr>
        );
    }
    render(){

        return (

            <table className="table table-hover">
                <thead><tr>
                    <th>City</th>
                    <th>Temprature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr></thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}
function mapStateToProps({weather}){
    return {weather};
}
export default connect(mapStateToProps)(WeatherList);