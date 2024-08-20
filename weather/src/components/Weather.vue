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
    <h1 class="text-center">Weather component</h1>
  </header>
  <div class="cont">
    <div class="px">
      <div class="weather" v-for="weather in weathers" :key="weather.id">
        <RouterLink :to="{name: 'weathertime', params:{id:weather.id}}">
            <div class="weather-box">
              <div class="w-box">
                  <h3 class="w-name">{{ weather.name }}</h3>
                  <h2 class="w-c">{{ Math.round(weather.main.temp - 273.15) }}&deg;c</h2>
                  <h3 class="w-w">{{ weather.weather[0]['main'] }}</h3>
              </div>
              <hr class="hr">
              <div class="w-icon">
                  <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="Weather icon">
              </div>
              <div class="box">
                <div class="d-flex justify-content-between pt-2 align-items-center">
                    <h2 class="text-dark fs-5">Cloudy</h2>
                    <h2 class="text-dark fs-5">{{ weather.clouds.all }}%</h2>
                </div>
                <div class="d-flex justify-content-between pt-2 align-items-center">
                    <h2 class="text-dark fs-5">Wind Speed</h2>
                    <h2 class="text-dark fs-5">{{ Math.round(weather.wind.speed) }} m/s</h2>
                </div>
                <div class="d-flex justify-content-between pt-2 align-items-center">
                    <h2 class="text-dark fs-5">Max Temp</h2>
                    <h2 class="text-dark fs-5">{{ Math.round(weather.main.temp_max - 273.15) }}&deg;c</h2>
                </div>
              </div>
            </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
    width: 100%;
    border-top: 2px solid gray;
    margin: 0 auto;
}
.cont {
  width: 90%;
  display: flex;   
  margin: 30px auto;                   
}
.px {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 20px;

}
.weather {
    border-radius: 10px;
    margin: 0 auto;
}
.weather-box {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 0 10px black;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.219);
    backdrop-filter: blur(10px);
    padding: 1rem;
}
.w-box {
  width: 300px;
}
.w-name {
  font-size: 25px;
  margin: 0 0 30px;
  color:  #252525;
}
.w-c {
  text-align: center;
  font-size: 40px;
  color: rgb(94, 93, 93);
}
.w-w {
  font-size: 20px;
  color: black;
}
.w-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-icon img {
  width: 150px;
} 
.hr {
    border: 2px solid #000;
    border-radius: 10px;
}
</style>
