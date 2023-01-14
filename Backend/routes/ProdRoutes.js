const express = require("express");
const router = express.Router();
const Product = require("../model/ProductModel");

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json({ message: error });
    }
}
);

router.get("/:productId", async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post("/", async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        quantity: req.body.quantity,
        size: req.body.size,
        color: req.body.color,
        brand: req.body.brand,
    });
    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete("/:productId", async (req, res) => {
    try {
        const removedProduct = await Product.remove({ _id: req.params.productId });
        res.json(removedProduct);
    } catch (error) {
        res.json({ message: error });
    }
});

router.patch("/:productId", async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne(
            { _id: req.params.productId },
            { $set: { name: req.body.name } }
        );
        res.json(updatedProduct);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get("/search/:searchText", async (req, res) => {
    try {
        const products = await Product.find({
            $or: [
                { name: { $regex: req.params.searchText, $options: "i" } },
                { color: { $regex: req.params.searchText, $options: "i" } },
                { category: { $regex: req.params.searchText, $options: "i" } },
            ],
        });
        res.json(products);
    } catch (error) {
        res.json({ message: error });
    }
});

// Filter for t-shirts using specific attributes
//  Gender 
//  Colour 
//  Price range 
//  Type 
router.get("/tshirts", async (req, res) => {
    let filteredTShirts = tShirts;
    // Filter by gender
    if (req && req.query.gender) {
        filteredTShirts = filteredTShirts.filter(tShirt => tShirt.gender === req.query.gender);
    }
    // Filter by colour
    if (req && req.query.colour) {
        filteredTShirts = filteredTShirts.filter(tShirt => tShirt.colour === req.query.colour);
    }
    // Filter by price range
    if (req && req.query.priceRange) {
        const priceRange = req.query.priceRange.split("-");
        filteredTShirts = filteredTShirts.filter(tShirt => tShirt.price >= priceRange[0] && tShirt.price <= priceRange[1]);
    }
    // Filter by type
    if (req && req.query.type) {
        filteredTShirts = filteredTShirts.filter(tShirt => tShirt.type === req.query.type);
    }
    res.json(filteredTShirts);
});

let cart = [];

router.get('/add-to-cart/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  cart.push(product);
  res.json({message: 'Product added to cart', cart});
});

router.get('/cart', (req, res) => {
  res.json(cart);
});

module.exports = router;