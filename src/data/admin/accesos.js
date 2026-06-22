import { Newspaper, Users, FileText, Briefcase, BadgeCheck, User, Gift, Trophy } from 'lucide-vue-next';

    export const accesos = [
        {
            titulo: 'Encuestas',
            descripcion: 'Gestiona las encuestas',
            icono: FileText,
            color: 'bg-cyan-600',
            ruta: '/admin/encuestas'
        },
        {
            titulo: 'Mi Perfil',
            descripcion: 'Información personal',
            icono: User,
            color: 'bg-pink-600',
            ruta: '/admin/perfil'
        },
        {
            titulo: 'Mi Equipo',
            descripcion: 'Revisa a tu equipo',
            icono: Users,
            color: 'bg-emerald-600',
            ruta: '/admin/mi-equipo'
        },
        {
            titulo: 'Empleado del Mes',
            descripcion: 'Revisa las solicitudes',
            icono: Trophy,
            color: 'bg-yellow-500',
            ruta: '/admin/empleado-mes'
        }
    ]