// Lista projektów
const projekty = [
  { nazwa: "Projekt 001", link: "project_001" },
  { nazwa: "Projekt 002", link: "projekt_002" },
  { nazwa: "Projekt 003 - wisielec", link: "project_003_wisielec/" },
  { nazwa: "Projekt 004 - strona główna", link: "projekt_004/" },
  { nazwa: "Projekt 005 - egzamin", link: "project_005/" },
  { nazwa: "Projekt 006", link: "project_006/" },
  { nazwa: "Projekt 007", link: "project_007/" },
  { nazwa: "Projekt 008", link: "projekt_008/" },
  { nazwa: "Projekt 010", link: "projekt_0010/" },
  { nazwa: "Projekt 011", link: "projekt_0011/" },
  { nazwa: "Projekt 012", link: "project_012/" },
  { nazwa: "Projekt 013", link: "projekt_013/" },
  { nazwa: "Projekt 014 - wzory", link: "projekt_014/" },
  { nazwa: "Projekt 015", link: "projekt_015/notatki.html" },
  { nazwa: "Projekt 19", link: "Projekt19/index.php" },
  { nazwa: "Projekt 22", link: "project019/project019/index.php" },
  { nazwa: "Projekt 27 - pogoda", link: "Project 027" },
  { nazwa: "Projekt 30 - Ajax", link: "Projekt030" },
  { nazwa: "Projekt 34 - NBP-API", link: "projekt 34 NBP-API" },
  { nazwa: "Projekt 34 - NBP-API-Zadanie domowe", link: "project 34 NBP-API-ZD" },
  { nazwa: "Projekt 36 - Zadanie domowe", link: "project026" }
  
];


// Dodawanie elementów listy
const lista = document.querySelector('.lista-projektow');
projekty.forEach(projekt => {
  const li = document.createElement('li');
  li.textContent = projekt.nazwa;
  li.addEventListener('click', () => {
    window.location.href = projekt.link;
  });
  lista.appendChild(li);
});
