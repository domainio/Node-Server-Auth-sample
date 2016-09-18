# node.js server side auth app sapmle

Server authentication via sticky token, using: passport, JWT, bcrypt


###Covered Features:###

* __JWT__
* __passport__
* __bcrypt__
* __mongoDB mongoose driver__
* __express, router__
* __morgan__
* __CORS__


##Prerequisites##
```
  > mongoDB 3.0+
  > node.js 4.5+
```

###Getting Started###
```
  > git clone
  > cd server
  > npm install
  > \mongoDB\mongod.exe --dbpath="\server-side-app-db-data\db\"
  > create mongoDB collection name: 'auth1' (mongodb://localhost:27017/auth1)
  > npm run dev
```

* FYI: token secret included just for app sample.
