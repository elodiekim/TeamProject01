const createProduct = require('../../repo/createProduct');
const findAllProduct =require('../../repo/findAllProduct')

const create = async (req,res)=>{

    try {
        const product = await findAllProduct()
        let cnt = 0
        if (product.length > 0){
            cnt = product[0].product_no
        }
        

        const{ title, description, category,price}=req.body
        // if (!title || !description || !category || !price){
        //     return res.status(400).send({message:"빈칸없이 입력해주세요"})
        // }
        const result = createProduct( title,description,category,price,cnt)
        if (result===false){
            return res.status(500).send({message:'상품 등록 실패'})
        }
        return res.status(201).send({message:"상품 등록 성공"})
    } catch (error) {
        console.error(error)
        return res.status(400).send({message:"상품 등록 실패"})
    }

}

module.exports = create;