import { readFile, writeFile, stat, access, constants } from 'fs'
import { Workbook } from 'exceljs'
import { copyFile, unlink, readdir } from 'original-fs'
var ncp = require('ncp').ncp
var mkdirp = require('mkdirp')
var rimraf = require('rimraf')
const showOpenDialog = require('electron').dialog.showOpenDialog

export const readFileAsync = function (filename: string): Promise<string> {
    return new Promise(function (resolve, reject) {
        readFile(filename, 'utf-8', function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
};

export const writeFileAsync = function (filename: string, contents: string): Promise<boolean> {
    return new Promise(function (resolve, reject) {
        writeFile(filename, contents, function (err) {
            if (err)
                reject(err);
            else
                resolve(true);
        });
    });
};

export const copyFileAsync = function (srcPath: string, destPath: string): Promise<boolean> {
    return new Promise(function (resolve, reject) {
        copyFile(srcPath, destPath, (err) => {
            if (err)
                reject(err);
            else
                resolve(true);
        });
    });
};

export const deleteFileAsync = function (filePath: string): Promise<boolean> {
    return new Promise(function (resolve, reject) {
        unlink(filePath, (err) => {
            if (err) reject(err);
            else resolve(true)
        });
    });
};

export const saveExcelAsync = async (wb: Workbook) => {
    const showSaveDialog = require('electron').remote.dialog.showSaveDialog;
    const dialogRes = await showSaveDialog({
        filters: [
            { name: 'Excel Workbook', extensions: ['xlsx'] },
            { name: 'All Files', extensions: ['*'] }
        ],
        title: 'Export Excel'
    }) as any;
    if (!(dialogRes.cancelled == true)) {
        const saveFilename: string = dialogRes.filePath;
        console.log(`Saving excel to ${saveFilename}`);
        //todo remove points from timeseries line props
        await wb.xlsx.writeFile(saveFilename);
        console.log(`Excel Saved!`);
    }
};

export const ensureFolderAsync = function (folderName: string): Promise<boolean> {
    return new Promise(function (resolve, reject) {
        mkdirp(folderName, function (err: any) {
            if (err) {
                return reject(err);
            }
            resolve(true);
        });
    });
};


export const copyFolderAsync = function (srcFolderName: string, destFolderName: string): Promise<boolean> {
    ncp.limit = 16;
    return new Promise(function (resolve, reject) {
        ncp(srcFolderName, destFolderName, function (err: any) {
            if (err) {
                return reject(err);
            }
            resolve(true);
        });
    });
};

export const removeFolderAsync = function (folderPath: string): Promise<boolean> {
    return new Promise(function (resolve, reject) {
        stat(folderPath, function (err) {
            if (!err) {
                console.log('file or directory exists');
                rimraf(folderPath, function (err: any) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    console.log(`Successfully deleted folder ${folderPath}`);
                    resolve(true);
                });
            }
            else if (err.code === 'ENOENT') {
                // console.log('file or directory does not exist');
                resolve(true);
            }
        });
    });
}

export const getFilePathFromDialog = async (): Promise<string> => {
    const dialogRes = await showOpenDialog({
        properties: ['openFile'],
        title: 'Select New Visualization Plugin File',
        filters: [
            { name: 'JS Files', extensions: ['js'] },
        ]
    });
    let filePath: string = null;
    // console.log(dialogRes);
    if (dialogRes.canceled == true) {
        return null;
    }
    else if (dialogRes.filePaths.length == 0) {
        return null;
    }
    else {
        filePath = dialogRes.filePaths[0];
    }
    // console.log(pluginExternFoldPath);
    return filePath
};

export const getFileNamesInFolder = async (folderPath: string): Promise<string[]> => {
    return new Promise(function (resolve, reject) {
        readdir(folderPath, (err, files) => {
            if (err) reject(err)
            resolve(files)
        });
    });
}

export const checkIfFileExists = async (filePath: string): Promise<boolean> => {
    return new Promise(function (resolve, reject) {
        access(filePath, constants.F_OK, (err) => {
            if (err) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    });
}