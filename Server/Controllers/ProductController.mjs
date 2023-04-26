import db from '../Models/index.mjs';


const Product = db.products


const create = async (req, res) => {
    const { body: { title, price, description, isPublished } } = req;

    console.log('body =========>' , req.body);

    try {
        const payload = {
            title,
            price,
            description,
            isPublished: isPublished || false
        }

        const product = await Product.create(payload)
        console.log(product);
        res.status(201).json({
            message: 'Product created success !'
        })

    } catch (error) {
        console.log('Error ==================>', error);
        res.status(500).send({
            message: 'Server Error !'
        })
    }
}

const list = async (req, res) => {

    try {

        const products = await Product.findAll({
            attibutes: [
                'title', 'price'
            ]
        });

        res.status(200).json({
            products,
            message: 'Products list here'
        });

    } catch (error) {
        console.log('Error ==================>', error);
        res.status(500).send({
            message: 'Server Error !'
        });
    }
}


const view = async (req, res) => {

    const { params: { id } } = req;

    try {

        const product = await Product.findOne({
            where: { id }
        });

        res.status(200).json({
            product,
            message: 'Product view here'
        });

    } catch (error) {
        console.log('Error ==================>', error);
        res.status(500).send({
            message: 'Server Error !'
        });
    }
}


const update = async (req, res) => {

    const { params: { id }, body: { title, description, price, isPublished } } = req;

    try {

        const payload = {
            title, description, price, isPublished
        }

        const product = await Product.update(payload, { where: { id } });

        console.log('product ======>', product);

        res.status(201).json({
            message: 'Product updated success !'
        });

    } catch (error) {
        console.log('Error ==================>', error);
        res.status(500).send({
            message: 'Server Error !'
        });
    }
}


const remove = async (req, res) => {

    const { params: { id } } = req;

    try {

        const product = await Product.destroy({ where: { id } });

        console.log('product ======>', product);

        res.status(201).json({
            message: 'Product deleted success !'
        });

    } catch (error) {
        console.log('Error ==================>', error);
        res.status(500).send({
            message: 'Server Error !'
        });
    }
}


export default {
    create,
    list,
    view,
    update,
    remove,
} 