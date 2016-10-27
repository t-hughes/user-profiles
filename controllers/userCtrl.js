var users = [
  {
    name: 'Talon Hughes',
    password: 'password1',
    friends: ['Lauren Hughes', 'Cohen Hughes']
  },
  {
    name: 'Lauren Hughes',
    password: '$akgfl#',
    friends: ['Talon Hughes']
  },
  {
    name: 'Cohen Hughes',
    password: 'smallfry1',
    friends: ['Talon Hughes', 'Lauren Hughes']
  },
  {
    name: 'Zoey Hughes',
    password: '777kittens777',
    friends: ['Talon Hughes', 'Lauren Hughes', 'Cohen Hughes']
  }
];

module.exports = {
  login: function(req, res) {
      var filtered = users.filter(function(item){
        return item.name === req.body.name;
      });
      if(filtered[0]){
        if(filtered[0].password === req.body.password) {
          req.session.currentUser = filtered[0];
          console.log('USER FOUND');
          res.status(200).send({userFound: true});
      }
    } else {
    console.log('USER NOT FOUND!');
    res.status(401).send({userFound: false});
  }
  }
};
