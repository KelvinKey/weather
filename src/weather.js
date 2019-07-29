/**设置为严格模式*/
'use strict';

/**
 * dependence
 */
const https = require('https');
const xml2js = require('xml2js');


/**
 *  Weather.
 */
const Weather = {
    /**
     * url
     */
    url: "https://restapi.amap.com/v3/weather/weatherInfo",
    /**
     * @param string city
     * @param string format
     *
     * @return mixed|string
     */
    getLiveWeather: (city, format = 'json') => {
        return Weather.getWeather(city, 'base', format);
    },
    /**
     * @param string city
     * @param string format
     *
     * @return mixed|string
     */
    getForecastsWeather: (city, format = 'json') => {
        return Weather.getWeather(city, 'all', format);
    },
    /**
     * @param string city
     * @param string type
     * @param string format
     *
     * @return mixed|string
     *
     * @throws HttpException
     * @throws InvalidArgumentException
     */
    getWeather: (city, type, format = 'json') => {

    }
};

//暴露接口
module.exports = Weather;