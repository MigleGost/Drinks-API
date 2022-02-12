const app = require('express')()
const PORT = 8080

app.get('/drinkName', (req, res) => {
    res.status(200).send({
            drinkName: "Beer",
            glassType: "large"
        })
});

app.listen(PORT, () => console.log('Server running! https://localhost:${PORT}'))