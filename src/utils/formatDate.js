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

export const formatDateTime = (date) => {

    if (!date) return ''

    const d = new Date(date)

    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()

    return `${day}-${month}-${year}`
}