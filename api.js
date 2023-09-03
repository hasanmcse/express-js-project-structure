const express = require('express');
const router = express.Router();

// require controller
const blogController = require('../Controllers/blogController')
const blogDetailsController = require('../Controllers/blogDetailsController')
const commentController = require('../Controllers/commentController')
const messageController = require('../Controllers/messageController')
const portfolioController = require('../Controllers/portfolioController')
const productController = require('../Controllers/productController')
const profitController = require('../Controllers/profitController')
const projectController = require('../Controllers/projectController')
const serviceController = require('../Controllers/serviceController')
const titleController = require('../Controllers/titleController')








//blog route api
router.get('/blog', blogController.create);
router.get('/blog/read', blogController.read);//use by :id
router.get('/blog/update', blogController.update);//use by :id
router.get('/blog/delete', blogController.delete); //use by :id

//blogdetails route api
router.get('/blogdetails', blogDetailsController.create);//use by :id
router.get('/blogdetails/read', blogDetailsController.read);//use by :id
router.get('/blogdetails/update', blogDetailsController.update);//use by :id
router.get('/blogdetails/delete', blogDetailsController.delete);//use by :id

//comment route api
router.get('/comment', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/update', commentController.update);
router.get('/comment/delete', commentController.delete);

// message route api
router.get('/message', messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/update', messageController.update);
router.get('/message/delete', messageController.delete);

//portfolio route api
router.get('/portfolio', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/update', portfolioController.update);
router.get('/portfolio/delete', portfolioController.delete);

// product route api
router.get('/product', productController.create);
router.get('/product/read', productController.read);
router.get('/product/update', productController.update);
router.get('/product/delete', productController.delete);

// profit route api
router.get('/profit', profitController.create);
router.get('/profit/read', profitController.read);
router.get('/profit/update', profitController.update);
router.get('/profit/delete', profitController.delete);

// project route api
router.get('/project', projectController.create);
router.get('/project/read', projectController.read);
router.get('/project/update', projectController.update);
router.get('/project/delete', projectController.delete);


// service route api
router.get('/service', serviceController.create);
router.get('/service/read', serviceController.read);
router.get('/service/update', serviceController.update);
router.get('/service/delete', serviceController.delete);


// title route api
router.get('/title', titleController.create);
router.get('/title/read', titleController.read);
router.get('/title/update', titleController.update);
router.get('/title/delete', titleController.delete);




module.exports=router;