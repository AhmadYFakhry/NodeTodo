const Todos = require("../models/todoModel");

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        const start = [{
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachement: false,
            },
            {
                username: 'test',
                todo: 'Feed dogs',
                isDone: false,
                hasAttachement: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachement: false
            }
        ];
        Todos.create(start, function (err, results) {
            res.send(results);
        });
    });
}