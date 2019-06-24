/**
 * Filters the object by field value.
 *
 * @param {Object} targets
 * @returns {Object} The targets object, filtered by the field.
 */
export const filterObject = (targets, field, value) => {
    const filtered = {}
    let counter = 0
    for (const targetNumber in targets) {
        const target = targets[targetNumber]

        if (target[field] === value) {
            filtered[counter] = target
            counter++
        }
    }
    return filtered
}
