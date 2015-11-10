/**
 * 
 */

(function(){
	
	angular.module('eateryApp')
		.factory('yelp',yelp);

	yelp.$inject=['$http'];
	
	function yelp($http) {
		
		var factory={
			retrive:retrive
		};
		
		return factory;
		
		function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        }
		
		function retrive(inputs,callback){
			
			var method = 'GET';
            var url = 'http://api.yelp.com/v2/search?callback=JSON_CALLBACK';
            var params = {
            		callback: 'JSON_CALLBACK',
            		location: 'Newyork',
                    oauth_consumer_key: 'PesxQ-_5g82gt-RVlQ9ESw', //Consumer Key
                    oauth_token: 'FefbZqLQ7cmmZ4IX3821APujVDxqbkCK', //Token
                    oauth_signature_method: "HMAC-SHA1",
                    oauth_timestamp: new Date().getTime(),
                    oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                    term: inputs.term,
                    limit:10
                };
            var consumerSecret = 'IS8Q-AuWizh8aFztN5asYHxbGVw'; //Consumer Secret
            var tokenSecret = 'us8EPZeDBPRh278wjUHcmEcqKp8'; //Token Secret
            var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
            params['oauth_signature'] = signature;
            $http.jsonp(url, {params: params}).then(callback,function(err){
            	console.log(err);
            });
		}
	}

	
})();
