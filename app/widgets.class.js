const fs = require('fs'),
    widget = require('./widget.class'),
    path = './widgets',
    ext = '.widget';

class Widgets {

    list() {
        const files = fs.readdirSync(path).map(m => {
            return +m.replace('.widget', '');
        });
        return files.map(m => {
            const w = new widget(m);
            return w.data;
        });
    }

    getMaxId() {
        const files = fs.readdirSync(path).map(m => {
            return +m.replace('.widget', '');
        });
        files.sort();
        return files.pop();
    }
}

module.exports = Widgets;