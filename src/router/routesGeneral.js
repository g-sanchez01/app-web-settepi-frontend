export const ROUTES = {
    GENERAL: {
        ENCUESTAS: {
            MIS_IDEAS: {
                LISTA: '/general/encuestas/mis-ideas',
                NUEVA: '/general/encuestas/mis-ideas/idea-nueva',
                DETALLE: (id) => `/general/encuestas/mis-ideas/${id}`
            },

            FEEDBACKS: {
                LISTA: '/general/encuestas/settepi-te-escucha',
                NUEVA: '/general/encuestas/settepi-te-escucha/nueva-situacion',
                DETALLE: (id) => `/general/encuestas/settepi-te-escucha/${id}`
            }
        }
    }
}