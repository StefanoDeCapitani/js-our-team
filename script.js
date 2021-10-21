const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

for (let i = 0; i < teamMembers.length; i++) {
  displayMemberCard(teamMembers[i]);
}

function displayMemberCard(member) {
  const teamContainer = document.querySelector(".team-container");
  const teamCard = createTeamCardElement(member);
  teamContainer.append(teamCard);
}

function createTeamCardElement(member) {
  const teamCard = createElementWithClass("div", "team-card");

  const cardImage = createCardImageElement(member);
  const cardText = createCardTextElement(member);

  teamCard.append(cardImage);
  teamCard.append(cardText);
  return teamCard;
}

function createCardImageElement(member) {
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");

  const image = document.createElement("img");
  image.setAttribute("src", `img/${member.image}`);
  image.setAttribute("alt", member.name);

  cardImage.append(image);
  return cardImage;
}

function createCardTextElement(member) {
  const cardText = createElementWithClass("div", "card-text");
  const cardName = createTextElement("h3", member.name);
  const cardRole = createTextElement("p", member.role);

  cardText.append(cardName);
  cardText.append(cardRole);
  return cardText;
}

function createTextElement(tag, text) {
  const cardName = document.createElement(tag);
  cardName.textContent = text;
  return cardName;
}

function createElementWithClass(tag, cssClass) {
  const cardText = document.createElement(tag);
  cardText.classList.add(cssClass);
  return cardText;
}
