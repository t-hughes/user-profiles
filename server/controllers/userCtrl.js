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
  login: function(req, res, next) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].name == req.body.name && users[i].password == req.body.password) {
          req.session.currentUser = users[i];
          userFoundValue = true;
          break;
      }
      else {
        userFoundValue = false;
      }
    }

    res.send({ userFound: userFoundValue });
  },

};
