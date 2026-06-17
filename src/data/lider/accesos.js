import { FileText, User, Users} from 'lucide-vue-next';

    export const accesos = [
        {
            titulo: 'Encuestas',
            descripcion: 'Comparte tu opinion',
            icono: FileText,
            color: 'bg-cyan-600',
            ruta: '/lider/encuestas'
        },
        {
            titulo: 'Mi Perfil',
            descripcion: 'Información personal',
            icono: User,
            color: 'bg-pink-600',
            ruta: '/lider/perfil'
        },
        {
            titulo: 'Mi Equipo',
            descripcion: 'Revisa a tu equipo',
            icono: Users,
            color: 'bg-emerald-600',
            ruta: '/lider/mi-perfil'
        }
    ]