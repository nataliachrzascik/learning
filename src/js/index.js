/* Here goes your JS code */

function showForm() {
    document.getElementById('show-popup-form').visibility = 'hidden';

    const background = document.createElement("div");
    background.id = 'background';
    background.classList.add("beautyClass");

    const cross = document.createElement('i');
    cross.classList.add('fas');
    cross.classList.add('fa-times-circle');
    cross.classList.add('cross');

    const form = document.createElement("form");

    const h1 = document.createElement("h1");
    h1.innerHTML = "Login";

    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = 'E-mail';
    email.classList.add("textInput");

    const password = document.createElement('input');
    password.id = 'password';
    password.type = 'password';
    password.placeholder = 'Password';
    password.classList.add("textInput");

    const wrapper = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    checkbox.classList.add('check');

    const checkText = document.createElement('label');
    checkText.for = 'checkbox';
    checkText.setAttribute("for", 'checkbox');
    checkText.innerHTML = "<span class='checkSpan'> I agree to terms & conditions. </span>";
    checkText.classList.add('checkboxInput');

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Submit';
    submit.classList.add("submitInput");

    background.appendChild(cross);
    background.appendChild(form);

    wrapper.appendChild(checkbox);
    wrapper.appendChild(checkText);

    form.appendChild(h1);
    form.appendChild(email);
    form.appendChild(password);
    form.appendChild(wrapper);
    form.appendChild(submit);

    const div = document.querySelector(".popup");

    div.appendChild(background);

    cross.addEventListener('click', (e) => {
        const form = document.getElementById('background');
        form.remove();
    });

    let isGoodPassword;
    let isGoodEmail;
    let isChecked;

    password.addEventListener('keyup', (e) => {
        let password = e.target.value;
        const reg = new RegExp("[a-zA-Z0-9]{8,}");
        isGoodPassword = reg.test(password);
    });

    email.addEventListener('keyup', (e) => {
        let email = e.target.value;
        const reg1 = new RegExp(/@/);
        isGoodEmail = reg1.test(email);
    });

    checkbox.addEventListener('click', (e) => {
        isChecked = checkbox.checked;
    });



    submit.addEventListener('click', (e) => {
        e.preventDefault();
        isGoodPassword ? console.log("Password ok") : alert("The password must contain min.8 characters, such as uppercase and lowercase letters and numbers.");
        isGoodEmail ? console.log("Email ok") : alert("The Email must contain @.");
        isChecked ? console.log("Checked ok") : alert("You have to check the checkbox.")

        if (isGoodEmail && isGoodPassword && isChecked) {
            setTimeout(() => {
                const form = document.getElementById('background');
                form.remove();
                const endlessWord = document.getElementById('show-popup-form');
                endlessWord.innerHTML = "Thank You";
            }, 3000)
        }
    });

}
