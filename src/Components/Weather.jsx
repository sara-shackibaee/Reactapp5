import React, { Component } from 'react'
import axios from 'axios'
import  WeatherResult   from './WeatherResult'
let API_KEY= '6996d703b28a7dbc637dce6f6e11f0fa'
export default class Weather extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             temp :'',
             temp_min:'',
             temp_max:'',
             city_name:this.props.name,
             icon_id:'',
             description:'',
             icon:'',
             icon_url:'',
             imageSrc:''

        }
    }
    

    componentDidMount=()=>{
        console.log("helloooooo")
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city_name}&appid=${API_KEY}`).then((res)=>
            {this.setState({
                temp:res.data.main.temp,
                temp_min:res.data.main.temp_min,
                temp_max:res.data.main.temp_max,
                description:res.data.weather[0].description,
                imageSrc:'http://openweathermap.org/img/w/'+ res.data.weather[0].icon  + '.png'
                
                
                
                
            })}
            
            );
    }
    render() {
        return (
            <div>
                <WeatherResult  name={this.state.city_name}  temp={this.state.temp}  maxtemp={this.state.temp_max}  mintemp={this.state.temp_min}  des={this.state.description} image={this.state.imageSrc} />
            </div>
        )
    }
}
