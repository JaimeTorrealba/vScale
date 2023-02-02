# V-scale
 A simply and lightweight way to add scale effect on hover to any html-tag, trough a directive.

 ### install

```
npm i @jaimebboyjt/v-scale
```
### Register
in the main.js (or ts)
```
...
import vScale from '@jaimebboyjt/v-scale'

app.use(vScale)
```
 ## Usage 
 Then you can use directly in the component

```
<h1 v-scale>Hello world </h1>
```
In addition you can pass two arguments, scale and duration.

```
<h1 v-scale="{scale:'3', duration:'1' }">Hello world </h1>
```
Scale is equivalent to: **transform: scale(MYvalue)**

Duration is equivalent to: **transition: transform MYvalue**
### Props

| Props        | Default           | cssProperty |
| ------------- |:-------------:|:-------------:|
| scale        | 1.1         | transform:scale(1.1) |
| duration        | 0.5          | transition: transform 0.5 |

 ## License

[MIT](/LICENSE)