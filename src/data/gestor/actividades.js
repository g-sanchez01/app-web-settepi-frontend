import { ESTADOS_IDEAS, ESTADO_STYLES } from "@/constants/status.constants"

export const actividades = [
    {
        nombre: 'María González',
        descripcion: 'envió una nueva idea',
        tiempo: 'Hace 10 min',
        inicial: 'MG',
        estado: ESTADOS_IDEAS.PENDIENTE
    },
    {
        nombre: 'Carlos Hernández',
        descripcion: 'envió feedback sobre producto',
        tiempo: 'Hace 25 min',
        inicial: 'CH',
        estado: ESTADOS_IDEAS.PENDIENTE
    },
    {
        nombre: 'Ana Martínez',
        descripcion: 'actualizó su sugerencia',
        tiempo: 'Hace 1 hora',
        inicial: 'AM',
        estado: ESTADOS_IDEAS.FINALIZADA
    },
    {
        nombre: 'Luis Rodríguez',
        descripcion: 'envió una nueva idea',
        tiempo: 'Hace 2 horas',
        inicial: 'LR',
        estado: ESTADOS_IDEAS.FINALIZADA
    },
    {
        nombre: 'Sofía Torres',
        descripcion: 'envió feedback de servicio',
        tiempo: 'Hace 3 horas',
        inicial: 'ST',
        estado: ESTADOS_IDEAS.PENDIENTE
    }
]