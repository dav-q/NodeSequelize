'use strict';

const Models = require("./../models");

exports.index = function (req, res) {

    Models.User.findAll({
        include : ['has_rol']
    })
        .then(users => {
            console.log(users);
            res.send(users)
        })
        .catch(err => {
            res.send(err)
        })
};

exports.store = function (req, res) {

    var data = req.body;

    const user = Models.User.create(data)
    .then(users => {
        res.send(users)
    })
    .catch(err => {
        res.send(err)
    });

};

exports.show = function (req, res) {

    Models.User.findByPk(req.params.userId)
        .then(user => {
            if (user != null)
                res.send(user)
            res.status(400).send({ message: 'Usuario no encontrado' });
        })
        .catch(err => {
            res.status(500).send('Error interno');
        })
};

exports.update = function (req, res) {

    var data = req.body;
    var userId = req.params.userId

    Models.User.update(data, {
        where: {
            id: userId
        }
    }).then(users => {
        res.send(users)
    }).catch(err => {
        res.send(err)
    })

};

exports.destroy = function (req, res) {

    var userId = req.params.userId

    Models.User.destroy({
        where: {
            id: userId
        }
    }).then(users => {
        res.json({message: "Eliminado!"})
    }).catch(err => {
        res.send(err)
    })

};
