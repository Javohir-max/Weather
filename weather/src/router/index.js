import { createRouter, createWebHistory } from 'vue-router'
import Weather from '../components/Weather.vue'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/assets/Weather/',
            name: 'weather',
            component: Weather
        },
        {
            path: '/weathertime/:id',
            name: 'weathertime',
            component: () =>
                import ('../components/WeatherTimeView.vue'),
            props: true

        }
    ]
})

export default router