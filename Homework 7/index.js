let context = {
    users: null
}

window.onload = async () => {
await get_api();
get_name();
get_salary();
};

const get_api = async () => {
    const response = await fetch (`http://dummy.restapiexample.com/api/v1/employees`);
    const data = await response.json();
    context.users = data;
    console.log(data);
};

const get_name = () => {
    let ul = document.getElementById("ul");
    context.users.forEach((user, index) => {
        let a = `<li id="user-${index}">${user.employee_name}</li>`
        ul.innerHTML += a;
    });
};

const get_salary = () => {
    let div = document.getElementById("div");
    context.users.forEach((user, index) => {
        let eachUser = document.getElementById(`user-${index}`);
        eachUser.addEventListener("mouseover", () => {
            div.innerHTML = `${user.employee_salary}`
        });
    });
};

