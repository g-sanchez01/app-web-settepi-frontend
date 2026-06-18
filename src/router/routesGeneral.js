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
    }
}