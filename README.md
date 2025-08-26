## PWA todo-list  (html, css, javascript)
### Debut su projet :
### ne pas oublier  
- VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: false },  
      //j'ai mi false pour que mon html ce mette ajour ne pas oublier de remettre true  
- j'ai coché la case bypasse for netwok dans sevices worker dans le devtool de l'application ne pas oublier de le decocher a la fin.  

#### package.json  
```
{
  "name": "starter-pwa",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "vite": "^7.1.1",
    "vite-plugin-pwa": "^1.0.2"
  }
}

``` 
