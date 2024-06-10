const modal = document.getElementById("myModal") as HTMLElement;

const btn = document.getElementById("projectsButton") as HTMLButtonElement;

let assignbtn = document.querySelector(".assign") as HTMLButtonElement;
let selected_project = document.querySelector("#projects") as HTMLSelectElement;
let selected_users = document.querySelector("#users") as HTMLSelectElement;

const span = document.getElementsByClassName("close")[0] as HTMLElement;

let projects_btn = document.getElementById(
  "projectsButton"
) as HTMLButtonElement;

projects_btn.addEventListener("click", () => {
  console.log("I am clicked.");

  window.location.href = "./admin.html";
});

window.onclick = function (event: MouseEvent) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function getSelectedCheckboxes(name: string): string[] {
  const checkboxes = document.querySelectorAll(
    `input[name="${name}"]:checked`
  ) as NodeListOf<HTMLInputElement>;
  const selectedValues: string[] = [];
  checkboxes.forEach((checkbox) => {
    selectedValues.push(checkbox.value);
  });
  return selectedValues;
}

const selectedUsers = getSelectedCheckboxes("selectUser");
const selectedProjects = getSelectedCheckboxes("selectProject");
console.log(selectedUsers, selectedProjects);

assignbtn.addEventListener("click", () => {
    const indexP = selected_project.options[selected_project.selectedIndex].text;
    const indexU = selected_users.options[selected_users.selectedIndex].text;

    
});
