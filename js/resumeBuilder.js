// $("#main").append("Aaron Harvey");

// [string].replace([old], [new])

// var email = "cameron@udacity.com";

// var newEmail = email.replace("udacity", "gmail");

// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = "My name is Cameron and I am AWESOME!";

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Aaron Harvey");

$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").append(formattedRole);