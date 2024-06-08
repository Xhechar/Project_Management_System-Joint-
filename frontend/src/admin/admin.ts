// Get the modal
const modal = document.getElementById("myModal") as HTMLElement;

// Get the button that opens the modal
const btn = document.getElementById("projectsButton") as HTMLButtonElement;

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0] as HTMLElement;

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event: MouseEvent) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// You can add more functionality to handle checkboxes here
// For example, a function to get selected checkboxes

function getSelectedCheckboxes(name: string): string[] {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`) as NodeListOf<HTMLInputElement>;
    const selectedValues: string[] = [];
    checkboxes.forEach((checkbox) => {
        selectedValues.push(checkbox.value);
    });
    return selectedValues;
}

// Example usage to get selected users or projects
const selectedUsers = getSelectedCheckboxes("selectUser");
const selectedProjects = getSelectedCheckboxes("selectProject");
console.log(selectedUsers, selectedProjects);
