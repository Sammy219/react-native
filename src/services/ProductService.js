import { Data } from "../data/product"
import { sleep } from "../shared/sleep"

export const productService = () => {
    const getAllProduct = async (page) => {
        const pagePerRow = 20;
        const startIndex = (page - 1) * pagePerRow;
        const endIndex = page * pagePerRow;
        try {
            return await sleep((resolve, reject)=>{
                // resolve(Data)
                const response = Data.slice(startIndex, endIndex)
                if (response.length == 0){
                    reject('no more data');
                } else {
                    resolve(response)
                }
            }, 1000)
        } catch (error) {
            throw error;
        }
    }
    return {getAllProduct}
}

