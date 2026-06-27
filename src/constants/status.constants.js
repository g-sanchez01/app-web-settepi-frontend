export const ESTADOS_IDEAS = {
    ENVIADA: 'ENVIADA',
    PROGRESO: 'EN PROGRESO',
    APROBADA: 'APROBADA',
    RECHAZADA: 'RECHAZADA',
    BORRADOR: 'BORRADOR',
    PENDIENTE: 'PENDIENTE',
    EN_PROCESO: 'EN PROCESO',
    FINALIZADO: 'FINALIZADO'
};

export const ESTADOS_EMPLEADO_MES = {
    PENDIENTE: 'PENDIENTE',
    ACEPTADO: 'ACEPTADO',
    RECHAZADO: 'RECHAZADO',
    SIN_SOLICITUD: 'SIN SOLICITUD'
};

export const ESTADOS_USUARIOS = {
    ACTIVO: 'ACTIVO',
    BAJA: 'BAJA',
};

export const ESTADO_STYLES = {
    [ESTADOS_IDEAS.ENVIADA]: 'bg-yellow-100 text-yellow-700',
    [ESTADOS_IDEAS.PROGRESO]: 'bg-blue-100 text-blue-700',
    [ESTADOS_IDEAS.EN_PROCESO]: 'bg-blue-100 text-blue-700',
    [ESTADOS_IDEAS.APROBADA]: 'bg-green-100 text-green-700',
    [ESTADOS_IDEAS.RECHAZADA]: 'bg-red-100 text-red-700',
    [ESTADOS_IDEAS.BORRADOR]: 'bg-orange-100 text-orange-700',
    [ESTADOS_IDEAS.PENDIENTE]: 'bg-yellow-100 text-yellow-700',
    [ESTADOS_IDEAS.FINALIZADO]: 'bg-rose-100 text-rose-700',

    [ESTADOS_EMPLEADO_MES.SIN_SOLICITUD]: 'bg-gray-100 text-gray-700',
    [ESTADOS_EMPLEADO_MES.ACEPTADO]: 'bg-green-100 text-green-700',
    [ESTADOS_EMPLEADO_MES.RECHAZADO]: 'bg-red-100 text-red-700',

    [ESTADOS_USUARIOS.ACTIVO]: 'bg-green-100 text-green-700',
    [ESTADOS_USUARIOS.BAJA]: 'bg-red-100 text-red-700'
};

export const ESTADOS_BLOQUEADOS = [
    'ENVIADA',
    'PENDIENTE',
    'EN PROCESO',
    'APROBADA',
    'RECHAZADA'
]

