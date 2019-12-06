import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();
const map = google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});

map();

console.log(user, company);
// AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU

// install type definitions file for faker @types/faker
// install type definitions file for faker @types/googlemaps

// add in html
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU"></script>
// <div id="map" style="height: 100%;"></div
