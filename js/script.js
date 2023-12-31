
// array di oggetti
const teamMembers = [
    {
        name: "Wayne Barnet ",
        role: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "img/scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg"
    }
]

// stampa in console le info 
for (let i = 0; i < teamMembers.length; i++) {
    const curInfo = teamMembers[i];

    for(let key in curInfo) {
        console.log(key, curInfo[key]);
    }
    
}

// stampa in pagina sottoforma di stringa
const rowElem = document.querySelector(".row");
let infoElem = "";

for(let i = 0; i < teamMembers.length; i++) {
    const curInfo = teamMembers[i];
    infoElem += `<div class="col">
                        <div class="card mt-4">
                             <img src="${curInfo.image}" class="card-img-top">
                             <div class="card-body">
                                 <h5 class="text-name">${curInfo.name}</h5>  
                                 <p class="text-role">${curInfo.role}</p>
                             </div>
      
                        </div>
                    </div>`
    
}
console.log(infoElem);
rowElem.innerHTML = infoElem;