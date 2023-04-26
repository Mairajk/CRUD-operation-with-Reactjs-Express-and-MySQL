const config = {

    host: 'localhost',
    USER: 'root',
    // PASSWORD: '',
    PASSWORD:'workhardin597',
    DB: 'helloworld',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

}

export default config