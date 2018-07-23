# Futurama API Server

To install and start the server, run the follow:

* `npm install`
* `node server`

## Using The Server ##

All requests should use an **Authorization header**

```js
  url,
  {
    headers: { 'Authorization': 'whathever' }
  }
```