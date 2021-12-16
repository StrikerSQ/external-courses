const userMenu = document.querySelector('.user-menu');
const arrow = document.querySelector('.arrow');

//

function closeMenu() {
  const userSubmenu = document.querySelector('.user-submenu');
  arrow.className = 'arrow';
  userSubmenu.parentNode.removeChild(userSubmenu);
}
function createSubMenu() {
  if (!document.querySelector('.user-submenu')) {
    const ul = document.createElement('ul');
    arrow.classList.add('reflected-arrow');
    ul.className = 'user-submenu';
    userMenu.append(ul);
    for (let i = 0; i < 3; i += 1) {
      ul.append(document.createElement('li'));
    }
    const subItems = ul.children;
    subItems[0].innerHTML = "<a href = '#'>My account</a>";
    subItems[1].innerHTML = "<a href = '#'>My task</a>";
    subItems[2].innerHTML = "<a href = '#'>Log out</a>";
  } else {
    closeMenu();
  }
}

userMenu.addEventListener('click', createSubMenu);
