var h1 = document.createElement('h1');
h1.innerText = "Suhani Verma";

var body = document.querySelector("body");
body.appendChild(h1);

h1.style.textDecoration = "underline";
body.appendChild(h1);

var summary = document.createElement('h4');
summary.innerText = "Summary: ";
summary.style.display = 'inline';
body.appendChild(summary);

var para = document.createElement('span');
para.innerText = ("My name is Suhani with roll no:2310992219. I am a CSE student studying in Chitkara University pursuing my degree and I am in the second year of my studies. It's so exciting to participate in all the events I have started to gain theoretical knowledge in practical settings")
body.appendChild(para);

var image = document.createElement('img');
image.setAttribute("src", "Suhani.jpg");
image.style.display = "block";
image.style.width = "300px";
image.style.height = "400px";
body.appendChild(image);

var education = document.createElement('h2');
education.innerText = "Education";
body.appendChild(education);

var eduElement = document.createElement('ul');
body.appendChild(eduElement);

var l1 = document.createElement('li');
l1.innerText = "Class X(CBSE): 10 CGPA";
eduElement.appendChild(l1);

var l2 = document.createElement('li');
l2.innerText = "Class XII(CBSE):88%";
eduElement.appendChild(l2);

var l3 = document.createElement('li');
l3.innerText = "B.Tech(Chitkara University):1st SEM:9.73 SGPA";
eduElement.appendChild(l3);

var skills = document.createElement('h2');
skills.innerText = "Skills";
body.appendChild(skills);

var skillElement = document.createElement("ul");
body.appendChild(skillElement);

var s1 = document.createElement('li');
s1.innerText = "Front-end: HTML,CSS ";
skillElement.appendChild(s1);

var s2 = document.createElement('li');
s2.innerText = "Others: C++,C";
skillElement.appendChild(s2);

var hobbies = document.createElement("h2");
hobbies.innerText = "Hobbies";
body.appendChild(hobbies);

var hobbieElement = document.createElement("ul");
body.appendChild(hobbieElement);

var h1 = document.createElement('li');
h1.innerText = "Playing Badminton";
hobbieElement.appendChild(h1);

var h2 = document.createElement('li');
h2.innerText = "Swimming";
hobbieElement.appendChild(h2);

var h3 = document.createElement('li');
h3.innerText = "Coding Practice";
hobbieElement.appendChild(h3);

var contact = document.createElement('h2');
contact.innerText = "Contact";
body.appendChild(contact);

var contactElement = document.createElement('ul');
body.appendChild(contactElement);

var c1 = document.createElement('li');
c1.innerText = "Email : suhani8542@gmail.com";
contactElement.appendChild(c1);

// c1.style.textDecoration = 'bold';
// contactElement.appendChild(c1);