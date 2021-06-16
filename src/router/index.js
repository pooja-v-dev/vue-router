import { createRouter, createWebHistory } from 'vue-router'
import Red from '../components/RedComponent.vue'
import Blue from '../components/BlueComponent.vue'
import Yellow from '../components/YellowComponent.vue'
import Green from '../components/GreenComponent.vue'


const routes = [{
        path: '/red',
        name: 'Red',
        component: Red
    },
    {
        path: '/blue',
        name: 'Blue',
        component: Blue
    },
    {
        path: '/green',
        name: 'Green',
        component: Green
    }, {
        path: '/Yellow',
        name: 'Yellow',
        component: Yellow
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router