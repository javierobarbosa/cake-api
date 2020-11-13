const Cake = require("../models/Cake");

module.exports = {
  create: (body) => {
    const newCake = new Cake(body);
    return newCake.save();
  },
  getCakes: () => Cake.find({ is_active: true }),
  getCake: (id) => Cake.findById(id),
  getCakeByName: (name) => Cake.findOne({ 'name': name, "is_active":true }),
  updateCake: (cake, body) => {
  Object.assign(cake, body);
    return cake.save();
  }
};
