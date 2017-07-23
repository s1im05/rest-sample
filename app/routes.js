module.exports = (app) => {
    app.post('/widget/list', (req, res) => {
        res.send('Hello')
    });
};
