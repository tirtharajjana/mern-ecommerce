import { categoryConstansts } from "../actions/constantes"

const initState = {
    categories: [],
    loading: false,
    error: null
};
// // 
// const buildNewCategories = (parentId, categories, category) => {
//     let myCategories = [];
//     for (let cat of categories) {
//         if ( cat._id === parentId) {
//             myCategories.push({
//                 ...cat,
//                 children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, [...cat.children, {
//                     _id: category._id,
//                     name: category.name,
//                     slug: category.slug,
//                     parentId: category.parentId,
//                     children: category.children,                
//                 }], category) : []
//             })
//         }
//         else {
//             myCategories.push({
//                 ...cat,
//                 children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, cat.children, category) : []
//             })
//         }

//     }
//     return myCategories;
// }

const buildNewCategories = (parentId, categories, category) => {
    let myCategories = [];

    if (parentId === undefined) {
        return [
            ...categories,
            {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                type: category.type,
                children: []
            }
        ];
    }


    for (let cat of categories) {

        if (cat._id === parentId) {
            const newCategory = {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                parentId: category.parentId,
                type: category.type,
                children: []
            };
            myCategories.push({
                ...cat,
                children: cat.children.length > 0 ? [...cat.children, newCategory] : [newCategory]
            })
        } else {
            myCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
            });
        }


    }


    return myCategories;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_SUCCESS:
            const category = action.payload.category;
            const updatedCategory = buildNewCategories(category.parentId, state.categories, category);
            console.log(updatedCategory);
            state = {
                ...state,
                categories: updatedCategory,
                loading: false,

            }
            break;
        case categoryConstansts.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initState
            }
            break;
    }

    return state;
}