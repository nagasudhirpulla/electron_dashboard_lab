import path from 'path'
export const getExesFolder = (): string => {
    return path.resolve(path.dirname(process.mainModule.filename), 'adapters')
}