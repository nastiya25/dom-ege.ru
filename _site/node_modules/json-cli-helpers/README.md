# json-cli-helpers

# Install 

```sh
npm i -g json-cli-helpers json
```

Or with csvtojson:
```sh
npm i -g json-cli-helpers json csvtojson
```

# Better use with:

- https://www.npmjs.com/package/json
- https://www.npmjs.com/package/csvtojson 

# Usage

Test file: 
```sh 
$ cat test.json | json
[
  {
    "name": "aleksej",
    "gender": "male"
  },
  {
    "name": "elena",
    "gender": "female"
  },
  {
    "name": "anna",
    "gender": "female"
  }
]
```

Group by field:
```
$ cat test.json | group-by gender | json
{
  "male": [
    {
      "name": "aleksej",
      "gender": "male"
    }
  ],
  "female": [
    {
      "name": "elena",
      "gender": "female"
    },
    {
      "name": "anna",
      "gender": "female"
    }
  ]
}
```

Index by field:
```sh
$ cat test.json | index-by name | json
{
  "aleksej": {
    "gender": "male"
  },
  "elena": {
    "gender": "female"
  },
  "anna": {
    "gender": "female"
  }
}
```


