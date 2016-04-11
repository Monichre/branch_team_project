function Dog(name, breed, age, colors, gender, temperment){
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.colors = colors;
  this.gender = gender;
  this.temperment = temperment;
}

Dog.neutered = true;
Dog.adopted = true;


// UI LOGIC ******************************************************
$(document).ready(function(){

	$('form').submit(function(e){
		e.preventDefault();

		var dogName = $("#nameSubmit").val();
		var dogBreed = $("#breedSubmit").val();
		var dogAge = $("#ageSubmit").val();
		var dogColors = $("#colorationSubmit").val();
		var dogGender = $("#genderSubmit").val();
		var dogTemperment = $("#tempermentSubmit").val();



		var newDog = new Dog(dogName, dogBreed, dogAge, dogColors, dogGender, dogTemperment);

		console.log(dogName);
		console.log(dogBreed);
		console.log(dogAge);
		console.log(dogColors);
		console.log(dogGender);
		console.log(dogTemperment);
		console.log(newDog);

	});

});