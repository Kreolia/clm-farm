import express from "express";
import farm from "./farm.js";

const getFarm = async (req, res, next) => {
  res.status(200).json(farm);
}

export default getFarm;