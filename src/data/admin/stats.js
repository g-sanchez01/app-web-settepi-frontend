
import {
    BarChart3,
    CheckCircle,
    LoaderCircle,
    Clock3,
    ClipboardList
} from 'lucide-vue-next'


export const statsIdeas = (data = {}) => [
    {
        title: 'Total Ideas',
        value: data.total, 
        icon: ClipboardList,
        iconColor: 'text-blue-600',
        bgColor: 'bg-blue-100'
    },
    {
        title: 'En proceso',
        value: data.en_proceso,
        icon: LoaderCircle,
        iconColor: 'text-purple-600',
        bgColor: 'bg-purple-100'
    },
    {
        title: 'Pendientes',
        value: data.pendiente,
        icon: Clock3,
        iconColor: 'text-orange-600',
        bgColor: 'bg-orange-100'
    },
    {
        title: 'Finalizadas',
        value: data.finalizada,
        icon: CheckCircle,
        iconColor: 'text-green-600',
        bgColor: 'bg-green-100'
    }
]

export const generarStatsFeedbacks = (data = {}) => [
    {
        title: 'Total Feedbacks',
        value: data.total, 
        icon: ClipboardList,
        iconColor: 'text-blue-600',
        bgColor: 'bg-blue-100'
    },
    {
        title: 'En proceso',
        value: data.en_proceso,
        icon: LoaderCircle,
        iconColor: 'text-purple-600',
        bgColor: 'bg-purple-100'
    },
    {
        title: 'Pendientes',
        value: data.pendiente,
        icon: Clock3,
        iconColor: 'text-orange-600',
        bgColor: 'bg-orange-100'
    },
    {
        title: 'Finalizadas',
        value: data.finalizada,
        icon: CheckCircle,
        iconColor: 'text-green-600',
        bgColor: 'bg-green-100'
    }
]