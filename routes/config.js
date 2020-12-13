var request = require('request');
var sanboxUrl = 'https://api.sandbox.paypal.com';
var clientId = "ASmYXVgtZ1xPxWsfZwt6QZ1WlaF5UMg76Vx696uf6kpv19ICkBkginb2D0WzGC2IoAv1LXFP85vp_AMU"; //india-business
var secret = "ELD6BbRRGvvrnA30EhOqZf17gKz8OTMRDnBaTAQdGiQ4lPCprCrD32u5u6NMF5zTEdHonr_MynsqNgsN";
var basicAuth = new Buffer.from(clientId+":"+secret).toString('base64') ;

var initialize = function(){  
    var options = {
        uri: sanboxUrl + '/v1/oauth2/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic '+basicAuth
        },
        body: "grant_type=client_credentials&response_type=token&return_authn_schemes=true"
            
    }; 
    return new Promise(function(resolve, reject) { 
        request(options, function (err, response) {
            if (err) {
                console.error(err);
                reject(err);
            }
            var access_token = JSON.parse(response.body).access_token; 
            console.log(access_token);
            resolve(access_token);
        });
    });
};

module.exports = initialize;
