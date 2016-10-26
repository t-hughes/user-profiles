var profiles = [
  {
    name: 'Talon Hughes',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
    status: 'Get Shit Done'
  },
  {
    name: 'Lauren Hughes',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'Eat, Sleep, Yo'
  },
  {
    name: 'Cohen Hughes',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
    status: 'Wow, I typed out smallfry1 and all you saw was ******?!?!??'
  },
  {
    name: 'Zoey Hughes',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
    status: 'BARK BARK BARK'
  }
];

module.exports = {
  getFriends: function(req, res) {
    var friendsArr = [];
    for (var i = 0; i < req.session.currentUser.friends.length; i++) {
      for (var j = 0; j < profiles.length; j++) {
        if (req.session.currentUser.friends[i] === profiles[j].name) {
          friendsArr.push(profiles[j]);
        }
      }
    }
    res.status(200).send({
      currentUser: req.session.currentUser,
      friends: friendsArr
    });

  }
};
