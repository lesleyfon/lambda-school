const studentForm = `
<h3>Student Forms</h3>
<label>Name:</label>  <input type="text" id="name" name="name" />
Age: <input type="number"  id="age" name="age"/>
Enter Your E-Mail: <input type="email" id="email" name="email" />
Location: <input type="text" id="location" name="location" />
Specialty: <input type="text" id="specialty" name="specialty" />
Favorite Language: <input type="text" id="favLanguage" name="favLanguage" />
Catch Phrase: <textarea rows="10" cols="100" id="catchPhrase" ></textarea>
<input type="submit" value="Submit" />

`;
const instructorForm = `
<h3>Instructor Forms</h3>
<label>Name: </label>  <input type="text" id="name" name="name" />
Age: <input type="number"  id="age" name="age" />
Enter Your E-Mail: <input type="email" id="email" name="email" />
Location: <input type="text" id="location" name="location" />
Specialty: <input type="text" id="specialty" name="specialty" />
Favorite Language: <input type="text" name="language" id="language" />
Catch Phrase: <textarea rows="10" cols="100" id="catchPhrase"></textarea>

<input type="submit" value="Submit" />
`;

const teamLeadForm = `
<h3>Team Lead Forms</h3>
<label>Name:</label>  <input type="text" name="first-last-name" id="name" />
Age: <input type="number" name="age" id="age" />
Enter Your 
E-Mail: <input type="email" name="user_email" id="email"/>
Location: <input type="email" name="location" id="location"/>
Specialty: <input type="email" name="specialty" id="specialty"/>
Favorite Language: <input type="text" name="language" id="language" />
Catch Phrase: <textarea rows="10" cols="100" id="catchPhrase" ></textarea>
<input type="submit" value="Submit" />
`
let form = document.querySelector("form")
// appending forms into table += to append muiltiple; = to overwrite the previous form
form.innerHTML = instructorForm
form.innerHTML = teamLeadForm
form.innerHTML = studentForm