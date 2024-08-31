import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'weather',
            component: () =>
                import ('../components/Weather.vue')
        },
        {
            path: '/https://javohir-max.github.io/assets/Weather',
            name: 'weather',
            component: () =>
                import ('../components/Weather.vue')
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