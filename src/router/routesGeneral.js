export const ROUTES = {
    GENERAL: {
        ENCUESTAS: {
            MIS_IDEAS: {
                LISTA: '/general/encuestas/mis-ideas',
                NUEVA: '/general/encuestas/mis-ideas/idea-nueva',
                EDITAR: (id) => `/general/encuestas/mis-ideas/edit-idea/${id}`,
                DETALLE: (id) => `/general/encuestas/mis-ideas/${id}`
            },

            FEEDBACKS: {
                LISTA: '/general/encuestas/settepi-te-escucha',
                NUEVA: '/general/encuestas/settepi-te-escucha/nueva-situacion',
                DETALLE: (id) => `/general/encuestas/settepi-te-escucha/${id}`
            }
        }
    },

    LIDER: {
        ENCUESTAS: {
            MIS_IDEAS: {
                LISTA: '/lider/encuestas/mis-ideas',
                NUEVA: '/lider/encuestas/mis-ideas/idea-nueva',
                EDITAR: (id) => `/lider/encuestas/mis-ideas/edit-idea/${id}`,
                DETALLE: (id) => `/lider/encuestas/mis-ideas/${id}`
            },

            FEEDBACKS: {
                LISTA: '/lider/encuestas/settepi-te-escucha',
                NUEVA: '/lider/encuestas/settepi-te-escucha/nueva-situacion',
                DETALLE: (id) => `/lider/encuestas/settepi-te-escucha/${id}`
            }
        },

        MI_EQUIPO: {
                LISTA: '/lider/mi-equipo',
                ASIGNAR: (numero_nomina) => `/lider/mi-equipo/asignacion/${numero_nomina}`
            }
    },

    GESTOR: {
        ENCUESTAS: {
            IDEAS: {
                LISTA: '/gestor/encuestas/ideas',
                DETALLE: (id) => `/gestor/encuestas/ideas/detalle/${id}`
            },

            FEEDBACKS: {
                LISTA: '/gestor/encuestas/settepi-te-escucha',
                DETALLE: (id) => `/gestor/encuestas/settepi-te-escucha/detalle/${id}`
            }
        }
    },

    ADMIN: {
        ENCUESTAS: {
            IDEAS: {
                LISTA: '/admin/encuestas/ideas',
                DETALLE: (id) => `/admin/encuestas/ideas/detalle/${id}`
            },

            FEEDBACKS: {
                LISTA: '/admin/encuestas/settepi-te-escucha',
                DETALLE: (id) => `/admin/encuestas/settepi-te-escucha/detalle/${id}`
            }
        },

        MI_EQUIPO: {
                LISTA: '/admin/mi-equipo',
                ASIGNAR: (numero_nomina) => `/admin/mi-equipo/asignacion/${numero_nomina}`
        },

        EMPLEADO_MES: {
                LISTA: '/admin/empleado-mes',
                ASIGNAR: (id) => `/admin/empleado-mes/asignacion/${id}`
        }
    },

    ADMIN_DEV: {
        ENCUESTAS: {
            IDEAS: {
                LISTA: '/admin-dev/encuestas/ideas',
                DETALLE: (id) => `/admin-dev/encuestas/ideas/detalle/${id}`
            },

            FEEDBACKS: {
                LISTA: '/admin-dev/encuestas/settepi-te-escucha',
                DETALLE: (id) => `/admin-dev/encuestas/settepi-te-escucha/detalle/${id}`
            }
        },

        MI_EQUIPO: {
                LISTA: '/admin-dev/mi-equipo',
                ASIGNAR: (numero_nomina) => `/admin-dev/mi-equipo/asignacion/${numero_nomina}`
        },

        EMPLEADO_MES: {
                LISTA: '/admin-dev/empleado-mes',
                ASIGNAR: (id) => `/admin-dev/empleado-mes/asignacion/${id}`
        },

        USUARIOS: {
                LISTA: '/admin-dev/usuarios',
                NUEVA: '/admin-dev/usuarios/agregar-usuario',
                DETALLE: (numero_nomina) => `/admin-dev/usuarios/detalle/${numero_nomina}`
        }
    }
}