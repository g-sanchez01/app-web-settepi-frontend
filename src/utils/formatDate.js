export const formatCurrentDate = () => {

    return new Date().toLocaleDateString(
        'es-MX',
        {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }
    )
}