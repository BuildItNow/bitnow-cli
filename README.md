# bitnow-cli
A simple CLI for scaffolding BIN projects. This CLI is developed based on vue-cli's source code.

## Install
``` bash
$ npm install -g bitnow-cli
```

## bitnow
### Generate project from template
``` bash
$ bitnow init <project-name> [template-name]
```

### List available template
``` bash
$ bitnow list
```

### Update to latest verion BIN framework
``` bash
$ bitnow update
```

## bitnow-view
`bitnow-view` provides view source code auto generation feature.
### Create a view from template
``` bash
$ bitnow view create <view-path> [template-name]
```

### List available view template
``` bash
$ bitnow view list
```

## Project command

### Start project for development
``` bash
$ npm start
```

### Build project for production
``` bash
$ npm run build
```

### Build project and then start
``` bash
$ npm run build-start
```
