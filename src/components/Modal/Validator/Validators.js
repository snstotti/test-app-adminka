export const required = value =>{
    if(value) return undefined ;
    return 'Field is required'
}

export const maxLengthCreator = max => value => {
    return value.length > max ? `Must be ${max} characters or more`: undefined
}