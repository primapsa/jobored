export const formatSalary = (payment_from: number, payment_to: number): string => {
    let salary = ''
    if (payment_to || payment_from) {
        salary = 'з/п '
        if(payment_from && !payment_to){
            salary += `от ${payment_from}`
        }
        if(payment_to && payment_from){
            salary += `${payment_from} - ${payment_to}`
        }
        if(!payment_from && payment_to){
            salary += ` ${payment_to}`
        }
    }else {
        salary = ''
    }
    return salary
}