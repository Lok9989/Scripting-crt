const form = document.getElementById('studentForm');

function createInput(labelText, inputType, inputName, placeholder = "") {
  const wrapper = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = labelText + ": ";
  label.htmlFor = inputName;

  const input = document.createElement('input');
  input.type = inputType;
  input.name = inputName;
  input.id = inputName;
  input.placeholder = placeholder;
  input.required = true;

  wrapper.appendChild(label);
  wrapper.appendChild(input);
  return wrapper;
}

function createSelect(labelText, selectName, optionsArr) {
  const wrapper = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = labelText + ": ";
  label.htmlFor = selectName;

  const select = document.createElement('select');
  select.name = selectName;
  select.id = selectName;
  select.required = true;

  const defaultOption = document.createElement('option');
  defaultOption.value = "";
  defaultOption.textContent = "Select " + labelText;
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  optionsArr.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = opt;
    select.appendChild(option);
  });

  wrapper.appendChild(label);
  wrapper.appendChild(select);
  return wrapper;
}

const departments = [
  "Computer Science", "Mechanical", "Electrical",
  "Civil", "Electronics", "Chemical"
];
const cities = [
  "Mumbai", "Delhi", "Bangalore",
  "Chennai", "Hyderabad", "Pune"
];
const states = [
  "Maharashtra", "Karnataka", "Tamil Nadu",
  "Telangana", "Delhi", "Gujarat"
];

form.appendChild(createInput("Name", "text", "name", "Enter your name"));
form.appendChild(createInput("Roll No", "text", "rollno", "Enter roll number"));
form.appendChild(createInput("Email", "email", "email", "Enter email"));
form.appendChild(createInput("Phone No", "tel", "phone", "Enter phone number"));
form.appendChild(createSelect("Department", "department", departments));
form.appendChild(createSelect("City", "city", cities));
form.appendChild(createSelect("State", "state", states));

const submitBtn = document.createElement('button');
submitBtn.type = "submit";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  alert("Form submitted successfully!");
});


const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f7f8;
    padding: 20px;
  }
  form {
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
  }
  div {
    margin-bottom: 15px;
  }
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input, select {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    padding: 10px 20px;
    font-size: 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
`;
document.head.appendChild(style);
