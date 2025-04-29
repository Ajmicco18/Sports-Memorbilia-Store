# Sports Memorabilia Store

by Anthony Micco

## Project Layout
- [Sports Store API](https://github.com/Ajmicco18/Sports-Memorbilia-Store/blob/main/sports-store-api/README.md): Used a Laravel backend with PHP and MySQL to implement the backend.
- [Sports Store App](https://github.com/Ajmicco18/Sports-Memorbilia-Store/blob/main/sports-store-app/README.md): Used a React Vite framework to develop the frontend. 

## Sports Memorabilia Store API
- I used the Laravel framework for the API because it provided an excellent template to use for creating a functional backend with PHP and MySQL.

The application's API uses MySQL and PHP by: 
- Create
- Read
- Update
- Delete

### Database Schema

**User**
```json
{
  "id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "email": "test@abc.com",
  "phone": "123-456-7890",
  "text_alerts": false,
  "email_alerts": true,
  "password": "12345678"
}
```

**Cart**
```json
{
  "id": 1,
  "user_id": 1,
  "session_id": "12345",
  "total": 154.50,
  "cartItems": [
    {
      "id": 1,
      "quantity": 1,
      "cart_id": 1,
      "product_id": 1
    }
  ]
}
```

**CartItem**
```json
{
  "id": 1,
  "quantity": 1,
  "cart_id": 1,
  "product_id": 1
}
```

**Orders**
```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "test@abc.com",
  "phoneNumber": "123-456-7890",
  "created_at": "2022-08-27T16:14:46.000000Z",
  "deliveryAddress": {
    "address": "123 Federal Street",
    "city": "Youngstown",
    "state": "OH",
    "zipCode": 44512
  },
  "lineItems": [
      {
        "id": 1,
        "quantity": 1,
        "product": {
          "id": 1,
          "price": 99.99,
          "category": "Jerseys",
          "product_image": "../../assets/images/",
          "description": "Jayson Tatum Authentic Statement Jersey"
        }
      }
    ]
}
```

**DeliveryAddress**
```json
{
    "address": "123 Federal Street",
    "city": "Youngstown",
    "state": "OH",
    "zipCode": 44512
  }
```

**LineItem**
```json
 {
    "id": 1,
    "quantity": 1
}
```

**Products**
```json
[
  {
    "id": 1,
    "price": 99.99,
    "category": "Jerseys",
    "product_image": "../../assets/images/",
    "description": "Jayson Tatum Authentic Statement Jersey"
  }
]
```

## Sports Memorabilia Store App

- I used the Vite framework to create the frontend for the Sports Memorabilia Store website because I have worked with Vite before and I was 
familiar and comfortable working with it. 

## Challenges Faced
- One of the main challenges I faced was initially determining what PHP framework to use that would integrate well with Vite. After doing some 
research on popular PHP frameworks used with Vite, I determined Laravel was the best fit for me to use.

- Another challenge I faced was getting the logout endpoint to work. I kept receiving a 404 Unauthorized error when calling the endpoint. Ultimately, I ended up using the token received from logging in or registering a user to logout a user. Essentially, I added the token to the local storage when the login or registration response was received and removed it whenever the user logged out. 

- Unfortunately, time restraints prevented me from implementing the shopping cart. However, I was able to successfully implement user login and registration, as well as receive product information from the database. Although, I was unable to successfully retrieve the product images from the database because the url was not being recognized by the MUI component I was using. 

