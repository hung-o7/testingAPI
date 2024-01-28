function test1(){
var client_id = '0bcfe0e23dbe4f00bd2d338121bcbcd8';
var redirect_uri = 'https://hung-o7.github.io/testingAPI/';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});
}