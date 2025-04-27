# [Sports Memorabilia Store API](#sports-memorabilia-store-api)

by Anthony Micco

## [Installation](#installation)

### Prerequisites
To run this project, you will need to have the following softwares installed: 

- [PHP 8.2.12](https://www.apachefriends.org/)
- [MySQL Community Server 8.2](https://dev.mysql.com/downloads/mysql/) 
- [Composer](https://getcomposer.org/)

## [Database](#database)

### Creating the Database

### Creating the User

### Granting Superuser Privileges

## [Setting up the API](#setting-up-the-api)
To set up the Sports Memorabilia Store API, clone the repository and change the directory
```
git clone https://github.com/Ajmicco18/Sports-Memorbilia-Store.git
cd backend
```
1. **Copy contents of .env.example to an .env file:\\**
```
cp .env.example .env.local
```

2. **Install the dependencies:\\**
```
composer install
```

3. **Generate application key:\\**
```
php artisan key:generate
```

4. **Run database migration with seeder:\\**
```
php artisan migrate --seed
```

5. **Start the local server:\\**
```
php artisan serve
```

   




