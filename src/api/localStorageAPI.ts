export const localStorageAPI = {
    set: (name: string, id: number): Promise<string> =>
        new Promise((resolve, reject) => {
            const favorites: number[] = JSON.parse(localStorage.getItem(name) as string)
            let processed = [id]
            if (favorites) {
                processed = favorites.includes(id) ? favorites.filter(e => e !== id) : [...favorites, id]
            }
            try {
                localStorage.setItem(name, JSON.stringify(processed));
                resolve('success')
            } catch (err) {
                reject(err)
            }

        }),
    get: (name: string): Promise<number[]> =>
        new Promise((resolve, reject) => {
           try {
               const favorites: number[] = JSON.parse(localStorage.getItem(name) as string)
               resolve(favorites)
           }catch (err){
               reject(err)
           }
        })
}