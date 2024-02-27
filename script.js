/**
 * Sample JavaScript code for youtube.videos.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/code-samples#javascript
 */

// function authenticate() {
//     return gapi.auth2.getAuthInstance()
//       .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
//       .then(function() { console.log("Sign-in successful"); },
//         function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("AIzaSyDSDhqWaf8SlzZyCkBF4Wv0ZEFslmQj8wY");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//       .then(function() { console.log("GAPI client loaded for API"); },
//         function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.youtube.videos.list({
//       "part": [
//         "snippet"
//       ],
//       "chart": "mostPopular",
//       "maxResults": 25,
//       "regionCode": "kr"
//     })
//       .then(function(response) {
//         // Handle the results here (response.result has the parsed body).
//         console.log("Response", response);
//       },
//         function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({ client_id: "480565195212-hlsv6ugibekr2pm4otj9lc2032p53m7o.apps.googleusercontent.com" });
//   });

  /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 25,
      "q": "조용필&&허공",
      "regionCode": "kr"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });