const Category = require('../../models/category');
const Product = require('../../models/product')


function createCategory(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined);
    } else {
        category = categories.filter(cat => cat.parentId == parentId);
    }

    for (const cate of category) {
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            type: cate.type,
            children: createCategory(categories, cate._id)
        })
    }
    return categoryList
}


exports.initialData = async (req, res) => {
    const categories = await Category.find({}).exec();


    const products = await Product.find({}).select('_id name price description productPicture quantity slug category')
        .populate({ path: 'category', select: '_id name' })
        .exec();

    res.status(200).json({
        categories: createCategory(categories),
        products
    })

}