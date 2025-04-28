# Sports Memorabilia Store API

by Anthony Micco

## Installation

**Prerequisites**

To run this project, you will need to have the following installed:

-   [PHP 8.2](https://www.php.net/downloads.php#gpg-8.2)
-   [MySQL Community Server 8.0](https://dev.mysql.com/downloads/mysql/)
-   [Composer](https://getcomposer.org/download/)

---

### Development Database

Database connection is setup to use environment variables in a .env file. A example.env is provided that uses database and initial data variables for the following setup:

**Creating the database**

```sql
CREATE DATABASE sports_store_db;
```

**Creating the user**

```sql
CREATE USER 'sports_store'@'localhost' IDENTIFIED BY 'sports_store';
```

**Grant superuser privilege**

```sql
GRANT ALL PRIVILEGES ON *.* TO 'sports_store'@'localhost' WITH GRANT OPTION;
```

---

### Setup API

To set up the Sports Memorabilia Store API, clone the repository and change the directory

```sh
git clone https://github.com/Ajmicco18/Sports-Memorbilia-Store.git
cd sports-store-api
```

1. Copy `.env.example` to `.env`:

    ```shell
    cp .env.example .env
    ```

2. Install the dependencies:

    ```shell
    composer install
    ```

3. Generate application key:

    ```shell
    php artisan key:generate
    ```

4. Run database migration with seeder:

    ```shell
    php artisan migrate --seed
    ```

5. Start the local server:

    ```shell
    php artisan serve
    ```

### Viewing the Interactive API Docs

**For Swagger UI**

-   http://localhost:8000/swagger-ui

**For ReDoc**

-   http://localhost:8000/redoc
