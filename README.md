<h1 align="center"> Weather </h1>

<p align="center"> :rainbow: 基于高德开放平台的 NODE 天气信息组件。 </p>


## 配置

在使用本扩展之前，你需要去 [高德开放平台](https://lbs.amap.com/dev/id/newuser) 注册账号，然后创建应用，获取应用的 API Key。



## 使用

```node
const weather = require('./weather');
```

### 获取实时天气

```node
response = weather.getLiveWeather('上海');
```

示例：

```json
{
	"status": "1",
	"count": "1",
	"info": "OK",
	"infocode": "10000",
	"lives": [{
		"province": "上海",
		"city": "上海市",
		"adcode": "310000",
		"weather": "阴",
		"temperature": "36",
		"winddirection": "东",
		"windpower": "≤3",
		"humidity": "52",
		"reporttime": "2019-07-30 16:17:55"
	}]
}
```

### 获取天气预报

```node
response = weather.getForecastsWeather('上海', 'json');
```

示例：

```json
{
	"status": "1",
	"count": "1",
	"info": "OK",
	"infocode": "10000",
	"forecasts": [{
		"city": "上海市",
		"adcode": "310000",
		"province": "上海",
		"reporttime": "2019-07-30 16:17:56",
		"casts": [{
			"date": "2019-07-30",
			"week": "2",
			"dayweather": "阴",
			"nightweather": "多云",
			"daytemp": "37",
			"nighttemp": "29",
			"daywind": "南",
			"nightwind": "南",
			"daypower": "4",
			"nightpower": "4"
		}, {
			"date": "2019-07-31",
			"week": "3",
			"dayweather": "多云",
			"nightweather": "多云",
			"daytemp": "36",
			"nighttemp": "28",
			"daywind": "南",
			"nightwind": "南",
			"daypower": "5",
			"nightpower": "5"
		}, {
			"date": "2019-08-01",
			"week": "4",
			"dayweather": "多云",
			"nightweather": "多云",
			"daytemp": "35",
			"nighttemp": "28",
			"daywind": "南",
			"nightwind": "南",
			"daypower": "5",
			"nightpower": "5"
		}, {
			"date": "2019-08-02",
			"week": "5",
			"dayweather": "晴",
			"nightweather": "多云",
			"daytemp": "34",
			"nighttemp": "28",
			"daywind": "东南",
			"nightwind": "东南",
			"daypower": "4",
			"nightpower": "4"
		}]
	}]
}

### 获取 XML 格式返回值

第三个参数为返回值类型，可选 `json` 与 `xml`，默认 `json` ：

```node
response = weather.getLiveWeather('上海', 'xml');
```

示例：

```xml
<?xml version="1.0" encoding="utf-8"?>
<response> 
  <status>1</status>  
  <count>1</count>  
  <info>OK</info>  
  <infocode>10000</infocode>  
  <lives type="list"> 
    <live> 
      <province>上海</province>  
      <city>上海市</city>  
      <adcode>310000</adcode>  
      <weather>阴</weather>  
      <temperature>36</temperature>  
      <winddirection>东</winddirection>  
      <windpower>≤3</windpower>  
      <humidity>52</humidity>  
      <reporttime>2019-07-30 16:17:55</reporttime> 
    </live> 
  </lives> 
</response>


## 参考

```
 [高德开放平台](https://lbs.amap.com/dev/id/newuser)

```
## License

MIT