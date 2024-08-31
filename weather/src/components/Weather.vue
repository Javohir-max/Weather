<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const waetherId = ['1114926','1114927','1114928','1114929','1514588','1514019','1513886','1484843','1513157','1513131','1484840','1484838',]
const weathers = ref([])
let time  = new Date(1723818156)
console.log(time);


const weatherData = async () =>{
  try{
    const res = await Promise.all(
      waetherId.map(id => axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=4e4e9dfd554d3675f1539c40d511bfee`))
    )
    weathers.value = res.map(respons => respons.data)
    console.log(weathers.value);
    
  }catch (error) {
    console.error("Error fetching weather data:", error);
  }
}


onMounted(async () =>{
  await weatherData()
})




</script>

<template>
  <header>
    <h1 class="text-center text-3xl pb-3 font-medium text-blue-100">Weather in Uzbekistan</h1>
  </header>
  <div class="w-full flex m-auto mt-[30px]">
    <div class="w-full grid grid-cols-3 gap-[20px] px-[20px] phone:grid-cols-1 phone:px-4">
      <div class="rounded-[10px] m-auto" v-for="weather in weathers" :key="weather.id">
        <RouterLink :to="{name: 'weathertime', params:{id:weather.id}}">
            <div class="w-[500px] flex flex-wrap shadow-[0_0_10px] rounded-[20px] p-3 bg-[#ffffff35] backdrop-blur-[10px] phone:w-[100%] phone:justify-between ">
              <div class="w-[300px] phone:w-[230px]">
                  <h3 class="text-[25px] mb-[30px] text-[#252525] phone:mb-[20px]">{{ weather.name }}</h3>
                  <h2 class="text-center text-[40px] text-[#5e5d5d] font-medium phone:text-[30px] phone:mb-[10px]"><i class="bi bi-thermometer-sun"></i>{{ Math.round(weather.main.temp - 273.15) }}&deg;c</h2>
                  <h3 class="text-[20px] text-black">{{ weather.weather[0]['main'] }}</h3>
              </div>
              <hr class="border border-solid border-black rounded-[10px] h-[130px] my-auto phone:h-[100px]">
              <div class="flex justify-center items-center">
                  <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" class="w-[150px] phone:w-[120px]" alt="Weather icon">
              </div>
              <div class="w-full border-t-2 border-gray-500 rounded-[2px] m-auto">
                <div class="flex justify-between pt-2 align-center">
                    <h2 class="text-black text-[20px]">Cloudy</h2>
                    <h2 class="text-black text-[20px]"><i class="bi bi-droplet me-1"></i>{{ weather.clouds.all }}%</h2>
                </div>
                <div class="flex justify-between pt-2 align-center">
                    <h2 class="text-black text-[20px]">Wind Speed</h2>
                    <h2 class="text-black text-[20px]"><i class="bi bi-wind me-1"></i>{{ Math.round(weather.wind.speed) }} m/s</h2>
                </div>
                <div class="flex justify-between pt-2 align-center">
                    <h2 class="text-black text-[20px]">Max Temp</h2>
                    <h2 class="text-black text-[20px]"><i class="bi bi-thermometer-high me-1"></i>{{ Math.round(weather.main.temp_max - 273.15) }}&deg;c</h2>
                </div>
              </div>
            </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
