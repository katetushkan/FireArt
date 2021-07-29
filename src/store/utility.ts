export const updatedObject = <T>(oldObject: T, updatedProperties: Partial<T>) => {
    return{
        ...oldObject,
        ...updatedProperties
    }
}