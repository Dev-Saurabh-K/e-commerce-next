

on add button use Add and Subtract function to update price shown in cart...



//  signup data structure---    /api/auth/signup
username:unique string
email:string
password:string

//  signin data structure---  /api/auth/login
email:string
password:string


cookie -->
authToken:jwtTokenPayload{
    _id,
    email,
}


| Field           | Meaning                       |
| --------------- | ----------------------------- |
| `name`          | Product title                 |
| `description`   | Full product info             |
| `images`        | Multiple images array         |
| `category`      | Product category              |
| `brand`         | Manufacturer or brand name    |
| `price`         | Original price                |
| `discountPrice` | Sale price                    |
| `stock`         | Available items               |
| `rating`        | Average rating from users     |
| `reviews[]`     | User-based reviews            |
| `variants[]`    | Extra details like size/color |
| `tags[]`        | Searchable keywords           |
| `isFeatured`    | To highlight products         |
