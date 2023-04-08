import { createWebHashHistory, createRouter } from "vue-router";
import ContactBook from '@/views/ContactBook.vue';

const routes = [
    {
        path: '/',
        name: 'contactbook',
        component: ContactBook
    },
    {
        path: '/contacts/add',
        name: 'contact.add',
        component: () => import('@/views/ContactAdd.vue')
    },
    {
        path: '/contacts/:id',
        name: 'contact.edit',
        component: () => import('@/views/ContactEdit.vue'),
        props: true
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'notfound',
    //     component: () => import('@/views/NotFound.vue')
    // },
];

const router = createRouter(
    {
        history: createWebHashHistory(import.meta.env.BASE_URL),
        routes
    }
);

export default router;