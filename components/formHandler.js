import Yelp from "yelpv3";

import { YELP_CLIENT_ID, YELP_CLIENT_SECRET } from "react-native-dotenv";

var yelp = new Yelp({
  app_id: YELP_CLIENT_ID,
  app_secret: YELP_CLIENT_SECRET,
});

const submitForm = searchTerm => {
  event.preventDefault();
  yelp
    .search({
      text: searchTerm,
      latitude: 33.4155105,
      longitude: -111.910516,
    })
    .then(function(data) {
      return data;
    })
    .catch(function(err) {
      return err;
    });
};

export default submitForm;
