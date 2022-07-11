# Bun TODO

Simple TODO API with [Bun](https://bun.sh/)

## Prepare

```
bun install
bun seed
```

## Run

```
bun start
```

Now visit [localhost](http://localhost:3000) And you should see a welcome message

## Simple actions:

[GET] `/todo` -> Return all TODOs

[GET] `/todo/<id>` -> Return TODO by ID

[POST] `/todo` -> Create a new TODO based on JSON `{ description: string }`

[PATCH] `/todo/<id>` -> Complete TODO by ID
