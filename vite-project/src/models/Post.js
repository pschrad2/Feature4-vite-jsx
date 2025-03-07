// Post Model (Belongs to a User)
import Parse from '../parseConfig';
import User from './User';

const Post = Parse.Object.extend("Post", {
  initialize: function() {
    this.set("author", new User());
  }
});

export default Post;
