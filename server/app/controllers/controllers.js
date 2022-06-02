const express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    Quiz = mongoose.model('Quiz'),
    Question = mongoose.model('Question');


module.exports = function (app) {
    app.use('/', router);

    router.route("/quizzes").get(function (req, res, next) {
        console.log('Get All Quizzes');
        var query = Quiz.find()
            .sort(req.query.order)
            .exec()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route("/quizzes/:id").get(function (req, res, next) {
        console.log('Get quiz ' + req.params.id);
        Quiz.findById(req.params.id)
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No doc found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route("/quizzes/quiz/:name").get(function (req, res, next) {
        console.log('Get quiz ' + req.params.name);
        Quiz.find({ quiz: req.params.name })
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No doc found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route("/quizzes/name/:name").get(function (req, res, next) {
        console.log('Get doc ' + req.params.name);
        Quiz.find({ name: req.params.name })
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No doc found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/quizzes').post(function (req, res, next) {
        console.log('Create Doc');
        console.log(req.body)
        var doc = new Quiz(req.body);
        doc.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/quizzes/:id').put(function (req, res, next) {
        console.log('Update quiz ' + req.params.id);
        Quiz.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/quizzes/:id').delete(function (req, res, next) {
        console.log('Delete doc ' + req.params.id);
        Quiz.remove({ _id: req.params.id })
            .then(doc => {
                res.status(200).json({ msg: "Document Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route("/questions").get(function (req, res, next) {
        console.log('Get All questions');
        var query = Question.find()
            .sort(req.query.order)
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: 'No docs' });
                }
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route("/questions/quiz/:quiz").get(function (req, res, next) {
        console.log('Get All questions');
        var query = Question.find({ unit: req.params.quiz })
            .sort(req.query.order)
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: 'No docs' });
                }
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route("/questions/:id").get(function (req, res, next) {
        console.log('Get ququestionsiz ' + req.params.id);
        Question.findById(req.params.id)
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No doc found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/questions').post(function (req, res, next) {
        console.log('Create questions');
        var doc = new Question(req.body);
        doc.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/questions/:id').put(function (req, res, next) {
        console.log('Update questions ' + req.params.id);
        Question.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/questions/:id').delete(function (req, res, next) {
        console.log('Delete questions ' + req.params.id);
        Question.remove({ _id: req.params.id })
            .then(doc => {
                res.status(200).json({ msg: "Document Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });

}    