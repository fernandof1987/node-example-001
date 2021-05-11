const app = require('express')()
app.get('/', (req, res) => res.json({'data': 'Hello World'}))
app.listen(3000, () => console.log('Servidor no ar'))