"use strict";

const express = require( "express");
const axios = require("axios");
const fs = require("fs");
const fetch = require("node-fetch");
const NodeCache = require( "node-cache" );

const ISATokenInfo = require( "../../util/isaTokenInfo");
class ApeController {
  constructor()
  {
    this.cache = new NodeCache({ stdTTL: 5, checkperiod: 6 });
    this.ISATokenInfo = new ISATokenInfo();
  }
  
  async testReq(req, res) {
    var totalSupply = await this.ISATokenInfo.getTotalSupply(req.params.tokenAddress);
    console.log("node server log:", totalSupply);
    res.json({ message: "Requested successfully", totalSupply : totalSupply });
    // Task.find({}, function(err, task) {
    //   if (err)
    //     res.send(err);
    //   res.json(task);
    // });
  };

  // exports.create_a_task = function(req, res) {
  //   var new_task = new Task(req.body);
  //   new_task.save(function(err, task) {
  //     if (err)
  //       res.send(err);
  //     res.json(task);
  //   });
  // };

  // exports.read_a_task = function(req, res) {
  //   Task.findById(req.params.taskId, function(err, task) {
  //     if (err)
  //       res.send(err);
  //     res.json(task);
  //   });
  // };

  // exports.update_a_task = function(req, res) {
  //   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
  //     if (err)
  //       res.send(err);
  //     res.json(task);
  //   });
  // };

  // exports.delete_a_task = function(req, res) {

  //   Task.remove({
  //     _id: req.params.taskId
  //   }, function(err, task) {
  //     if (err)
  //       res.send(err);
  //     res.json({ message: 'Task successfully deleted' });
  //   });
  // };
}

module.exports = ApeController;
