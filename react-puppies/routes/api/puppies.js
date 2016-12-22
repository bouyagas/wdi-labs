const express = require('express');
const router = express.Router();
const { getAllPuppies, adoptPuppy, abandonPuppy, likePuppy } = require('../../models/puppy');

// get all puppies
router.get('/', getAllPuppies, (req, res) => {
  res.json(res.puppies || []);
});

// Implement POST to adopt a puppy
router.post('/', adoptPuppy, (req, res) => {
  res.json({ message: 'successfully posted puppy'} );
});

// Implement PUT to like a puppy
router.put('/like/:id', likePuppy, (req, res) => {
  console.log('You like me!')
});

// Implement DELETE to abandon a puppy :{
router.delete('/:id', (req, res) => {
  console.log('Deleted');
});

module.exports = router;
