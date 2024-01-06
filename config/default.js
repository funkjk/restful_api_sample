const config = {
    PORT: process.env.SERVER_PORT || 3000,
    DB_HOST: process.env.MYSQL_HOST || '',
    DB_PORT: process.env.MYSQL_PORT || 3306,
    DB_USERNAME: process.env.MYSQL_USER || '',
    DB_USERNAME_PASSWORD: process.env.MYSQL_PASSWORD || '',
    DB_NAME: process.env.MYSQL_DATABASE || '',
};

if (process.env.WITH_DOCKER) {
    config.DB_HOST = "db"
}

module.exports = config