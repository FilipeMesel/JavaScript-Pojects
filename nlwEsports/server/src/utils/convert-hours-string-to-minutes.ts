/**
 * 18:08 -> 1080
 * split -> ['18','08']
 * map -> [18, 08]
 * @param hourString 
 */

export function convertHourStringToMinutes(hourString: String) {
    const [hours, minutes] = hourString.split(':').map(Number)
    const minutesAmount = ((hours*60) + minutes)
    return minutesAmount
}