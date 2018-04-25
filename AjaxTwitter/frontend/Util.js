const Util = {
  followUser: id => {
    Util.changeFollowStatus(id, 'POST')
  },

  unfollowUser: id => {
    Util.changeFollowStatus(id, 'DELETE')
  }
}

module.exports = Util;
