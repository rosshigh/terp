var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Product = mongoose.model('Product'),
    Review = mongoose.model('Review'),
    Orders = mongoose.model('Orders'),
    Ingredients = mongoose.model('Ingredients'),
    Favorites = mongoose.model('Favorites'),
    CustomerProfile = mongoose.model('CustomerProfile'),
    Promotions = mongoose.model('Promotions'),
    multer = require('multer'),
    upload = multer();


module.exports = function (app) {
    app.use('/', router);

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
        var query = Review.find({ product: req.params.id })
            .sort({ creationDate: 1 })
            .exec()
            .then(result => {                if (result && result.length) {
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
        console.log(req.body)
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
        query.populate({ path: 'productId', model: 'Product', select: 'name' })
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

    router.route("/orders/customer/:id").get(function (req, res, next) {
        console.log('Get order for customer' + req.params.id);
        let query = Orders.find({customerId: req.params.id})
        query.populate({ path: 'productId', model: 'Product', select: 'name' })
        .exec()
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
        console.log(req.body)
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

    router.route("/ingredients").get(function (req, res, next) {
        console.log('Get All ingredients');
        var query = Ingredients.find()
            .sort(req.query.order)
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: 'No ingredients' });
                }
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route("/ingredients/:id").get(function (req, res, next) {
        console.log('Get ingredients ' + req.params.id);
        Ingredients.findById(req.params.id)
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No ingredients found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route("/ingredients/product/:id").get(function (req, res, next) {
        console.log('Get ingredients ' + req.params.id);
        Ingredients.find({ productId: req.params.id })
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No ingredients found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/ingredients').post(function (req, res, next) {
        console.log('Create ingredients');
        var order = new Ingredients(req.body);
        order.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/ingredients/:id').put(function (req, res, next) {
        console.log('Update ingredients ' + req.params.id);
        Ingredients.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/ingredients/:id').delete(function (req, res, next) {
        console.log('Delete ingredients ' + req.params.id);
        Ingredients.remove({ _id: req.params.id })
            .then(doc => {
                res.status(200).json({ msg: "Ingredients Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route("/favorites").get(function (req, res, next) {
        console.log('Get All favorites');
        var query = Favorites.find()
            .sort(req.query.order)
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: 'No favorites' });
                }
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route("/favorites/:id").get(function (req, res, next) {
        console.log('Get favorites ' + req.params.id);
        Favorites.findById(req.params.id)
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No favorites found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route("/favorites/customer/:id").get(function (req, res, next) {
        console.log('Get favorites ' + req.params.id);
        let query = Favorites.find({ customerId: req.params.id })
        .exec()
            .then(doc => {              
                if (doc) {                   
                    let products = [];
                    doc.forEach(item => {
                        products.push(item.productId);
                    })
                    Product.find({_id : {$in: products}}, function(err, results){
                        res.status(200).json(results);
                    })
                } else {
                    res.status(404).json({ message: "No favorites found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    // router.route("/favorites/customer/:id").get(function (req, res, next) {
    //     console.log('Get favorites ' + req.params.id);
    //     let query = Favorites.find({ customerId: req.params.id })
    //     query.populate({ path: 'productId', model: 'Product', select: 'name photo price' }).exec()
    //         .then(doc => {
    //             if (doc) {
    //                 res.status(200).json(doc);
    //             } else {
    //                 res.status(404).json({ message: "No favorites found" });
    //             }
    //         })
    //         .catch(error => {
    //             return next(error);
    //         });
    // });

    router.route('/favorites').post(function (req, res, next) {
        console.log('Create favorites');
        console.log(req.body)
        var order = new Favorites(req.body);
        order.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/favorites/:id').put(function (req, res, next) {
        console.log('Update favorites ' + req.params.id);
        Favorites.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/favorites/:id').delete(function (req, res, next) {
        console.log('Delete favorites ' + req.params.id);
        Favorites.remove({ _id: req.params.id })
            .then(doc => {
                res.status(200).json({ msg: "favorites Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route("/promotions").get(function (req, res, next) {
        console.log('Get All promotions');
        var query = Promotions
        
        .find()
        query.populate({ path: 'productId', model: 'Product', select: 'name photo' })
            .sort(req.query.order)
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: 'No promotions' });
                }
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route("/promotions/:id").get(function (req, res, next) {
        console.log('Get promotions ' + req.params.id);
        Promotions.findById(req.params.id)
            .then(doc => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No promotions found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/promotions').post(function (req, res, next) {
        console.log('Create promotions');
        console.log(req.body)
        var order = new Promotions(req.body);
        order.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/promotions/:id').put(function (req, res, next) {
        console.log('Update promotions ' + req.params.id);
        Promotions.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/promotions/:id').delete(function (req, res, next) {
        console.log('Delete promotions ' + req.params.id);
        Promotions.remove({ _id: req.params.id })
            .then(doc => {
                res.status(200).json({ msg: "promotions Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });
};