var profiles = [
  {
    name: 'Talon Hughes',
    pic: 'http://placekitten.com/200/300',
    status: 'Get Shit Done'
  },
  {
    name: 'Lauren Hughes',
    pic: 'http://placekitten.com/200/300',
    status: 'Eat, Sleep, Yo'
  },
  {
    name: 'Cohen Hughes',
    pic: 'http://placekitten.com/200/300',
    status: 'Wow, I typed out smallfry1 and all you saw was ******?!?!??'
  },
  {
    name: 'Zoey Hughes',
    pic: 'http://placekitten.com/200/300',
    status: 'BARK BARK BARK'
  }
];

module.exports = {
  getCurrentUser: function(req, res) {
    var friends = req.session.currentUser.friends;

    var filteredFriends = profiles.filter(function(item){
       for(var i = 0; i < friends.length; i++){
        return item.name === friends[i];
       }
        });

    res.status(200).send({
      currentUser: req.session.currentUser,
      friends: filteredFriends
    });
  }
};
