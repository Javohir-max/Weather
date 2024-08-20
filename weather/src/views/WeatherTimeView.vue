<template>
    <div>
        <h1 class="text-center">WeatherTime</h1>
        <!-- <h2 class="text-center">{{ weather.city.name }}</h2> -->
        <div v-if="weather" class="d-flex flex-wrap gap-4 justify-content-center">
            <div class="card" v-for="(item , index) in weather.list" :key="index">
                <h3 class="text-center text-dark">{{ item.dt_txt.substring(0, item.dt_txt.length - 3) }}</h3>
                <hr>
                <h2 class="text-center text-light">{{ Math.round(item.main.temp - 273.15) }}&deg;c</h2>
                <p class="text-center fs-5 text-dark">{{ item.weather[0]['main'] }}</p>
                <hr>
                <div class="">
                    <p class="text-center fs-5 text-dark">Cloudy</p>
                    <h2 class="text-center text-light"><img src="../components/Images/water.svg" alt=""> {{ item.clouds.all }}%</h2>
                </div>
                <hr>
                <div class="text-center">
                    <img :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`" alt="Weather icon">
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-center">Loading...</p>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

let props = defineProps(['id']);
let weather = ref(null);



const weatherData = async () => {
    try {
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${props.id}&appid=4e4e9dfd554d3675f1539c40d511bfee`);
        let data = res.data
        weather.value = data;
        console.log(weather.value);
        
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

onMounted(weatherData);
</script>

<style scoped>
.card {
    width: 200px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    box-shadow: 0 0 10px black;
    padding: 5px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
}
hr {
    border: 1px solid gray;
    border-radius: 50px;
}

</style>
