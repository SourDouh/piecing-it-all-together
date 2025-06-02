const express = require('express')
const router = express.Router()
const FlashcardSchema = require('../models/flashcard.js');
//const flashcard = require('../models/flashcard.js');

router.get('/', async (req, res) => {
  try {
    const card = await FlashcardSchema.find();
    console.log("got the database")
    console.log(card)
    res.json(card);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error:/n' + e + '/n End Error Message');
  }
})

//Read/get by id
router.get('/:id', async (req, res) => {
  try {
    const card = await FlashcardSchema.findById(req.body.id);
    console.log("found card")
    console.log(card)
    res.json(card);
  } catch (e) {
    console.error(e);    
    res.status(500).send('Internal Server Error:/n' + e + '/n End Error Message');
  }
})


//we will be using the '/add' to do a POST request
router.post('/add', async (req, res) => {
  console.log("trying to do a post request (routes.js)")
   try{
    console.log('---------------------------------------------------')
    console.log(req.body)
    console.log('---------------------------------------------------')
    const card = new FlashcardSchema(req.body)
    console.log('---------------------------------------------------')
    console.log(card)
    console.log('---------------------------------------------------')
    console.log(await card.save())
    console.log('---------------------------------------------------')
    const saved = await card.save()
    console.log('---------------------------------------------------')
    console.log(saved)
    console.log('---------------------------------------------------')
    res.json(saved)
   }catch(e){
    console.log(e)
    res.status(500).send('Internal Server Error:/n' + e + '/n End Error Message');
   }
})

//TODO: change '/' below to be by id
router.put('/update/:id', async (req, res) => {
  try{
    const card = await FlashcardSchema.findByIdAndUpdate(
      req.body.id,
      { $set: req.body },
      { new: true }
    )
  }catch(e){
    console.error(e);    
    res.status(500).send('Internal Server Error:/n' + e + '/n End Error Message');
  }
})

//TODO: change '/' below to be by id
router.delete('/delete/:id', async(req, res) => {
  try {
    await FlashcardSchema.findByIdAndDelete(req.body.id);
    res.json({ msg: 'Flashcard Deleted' });
  } catch (e) {
    console.log(e)
    res.status(500).send('Internal Server Error:/n' + e + '/n End Error Message');  }
})

module.exports = router
