function reverse(str) {
    var len = str.split(" ").length;
	var revstr = ""; 
while (len > 0) {
	len--;
	revstr += str.split(" ")[len];
	revstr += ' ';
}
return revstr;
}

reverse("Мама мыла раму");
