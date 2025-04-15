const Product = require("../models/model.product");

const getAllProducts = async (req, res) => {
  try {
    const { company, price, featured, sort, select } = req.query;

    const queryObject = {};

    if (company) {
      queryObject.company = { $regex: company, $options: "i" };
    }

    if (price) {
      queryObject.price = Number(price);
    }

    if (featured) {
      queryObject.featured = featured === "true";
    }

    let apiData = Product.find(queryObject);

    if (sort) {
      let sortFix = sort.split(",").join(" ");
      apiData = apiData.sort(sortFix);
    }

    if (select) {
      let selectFix = select.split(",").join(" ");
      apiData = apiData.select(selectFix);
    }


    let page = Number(req.query.page) ||1;
    let limit = Number(req.query.limit) ||10;

    let skip = (page-1 )*limit;
    apiData = apiData.skip(skip).limit(limit);

    const products = await apiData;
    res.status(200).json({ success: true, count: products.length, products });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({});
};

module.exports = { getAllProducts, getAllProductsTesting };
