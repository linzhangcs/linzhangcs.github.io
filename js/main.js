// Redirect to the projects page
// Add the addEventListener for the redirect
window.onload = function(event) {
  if (window.location.pathname === '/') {
    console.log("index");
    window.location.pathname = '/projects.html'
  }
}