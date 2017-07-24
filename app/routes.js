const widget = require('./widget.class'),
    widgets = require('./widgets.class'),
    root = '/widgets';

const MyWidgets = new widgets();

module.exports = (app) => {
    // list
    app.get(root + '/list', (req, res) => {
        res.send(MyWidgets.list());
    });

    // read
    app.get(root + '/:id', (req, res) => {
        const id = req.params.id,
            w = new widget(id);

        res.send(w.isLoaded ? w.data : null);
    });

    // create
    app.post(root, (req, res) => {
        const id = MyWidgets.getMaxId() + 1,
            w = new widget(id);

        try {
            w.name = req.body.name;
            w.description = req.body.description;
            w.price = req.body.price;
            w.save();
            res.send(true);
        } catch (e) {
            console.error(e);
            res.send(null);
        }
    });

    // update
    app.put(root + '/:id', (req, res) => {
        const id = req.params.id,
            w = new widget(id);

        try {
            if (req.body.name) {
                w.name = req.body.name || null;
            }
            if (req.body.description) {
                w.description = req.body.description || null;
            }
            if (req.body.price) {
                w.price = +req.body.price || null;
            }
            w.save();
            res.send(w.isLoaded ? true : null);
        } catch (e) {
            console.error(e);
            res.send(null);
        }
    });

    // delete
    app.delete(root + '/:id', (req, res) => {
        const id = req.params.id,
            w = new widget(id);

        res.send(w.isLoaded ? true : null);
        w.remove();
    });
};
