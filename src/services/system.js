import api from './api'

export const getMaintenanceStatus = async () => {
    const { data } = await api.get('/system/maintenance')
    return data
}