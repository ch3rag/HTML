window.onload = function() {
	const curDate = new Date();
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	document.getElementById("date").innerHTML = days[curDate.getDay()] + ", " + months[curDate.getMonth()] + " " + curDate.getDate() + ", " + curDate.getFullYear();
}