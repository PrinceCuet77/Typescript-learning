const superHeros: string[] = ['Ironman', 'Hulk', 'Spiderman']
const superPowerLevel: Array<number> = [1, 2, 4]

type User = {
    name: string
    isActive: boolean
}

const allUser: User[] = []
allUser.push({ name: 'R', isActive: false })

// 2D array: way 01
const mlModules: number[][] = [
    [1, 2, 3],
    [2, 3, 4],
]
console.log(mlModules)

// 2D array: way 02
const mlModules1: Array<number>[] = [
    [1, 2, 3],
    [2, 3, 4],
]
console.log(mlModules1)

export {}
