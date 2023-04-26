const Product = (sequelize, DataType) => {

    const { STRING, INTEGER, TEXT, BOOLEAN } = DataType

    const Model = sequelize.define("product", {
        tiltle: {
            type: STRING,
            allowNull: false
        },
        price: {
            type: INTEGER,
        },
        descrition: {
            type: TEXT
        },
        isPublished: {
            type: BOOLEAN
        }
    })

    return Model

};


export default Product;