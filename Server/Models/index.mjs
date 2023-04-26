import { Sequelize, DataTypes } from 'sequelize';

import dbConfig from '../Configs/dbConfig.mjs';

/** MODELS */
import product from './ProductModel.mjs'


// const db = async () => {
//     try {
//         const { DB, USER, PASSWORD, host, dialect, pool } = dbConfig;

//         console.log('dbConfig =====>' , dbConfig);

//         const sequelize = new Sequelize(
//             DB, USER, PASSWORD,
//             {
//                 host,
//                 dialect,
//                 operatorsAliases: false,
//                 pool
//             }
//         );

//         await sequelize.authenticate()
//         console.log("connected");

//         const db = {};

//         // ;[db.Sequelize, db.sequelize] = [Sequelize, sequelize];
//         db.sequelize = sequelize
//         db.Sequelize = Sequelize

//         // db.products = product(sequelize, DataTypes);

//         db.products = require('./ProductModel.mjs')(sequelize, DataTypes)

//         await db.sequelize().sync({ force: false })
//         console.log('database sync done !');

//         return db

//     } catch (error) {
//         console.log('ERROR ! =======>', error);
//     }
// }


/** -------==============--------------------------------------------------------------------------------- */



const { DB, USER, PASSWORD, host, dialect, pool } = dbConfig;

console.log('dbConfig =====>', dbConfig);

const sequelize = new Sequelize(
    DB, USER, PASSWORD,
    {
        host,
        dialect,
        operatorsAliases: false,
        pool
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("connected");
    })
const db = {};

// ;[db.Sequelize, db.sequelize] = [Sequelize, sequelize];
db.sequelize = sequelize
db.Sequelize = Sequelize

db.products = product(sequelize, DataTypes);

// db.products = require('./ProductModel.mjs')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('database sync done !');
    })



export default db