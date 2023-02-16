/**
 * 18:08 -> 1080
 * split -> ['18','08']
 * map -> [18, 08]
 * @param hourString 
 */

export function convertStringMinutesToHourString(minutesAmount: number) {
    const hours = Math.floor(minutesAmount/60)
    const minutes = minutesAmount % 60;

    //Adiciona zero nas horas caso as horas só tenha um caracter.
    return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`
}