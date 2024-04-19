const SIZE = 128;

class UserCard extends HTMLElement {
  constructor() {
    super();
    const name = this.getAttribute("name");
    const html = /* html */`<div class="card">
      <img src="https://avatars.githubusercontent.com/${name}?size=${SIZE}" alt="${name}">
      <span>${name}</span>
    </div>`;
    this.insertAdjacentHTML("beforeend", html);
  }
}

customElements.define("user-card", UserCard);
