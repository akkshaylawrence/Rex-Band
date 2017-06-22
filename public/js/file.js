// Create a reference to the file we want to download
var starsRef = storageRef.child('images/stars.jpg');
// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
}).catch(function(error) {
  switch (error.code) {
    case 'storage/object_not_found':
      // File doesn't exist
      break;
  }
});