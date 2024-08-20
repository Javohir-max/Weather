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
            path: '/weathertime/:id',
            name: 'weathertime',
            component: () =>
                import ('../views/WeatherTimeView.vue'),
            props: true

        }
    ]
})

export default router