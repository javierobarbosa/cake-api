const cakeServices = require('../services/cakeServices');

module.exports = {
  create: async(req, res) => {
    try {
      let cakeName =  req.body.name;
      const cake = await cakeServices.getCakeByName(cakeName);      
      if (cake)
        res.status(409).send({error:"Cake Already Exist"});
      else {
        const newCake = await cakeServices.create(req.body);
        res.status(201).send({newCake});
      }        
    } catch (error) {
      console.log(error);
       res.status(409).send({error});
    }
  },
  getCakes: async(req, res)=>{
    try {
      const cakes = await cakeServices.getCakes();
      res.status(200).send({cakes});
    } catch (error) {
        console.log("error:",error);
      res.status(404).send({error});
    }
  },
  getCake: async(req, res)=>{
    try {
      const cake = await cakeServices.getCakeByName(req.query.name);
      console.log(cake);
      res.status(200).send({cake});
    } catch (error) {
    console.log("error:",error);
      res.status(404).send({error});
    }
  },
  updateCake: async(req, res)=>{
    try {
      const cake = await cakeServices.getCakeByName(req.query.name);
      if (cake){
        delete req.body.name;
        const modifiedCake = await cakeServices.updateCake(cake, req.body);
        res.status(200).send({user: modifiedCake});
      }
      else 
        res.status(409).send({error:"Cake Does Not Exist"});      
    } catch (error) {
        console.log("error:",error);
      res.status(404).send({error});
    }
  },
  deleteCake: async(req, res)=>{
    try {
      const cake = await cakeServices.getCakeByName(req.query.name);
      await cakeServices.updateCake(cake, {is_active: false});
      res.status(200).send({message: 'Cake Successfully Deleted'});
    } catch (error) {
        console.log("error:",error);
      res.status(404).send({error});
    }
  }
}