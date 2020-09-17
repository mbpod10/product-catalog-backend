// post new review based on product id
router.put("/add/review/:id", (req, res) => {
  const review = new Review(req.body);
  review.save((error) => {
    if (error) console.log(error);
    else {
      Product.findByIdAndUpdate(
        req.params.id,
        { $push: { reviews: review } },
        { new: true },
        (error, review) => {
          if (error) console.log(error);
          else {
            res.json(review);
          }
        }
      );
    }
  });
});
