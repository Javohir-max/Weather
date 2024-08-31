<template>
    <div>
        <h1 class="text-center text-3xl pb-4 font-medium">WeatherTime</h1>
        <div v-if="weather" class="flex flex-wrap gap-4 justify-center">
            <div class="w-[200px] bg-[#0000ff15] border-0 shadow-[0_0_10px] p-[5px] rounded-[20px] backdrop-blur-[12px]" v-for="(item , index) in weather.list" :key="index">
                <h3 class="text-center text-black py-4 px-4 text-xl">{{ item.dt_txt.substring(0, item.dt_txt.length - 3) }}</h3>
                <hr class="bg-black">
                <h2 class="text-center text-white py-3 text-3xl">{{ Math.round(item.main.temp - 273.15) }}&deg;c</h2>
                <p class="text-center text-[20px] text-black pb-2">{{ item.weather[0]['main'] }}</p>
                <hr class="bg-black">
                <div class="">
                    <p class="text-center text-[20px] text-black pt-1">Cloudy</p>
                    <h2 class="text-center text-blue-600 text-xl py-3"><i class="bi bi-droplet "></i> {{ item.clouds.all }}%</h2>
                </div>
                <hr class="bg-black">
                <div class="flex justify-center">
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


</style>
