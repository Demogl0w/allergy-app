import { YELP_CLIENT_ID, YELP_CLIENT_SECRET } from "react-native-dotenv";
import Yelp from "yelpv3";

var yelp = new Yelp({
  app_id: YELP_CLIENT_ID,
  app_secret: YELP_CLIENT_SECRET,
});

class sampleApi {
  static get() {
    // Just return the host value to make sure our .env is working
    // return YELP_CLIENT_ID;
    const searchTerm = "pizza";
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
  }
}

export default sampleApi;
