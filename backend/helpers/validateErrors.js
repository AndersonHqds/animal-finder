module.exports = app => {
    
    const existsOrError = (value, msg) => {
        if(
            !value || 
            (Array.isArray(value) && value.length === 0) || 
            (typeof value === "string" && !value.trim()) 
        ){
            throw msg
        }
    }

    const notExistsOrError = (value, msg) => {
        try{
            existsOrError(value, msg)
        }
        catch(msg){
            return
        }

        throw msg
    }

    const equalsOrError = (valueA, valueB, msg) => { if(valueA !== valueB) throw msg }

    return { existsOrError, notExistsOrError, equalsOrError }
}