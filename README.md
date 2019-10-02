# Express api

Simple api using framework Express NodeJs with Jwt Auth.

# Instalattion

```bash
git clone https://github.com/gbdecastro/express-api.git
```

# Usage

```bash
  npm i && npm start
```

# Routes

- **User**

  - **(POST) api/user/register**

    _Parse in Body Request:_

    ```json
    {
      "name": "John Snow",
      "email": "johnsnow@gmail.com",
      "password": "123456"
    }
    ```

  - **(POST) api/user/login**

    _Response: TOKEN_

    _Parse in Body Request:_

    ```json
    {
      "email": "johnsnow@gmail.com",
      "password": "123456"
    }
    ```

- **Post**

  This all route is necessary use of **token** in **_api/user/login_** for authentication, use in Header http request with name: **auth-token**.

  - **(GET) api/post**

    **_Return all Post_**

    _Response_:

  ```json
  [
    {
      "_id": "5d94c404bb506521d0eab2c0",
      "title": "Edit Second Post",
      "description": "Edit Description Second Post",
      "date": "2019-10-02T15:36:36.088Z",
      "__v": 0
    }
  ]
  ```

  - **(GET) api/post/:postId**

    **_Return Specific Post_**

    _Response_:

    ```json
    {
      "_id": "5d94c404bb506521d0eab2c0",
      "title": "Edit Second Post",
      "description": "Edit Description Second Post",
      "date": "2019-10-02T15:36:36.088Z",
      "__v": 0
    }
    ```

  - **(POST) api/post**

    **_Add New Post_**

    _Parse in Body Request_:

    ```json
    {
      "title": "New Post",
      "description": "Description New Post"
    }
    ```

    _Response_:

    ```json
    {
      "_id": "5d94f116bfd68327a02fb575",
      "title": "New Post",
      "description": "Description New Post",
      "date": "2019-10-02T18:48:54.791Z",
      "__v": 0
    }
    ```

  - **(PATCH) api/post/:postId**

    **_Update specific Post_**

    _Parse in Body Request:_

    ```json
    {
      "title": "Edit Second Post",
      "description": "Edit Description Second Post"
    }
    ```

    _Response_:

    ```json
    {
      "n": 1,
      "nModified": 1,
      "opTime": {
        "ts": "6743279219440091138",
        "t": 1
      },
      "electionId": "7fffffff0000000000000001",
      "ok": 1,
      "operationTime": "6743279219440091138",
      "$clusterTime": {
        "clusterTime": "6743279219440091138",
        "signature": {
          "hash": "kl5J29flG/O6vhYemQYSQIVIxy0=",
          "keyId": "6743037447141064705"
        }
      }
    }
    ```

  - **(DELETE) api/post/:postId**

    **_DELETE specific Post_**

    _Response_:

    ```json
    {
      "n": 1,
      "opTime": {
        "ts": "6743280563764854788",
        "t": 1
      },
      "electionId": "7fffffff0000000000000001",
      "ok": 1,
      "operationTime": "6743280563764854788",
      "$clusterTime": {
        "clusterTime": "6743280563764854788",
        "signature": {
          "hash": "ahTnUVpreUWrZJt3l1K7ZbakIYM=",
          "keyId": "6743037447141064705"
        }
      },
      "deletedCount": 1
    }
    ```
