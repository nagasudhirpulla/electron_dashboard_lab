import path from 'path'
import { adaptersRegistryFilename } from '../dataAdaptersRegistry'
export const getAdapterRepoFilePath = (): string => {
    const filePath: string = path.resolve(path.dirname(process.mainModule.filename), adaptersRegistryFilename)
    return filePath
}