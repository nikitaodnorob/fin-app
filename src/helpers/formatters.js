export const formatMonth = (monthIndex) => {
    const res = [
        'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль',
        'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
    ];
    return res[monthIndex];
}

export const formatSum = (sum) => {
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
}
