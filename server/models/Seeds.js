//Sitter Data

var sitter1 = new BabySitter ({
	firstName: "Tara",
	lastName: "Hensle", 
	birthdayMonth: 10,
	birthdayDay: 28,
	birthdayYear: 1987,
	gender: 1,
	email: "tara@email.com", 
	password: "something",
	isAvailable: true,
	phoneNumber: "8122292590",
	bio: "Savvy babysitter biography",
	certifications: "First Aid",
	ratePerHour: 20.50,
	numFavs: 6
});
var sitter2 =
var sitter3 =
var sitter4 =
var sitter5 =

var parent1 = new Parent ({
	firstName: "Honey",
	lastName: "Boo Boo", 
	email: "yaaass@email.com", 
	password: "yasas",
	address: "10 Shadow Creek Chicago IL 60640",
	phoneNumber: "1824619445",
	numChildren: 4,
	emergencyFirstName: "Joyce",
	emergencyLastName: "Levitt", 
	emergencyPhoneNumber: "1824651795",
	doctorLastName: "Boring",
	doctorPhoneNumber: "5552125875",
	wifiDomain: "honeyboobooChild",
	wifiPassword: "yaaaaaassssss",
	favSitters: 3
});

var parent2 =
var parent3 =
var parent4 =
var parent5 =
	
sitter1.save(function(error, data){
	if (error){
		console.log("Error!");
	} else {
		console.log("Instance successfully created!");
	};
});

sitter2.save(function(error, data){
	if (error){
		console.log("Error!");
	} else {
		console.log("Instance successfully created!");
	};
}); 

sitter3.save(function(error, data){
	if (error){
		console.log("Error!");
	} else {
		console.log("Instance successfully created!");
	};
}); 

sitter4.save(function(error, data){
	if (error){
		console.log("Error!");
	} else {
		console.log("Instance successfully created!");
	};
}); 

sitter5.save(function(error, data){
	if (error){
		console.log("Error!");
	} else {
		console.log("Instance successfully created!");
	};
}); 

parent1.save(function(error, data){
	if (error){
		console.log("Error!");
	} else {
		console.log("Instance successfully created!");
	};
}); 

parent2.save(function(error, data){
	if (error){
		console.log("Error!");
	} else {
		console.log("Instance successfully created!");
	};
}); 

parent3.save(function(error, data){
	if (error){
		console.log("Error!");
	} else {
		console.log("Instance successfully created!");
	};
});

parent4.save(function(error, data){
	if (error){
		console.log("Error!");
	} else {
		console.log("Instance successfully created!");
	};
}); 

parent5.save(function(error, data){
	if (error){
		console.log("Error!");
	} else {
		console.log("Instance successfully created!");
	};
});