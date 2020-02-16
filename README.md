This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# MagicMedusa (FR 🇫🇷)
## Qu'est-ce que MagicMedusa ? 
Le principe de Medusa est d'avoir un écran intelligent connecté.
Des widgets modulaires tels que la météo ou les actualités seront disponibles. Cette modularité repose sur le principe de dashboard, qui vous permettra de visualiser et de paramétrer 4 widgets que vous aurez choisis.

## Dev
Tout d'abord, après avoir récupéré les fichiers, il faudra lancer dans une console les commandes suivantes :
```
npm install
npm run dev
```

## Production
```
//Variable d'environements NODE_ENV=production
npm run build
npm run server
```

## Création de votre widget
- Pour ajouter un widget crée un composant React dans le dossier src/components
```
import React from 'react';
import {Header} from 'semantic-ui-react';

class MonComposant extends React.Component {
    render() {
        return (
            <div>
                <Header as='h1'>Mon composant react :D</Header>
            </div>
        );
    }
}

export default MonComposant;
```
- Puis ajouter le dans le fichier src/service/renderComponent.js
```
case 'MonComposant':
    return <MonComposant MesProps={component.MonComposant.MesProps} />;
```
- Crée les routes si nécéssaire au bon fonctionnement de votre componsant dans le fichier src/routes.js
```
{
    path: "/MonComposant",
    name: "MonComposant",
    component: MonComposant
},
```
- Ajouter les paramametre disponible dans le fichier public/widgetConfig.json
```
"MonComposant": {
  "MesProps": "Valeur par defaut"
},
```
Voilà votre composant est pret à être utiliser

# MagicMedusa (EN 🇬🇧)
## What is MagicMedusa ?
The principle of Medusa is to have an intelligent connected screen.
Modular widgets such as weather or news will be available. The modularity, based on the principle of dashboards, allows you to display and set up 4 widgets you've chosen.

## Dev
First of all, recover the files and launch in a shell the following commands :
```
npm install
npm run dev
```

## Production
```
//Env NODE_ENV=production
npm run build
npm run server
```

## Create your own widget
- For create your own widget create a react component and add it in this folder src/components
```
import React from 'react';
import {Header} from 'semantic-ui-react';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <Header as='h1'>My Component react :D</Header>
            </div>
        );
    }
}

export default MyComponent;
```
- Add it to the file src/service/renderComponent.js
```
case 'MyComponent':
    return <MyComponent MyProps={component.MyComponent.MyProps} />;
```
- Create route if necessary in this folder src/routes.js
```
{
    path: "/MyComponent",
    name: "MyComponent",
    component: MyComponent
},
```
- Add props available in this file public/widgetConfig.json
```
"MyComponent": {
  "MyProps": "Default Value"
},
```
All done your component it's ready to use
