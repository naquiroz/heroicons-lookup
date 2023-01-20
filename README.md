<h1 align="center">Welcome to heroicons-lookup 🔍</h1>
<p>
  <a href="https://www.npmjs.com/package/heroicons-lookup" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/heroicons-lookup.svg">
  </a>
  <a href="https://github.com/naquiroz/heroicons-lookup#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/naquiroz/heroicons-lookup/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/naquiroz/heroicons-lookup/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/naquiroz/heroicons-lookup" />
  </a>
  <a href="https://twitter.com/naquiroz" target="_blank">
    <img alt="Twitter: naquiroz_" src="https://img.shields.io/twitter/follow/naquiroz_.svg?style=social" />
  </a>
</p>

> A utility library to lookup [TailwindCSS Heroicons](https://heroicons.com/) by their name. Based on [@jsmith](https://gist.github.com/jsmith)'s [gist](https://gist.github.com/jsmith/96cccfdef264dfab1bf75e02de704e4e)



### 🏠 [Homepage](https://github.com/naquiroz/heroicons-lookup#readme)

### ✨ [Demo](https://github.com/naquiroz/heroicons-lookup#readme)(coming soon)

## Use cases

Say for example, you store in database, entities that have an icon. The intuitive thing to do is to store the name of the icon in the database. Another example could be a situacion where you want to change the icon based on the user input, or based on certain conditions.

If you need to import an icon dynamically based on it's name, you can with this library. By using the function below, you can obtain exactly the icon you want, as react component.

## Install

```sh
npm install heroicons-lookup
```

## Usage

```tsx
import {lookupIcon} from "heroicons-lookup";

const ExampleComponent = ({iconName="ArrowLeftIcon"}: {iconName: string}) => {
  const Icon = lookupIcon(iconName, "solid")
  return (
    <Icon className="flex h-5 w-5"/>
  )
}
```

## Documentation

### `lookupIcon(iconName: string, format: "outline"|"solid"|"mini")`

Finds an icon element with the name indicated (if any). Throws an error if not found.

## Author

👤 **Nicolas Quiroz <nicolasquirozpa@gmail.com>**

* Website: https://github.com/naquiroz/heroicons-lookup#readme
* Twitter: [@naquiroz_](https://twitter.com/naquiroz_)
* Github: [@naquiroz](https://github.com/naquiroz)
* LinkedIn: [@naquiroz](https://linkedin.com/in/naquiroz)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/naquiroz/heroicons-lookup/issues). You can also take a look at the [contributing guide](https://github.com/naquiroz/heroicons-lookup/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Nicolas Quiroz <nicolasquirozpa@gmail.com>](https://github.com/naquiroz).<br />
This project is [MIT](https://github.com/naquiroz/heroicons-lookup/blob/master/LICENSE) licensed.

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
