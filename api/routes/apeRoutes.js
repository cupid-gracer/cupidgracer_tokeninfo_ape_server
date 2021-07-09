"use strict";

module.exports = function (app) {
  var apeController = require("../controllers/apeController");
  var ape = new apeController();

  // ape Routes
  app.get("/getTotalSupply/:tokenAddress", function (req, res) {
    ape.testReq(req, res);
  });
  // .get(ape.testReq);
  // .post(ape.create_a_task);

  // app.route('/tasks/:taskId')
  //   .get(ape.read_a_task)
  //   .put(ape.update_a_task)
  //   .delete(ape.delete_a_task);
};
