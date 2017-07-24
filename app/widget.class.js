const path = './widgets',
    ext = '.widget',
    fs = require('fs');

class Widget {

    get fileName() {
        return `./widgets/${this.id}${ext}`;
    }

    get data() {
        return {
            id: +this.id,
            name: this.name,
            description: this.description,
            price: +this.price
        };
    }

    get isLoaded() {
        return Boolean(this._isLoaded);
    }

    constructor(id) {
        this.id = +id;
        this.name = null;
        this.description = null;
        this.price = null;
        this.load();
    }

    save() {
        fs.writeFileSync(this.fileName, JSON.stringify(this.data));
    }

    load() {
        this._isLoaded = false;
        if (fs.existsSync(this.fileName)) {
            const obj = JSON.parse(fs.readFileSync(this.fileName, 'utf8'));
            try {
                this.name = obj.name;
                this.description = obj.description;
                this.price = obj.price;
                this._isLoaded = true;
            } catch (e) {
                console.error(e.message);
            }
        }
    }

    remove() {
        if (fs.existsSync(this.fileName)) {
            fs.unlinkSync(this.fileName);
        }
    }
}

module.exports = Widget;