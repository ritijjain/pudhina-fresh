---
layout: post
title:  "WeatherPie Weather App"
date:   2020-07-27
tags: ['#app', '#django']
excerpt: > 
    A Django web app that delivers personalized weather forecast and suggests clothing based on the weather.
---

![An outdoor weather meter (Logarithmic Scale)](/assets/img/weather-meter.jpg){:target="_blank"}
*An outdoor weather meter. Photograph: Ralph Hutter*

Most weather apps do a decent job delivering weather conditions and the forecast but leave it up to the user to interpret them and decide what clothing in their closet might work that day. However, this can get confusing as several weather metrics like temperature, rain, snow, UVI index, wind speed, etc. have to be considered to get a full picture. When doing this for the current weather and the forecast several hours or days ahead, it can get messy rather fast.

[WeatherPie](https://weatherpie.herokuapp.com/){:target="_blank"} <i class="fa fa-external-link" aria-hidden="true"></i>, a Django web app I have developed aims to solve this problem by analyzing the weather data for the user to help them decide the appropriate clothing for the day. WeatherPie works with current weather and forecast data from the [OpenWeatherMap](https://openweathermap.org/){:target="_blank"} <i class="fa fa-external-link" aria-hidden="true"></i> API to decide what types of clothing a user might need in the near future.

Several other weather apps already exist that also serve a similar purpose, however, I found none that suggest clothing using hourly weather data. WeatherPie fills this gap and allows users to view clothing suggestions for the next several hours. WeatherPie v2.0 plans to improve this feature by adding daily clothing suggestions based on the daily weather forecast. This may come in handy when deciding what to pack for a longer trip.

WeatherPie is open source, view and download the full source code from [GitHub](https://github.com/ritijjain/weather-pie){:target="_blank"} <i class="fa fa-external-link" aria-hidden="true"></i>.