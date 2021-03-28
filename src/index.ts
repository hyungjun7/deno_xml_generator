import Deno from 'https://deno.land/std@0.91.0/node/fs.ts'

/**
 * @param data  Object
 * @param fileName xml fileName(string)
 */
async function xmlGenerator(data: Object, fileName: string): Promise<void> {
    try {
        const encoder = new TextEncoder();
        let ret = '<?xml version="1.0"?>'+'\n'+'<data>'+'\n'
        let depth = 1
        for (const key of Object.entries(data)) {
            ret += generateProperties(key, depth)
        }
        ret += '</data>'
        console.log(ret)
        await Deno.writeFile(`${fileName}.xml`, ret, (err: any) => {throw err})
    } catch (err) {
        throw err
    }
}

function generateProperties(data: any[], depth: number): string {
    const space = '  '
    let retSpace = ''
    let retStr = ''
    for (let i = 0; i < depth; i++) {
       retSpace += space   
    }
    if (typeof data[1] !== 'object' || data[1] === null) retStr += retSpace + `<${data[0]}>` + data[1] + `</${data[0]}>` + '\n'
    else if (data[1] instanceof Array) {
        console.log(data[1])
        retStr += retSpace + `<${data[0]}>` + '\n'
        retStr += generateArrayItems(data[1], depth+1)
        retStr += retSpace + `</${data[0]}>` + '\n'
    } else if (data[1] instanceof Object) {
        retStr += retSpace + `<${data[0]}>` + '\n'
        for (const key of Object.entries(data[1])) {
            retStr += generateProperties(key, depth+1)
        }
        retStr += retSpace + `</${data[0]}>` + '\n'
    }
    return retStr
}

function generateArrayItems(data: any[], depth: number): string {
    const space = '  '
    let retSpace = ''
    let retStr = ''
    for (let i = 0; i < depth; i++) {
       retSpace += space   
    }
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] !== 'object' || data[i] === null) retStr += retSpace + `<value>` + data[i] + `</value>` + '\n'
    }
    return retStr
}

export default xmlGenerator