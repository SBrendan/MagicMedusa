![MedusaLogo](https://image.flaticon.com/icons/svg/1315/1315860.svg)

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<p>
    <a href="https://github.com/SBrendan/MagicMedusa/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/SBrendan/MagicMedusa" />
    </a>
        <a href="https://github.com/SBrendan/MagicMedusa/issues" alt="Issues">
        <img src="https://img.shields.io/bitbucket/issues-raw/SBrendan/MagicMedusa" />
    </a>
    </a>
        <a href="https://github.com/SBrendan/MagicMedusa/pulls" alt="Pull requests">
        <img src="https://img.shields.io/bitbucket/pr-raw/SBrendan/MagicMedusa" />
    </a>
    </a>
        <a href="#" alt="Repo size">
        <img src="https://img.shields.io/github/repo-size/SBrendan/MagicMedusa" />
    </a>
        </a>
        <a href="#" alt="License">
        <img src="https://img.shields.io/github/license/SBrendan/MagicMedusa" />
    </a>
</p> 

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
//Variable d'environnement NODE_ENV=production
npm run build
npm run server
```

## Création de votre widget
- Pour ajouter un widget créer un composant React dans le dossier src/components
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
- Puis ajoutez-le dans le fichier src/service/renderComponent.js
```
case 'MonComposant':
    return <MonComposant MesProps={component.MonComposant.MesProps} />;
```
- Créer les routes si nécessaires au bon fonctionnement de votre composant dans le fichier src/routes.js
```
{
    path: "/MonComposant",
    name: "MonComposant",
    component: MonComposant
},
```
- Ajouter les paramètres disponibles dans le fichier public/widgetConfig.json
```
"MonComposant": {
  "MesProps": "Valeur par defaut"
},
```
Voilà, votre composant est prêt à être utilisé.

## Contributing
Les Pull requests sont les bienvenues. Pour la majorité des changements, merci d'ouvrir une issue avant afin de pouvoir discuter de ce que vous voulez modifier.

## License
[MIT](https://choosealicense.com/licenses/mit/)

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
- To create your own widget, create a react component and add it in the folder src/components
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
- Create a route if necessary in the folder src/routes.js
```
{
    path: "/MyComponent",
    name: "MyComponent",
    component: MyComponent
},
```
- Add your components props in the file public/widgetConfig.json
```
"MyComponent": {
  "MyProps": "Default Value"
},
```
All done, your component is ready to use.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
