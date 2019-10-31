var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Model = mongoose.model('Document'),
	Quiz = mongoose.model('Quiz'),
	Question = mongoose.model('Question'),
	People = mongoose.model('Person'),
	CustomerProfile = mongoose.model('CustomerProfile'),
	Event = mongoose.model('Event'),
	multer = require('multer'),
	mkdirp = require('mkdirp'),
	passportService = require('./passport'),
	passport = require('passport'),
	Product = mongoose.model('Product'),
    Review = mongoose.model('Review'),
    Orders = mongoose.model('Orders').
    CustomerProfile = mongoose.model('CustomerProfile');


var requireAuth = passport.authenticate('jwt', { session: false }),
	requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {
	app.use('/', router);

	router.route('/login')
		.post(requireLogin, login);

	router.route("/docs").get(function (req, res, next) {
		console.log('Get All Docs');
		var query = Model.find()
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

	router.route("/docs/:id").get(function (req, res, next) {
		console.log('Get user ' + req.params.id);
		Model.findById(req.params.id)
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

	router.route("/docs/type/:type").get(function (req, res, next) {
		console.log('Get doc ' + req.params.type);
		Model.find({ type: req.params.type })
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

	router.route("/docs/name/:name").get(function (req, res, next) {
		console.log('Get doc ' + req.params.name);
		Model.find({ name: req.params.name })
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

	router.route('/docs').post(function (req, res, next) {
		console.log('Create Doc');
		var doc = new Model(req.body);
		doc.save()
			.then(result => {
				res.status(201).json(result);
			})
			.catch(err => {
				return next(err);
			});
	});

	router.route('/docs/:id').put(function (req, res, next) {
		console.log('Update doc ' + req.params.id);
		Model.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
			.then(doc => {
				res.status(200).json(doc);
			})
			.catch(error => {
				return next(error);
			});
	});

	router.route('/docs/:id').delete(function (req, res, next) {
		console.log('Delete doc ' + req.params.id);
		Model.remove({ _id: req.params.id })
			.then(doc => {
				res.status(200).json({ msg: "Document Deleted" });
			})
			.catch(error => {
				return next(error);
			});
	});

	var storage = multer.diskStorage({
		destination: function (req, file, cb) {
			var path = './public/uploads/' + req.params.container;
			mkdirp(path, function (err) {
				if (err) {
					res.status(500).json(err);
				} else {
					cb(null, path);
				}
			});
		},
		filename: function (req, file, cb) {
			cb(null, file.originalname);
		}
	});

	var upload = multer({ storage: storage }).any();

	router.post('/docs/upload/:container/:id', function (req, res, next) {
		req.socket.setTimeout(20 * 60 * 1000);
		upload(req, res, function (err) {
			if (err) {
				console.log(err);
			}
			Model.findById(req.params.id, function (err, download) {
				if (err) {
					return next(err);
				} else {
					for (var i = 0, x = req.files.length; i < x; i++) {
						var file = {
							originalFilename: req.files[i].originalname,
							fileName: req.files[i].filename,
							dateUploaded: new Date()
						};
						download.file = file;
					}
					download.save(function (err, download) {
						if (err) {
							return next(err);
						} else {
							res.status(200).json(download);
						}
					});
				}
			});
		});
	});

	router.route("/events").get(function (req, res, next) {
		console.log('Get All event');
		var query = Event.find()
			.sort(req.query.order)
			.exec()
			.then(result => {
				if (result && result.length) {
					res.status(200).json(result);
				} else {
					res.status(404).json([]);
				}
			})
			.catch(err => {
				return next(err);
			});
	});

	router.route("/events/:id").get(function (req, res, next) {
		console.log('Get event ' + req.params.id);
		Event.findById(req.params.id)
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

	router.route("/events/name/:name").get(function (req, res, next) {
		console.log('Get event ' + req.params.name);
		Event.find({ name: req.params.name })
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

	router.route('/events').post(function (req, res, next) {
		console.log('Create event');
		var doc = new Event(req.body);
		doc.save()
			.then(result => {
				res.status(201).json(result);
			})
			.catch(err => {
				return next(err);
			});
	});

	router.route('/events/:id').put(function (req, res, next) {
		console.log('Update event ' + req.params.id);
		Event.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
			.then(doc => {
				res.status(200).json(doc);
			})
			.catch(error => {
				return next(error);
			});
	});

	router.route('/events/:id').delete(function (req, res, next) {
		console.log('Delete event ' + req.params.id);
		Event.remove({ _id: req.params.id })
			.then(doc => {
				res.status(200).json({ msg: "Document Deleted" });
			})
			.catch(error => {
				return next(error);
			});
	});

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

	router.route("/people").get(function (req, res, next) {
		console.log('Get All people');
		var query = People.find()
			.sort(req.query.order)
			.exec()
			.then(result => {
				if (result && result.length) {
					res.status(200).json(result);
				} else {
					res.status(404).json([]);
				}
			})
			.catch(err => {
				return next(err);
			});
	});

	router.route("/people/:id").get(function (req, res, next) {
		console.log('Get event ' + req.params.id);
		People.findById(req.params.id)
			.then(doc => {
				if (doc) {
					res.status(200).json(doc);
				} else {
					res.status(404).json({ message: "No people found" });
				}
			})
			.catch(error => {
				return next(error);
			});
	});

	router.route("/people/name/:name").get(function (req, res, next) {
		console.log('Get people ' + req.params.name);
		People.find({ name: req.params.name })
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

	router.route('/people').post(function (req, res, next) {
		console.log('Create people');
		var doc = new People(req.body);
		doc.save()
			.then(result => {
				res.status(201).json(result);
			})
			.catch(err => {
				return next(err);
			});
	});

	router.route('/people/:id').put(function (req, res, next) {
		console.log('Update people ' + req.params.id);
		People.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
			.then(doc => {
				res.status(200).json(doc);
			})
			.catch(error => {
				return next(error);
			});
	});

	router.route('/people/:id').delete(function (req, res, next) {
		console.log('Delete people ' + req.params.id);
		People.remove({ _id: req.params.id })
			.then(doc => {
				res.status(200).json({ msg: "people Deleted" });
			})
			.catch(error => {
				return next(error);
			});
	});


	router.route("/profile").get(function (req, res, next) {
        console.log('Get All Docs');
        var query = CustomerProfile.find()
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

    router.route("/profile/:id").get(function (req, res, next) {
        console.log('Get profile ' + req.params.id);
        CustomerProfile.findById(req.params.id)
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No profile found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/profile').post(function (req, res, next) {
        console.log('Create profile');
        var profile = new CustomerProfile(req.body);
        profile.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/profile/:id').put(function (req, res, next) {
        console.log('Update people ' + req.params.id);
        CustomerProfile.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/profile/:id').delete(function (req, res, next) {
        console.log('Delete profile ' + req.params.id);
        CustomerProfile.remove({ _id: req.params.id })
            .then(doc => {
                res.status(200).json({ msg: "Profile Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route("/products").get(function (req, res, next) {
        console.log('Get All products');
        var query = Product.find()
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

    router.route("/products/:id").get(function (req, res, next) {
        console.log('Get product ' + req.params.id);
        Product.findById(req.params.id)
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No profile found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/products').post(function (req, res, next) {
        console.log('Create product');
        var product = new Product(req.body);
        product.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/products/:id').put(function (req, res, next) {
        console.log('Update product ' + req.params.id);
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/products/:id').delete(function (req, res, next) {
        console.log('Delete product ' + req.params.id);
        Product.remove({ _id: req.params.id })
            .then(doc => {
                res.status(200).json({ msg: "Product Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route("/review").get(function (req, res, next) {
        console.log('Get All review');
        var query = Review.find()
            .sort(req.query.order)
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: 'No reviews' });
                }
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route("/review/product/:id").get(function (req, res, next) {
        console.log('Get All review');
        var query = Review.find({product: req.params.id})
            .sort({creationDate: 1})
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: 'No reviews' });
                }
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route("/review/:id").get(function (req, res, next) {
        console.log('Get review ' + req.params.id);
        Review.findById(req.params.id)
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No review found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/review').post(function (req, res, next) {
        console.log('Create review');
        var review = new Review(req.body);
        review.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/review/:id').put(function (req, res, next) {
        console.log('Update review ' + req.params.id);
        Review.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/review/:id').delete(function (req, res, next) {
        console.log('Delete review ' + req.params.id);
        Review.remove({ _id: req.params.id })
            .then(doc => {
                res.status(200).json({ msg: "review Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route("/orders").get(function (req, res, next) {
        console.log('Get All orders');
        var query = Orders.find()
            .sort(req.query.order)
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: 'No orders' });
                }
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route("/orders/:id").get(function (req, res, next) {
        console.log('Get order ' + req.params.id);
        Orders.findById(req.params.id)
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No order found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/orders').post(function (req, res, next) {
        console.log('Create order');
        var order = new Orders(req.body);
        order.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/orders/:id').put(function (req, res, next) {
        console.log('Update order ' + req.params.id);
        Orders.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/orders/:id').delete(function (req, res, next) {
        console.log('Delete order ' + req.params.id);
        Orders.remove({ _id: req.params.id })
            .then(doc => {
                res.status(200).json({ msg: "Order Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });

};