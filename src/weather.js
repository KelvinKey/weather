/**设置为严格模式*/
'use strict';

/**
 * dependence
 */
const https = require('https');
const util = require('util');
const querystring = require('querystring');

/**
 *  Weather.
 */
const Weather = {
    /**
     * url
     */
    url: "https://restapi.amap.com/v3/weather/weatherInfo?%s",
    /**
     * API Key
     */
    key: "xxxxxxxxxxxxxxxxxxxxxx",
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
        if (!['base', 'all'].includes(type.toLowerCase())) {
            console.error('Invalid type value(base/all):', type);
            return;
        }
        if (!['json', 'xml'].includes(format.toLowerCase())) {
            console.error('Invalid response format(json/xml):', format);
            return;
        }

        let query = querystring.stringify(
            {
                key: Weather.key,
                city: city,
                output: format.toLowerCase(),
                extensions: type.toLowerCase()
            }
        );

        let getUrl = util.format(Weather.url, query);
        
        https.get(getUrl, res => {
            const buffer = [];
            res.on('data', data => {
                buffer.push(data);
            });
            res.on('end', () => {
                let data = Buffer.concat(buffer).toString('utf-8');
                console.log("json" === format ? JSON.parse(data) : data);
            });
        }).on('error', err => {
            console.log(err);
        });

    }
};

//暴露接口
module.exports = Weather;
