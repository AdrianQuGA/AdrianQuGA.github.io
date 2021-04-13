import {
  cargaRoles
} from "../js/seguridad.js";
import {
  getAuth
} from "../lib/fabrica.js";
import {
  muestraError
} from "../lib/util.js";

 
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `
<ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="inicioSesion.html" style="font-size:20px;">Inicio</a>
        </li>
        </li>
      </ul>`;
    this.ul =
      this.querySelector("ul");
    getAuth().onAuthStateChanged(
      usuario => this.
        cambiaUsuario(usuario),
      muestraError);
  }

  /**
   * @param {import(
      "../lib/tiposFire.js").User}
      usu */
  async cambiaUsuario(usu) {
    if (usu && usu.email) {
      let html = "";
      const roles =
        await cargaRoles(
          usu.email);
      if (roles.has("Cliente")) {
        html += /* html */
          `<li>
            <a href=
              "chat.html">Chat</a>
          </li>`;
      } 
      if (roles.has(
        "Administrador")) {
        html += /* html */
          `<li>
            <a href=
"alumnos.html">Alumnos</a>
          </li>`;
      }
      this.ul.innerHTML += html;
    }
  }
}

customElements.define(
  "mi-nav", MiNav);
