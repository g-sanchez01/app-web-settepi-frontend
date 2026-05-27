export const ESTADOS_IDEAS = {
    ENVIADA: 'ENVIADA',
    PROGRESO: 'EN PROGRESO',
    APROBADA: 'APROBADA',
    RECHAZADA: 'RECHAZADA',
    BORRADOR: 'BORRADOR',
    PENDIENTE: 'PENDIENTE',
    FINALIZADA: 'FINALIZADA'
};

export const ESTADO_STYLES = {
    [ESTADOS_IDEAS.ENVIADA]: 'bg-yellow-100 text-yellow-700',
    [ESTADOS_IDEAS.PROGRESO]: 'bg-blue-100 text-blue-700',
    [ESTADOS_IDEAS.APROBADA]: 'bg-green-100 text-green-700',
    [ESTADOS_IDEAS.RECHAZADA]: 'bg-red-100 text-red-700',
    [ESTADOS_IDEAS.BORRADOR]: 'bg-orange-100 text-orange-700',
    [ESTADOS_IDEAS.PENDIENTE]: 'bg-yellow-100 text-yellow-700',
    [ESTADOS_IDEAS.FINALIZADA]: 'bg-rose-100 text-rose-700',
};