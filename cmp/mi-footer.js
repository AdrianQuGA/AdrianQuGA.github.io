class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<footer class="footer">
      <div class="footer__addr">
        <h1 class="footer__logo">Información</h1>
            
        <h2>Contacto</h2>
        
        <address>
          Nezahualcoyotl,Sin numero<br>
              
          <a class="footer__btn" href="proyectofinal43qga@gmail.com">Correo de contacto</a>
        </address>
      </div>
      
      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Media</h2>
    
          <ul class="nav__ul">
            <li>
              <a href="#">carreras</a>
            </li>
    
            <li>
              <a href="#">Cordinacion</a>
            </li>
                
            <li>
              <a href="#">Anuncios</a>
            </li>
          </ul>
        </li>
        
        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">Proyectos</h2>
          
          <ul class="nav__ul nav__ul--extra">
            <li>
              <a href="#">UTN</a>
            </li>
            
            <li>
              <a href="#">Software</a>
            </li>
            
            <li>
              <a href="#">Digital</a>
            </li>
            
            <li>
              <a href="#">Calificaciones</a>
            </li>
            
            <li>
              <a href="#">traduccion</a>
            </li>
            
            <li>
              <a href="#"> XD</a>
            </li>
          </ul>
        </li>
        
        <li class="nav__item">
          <h2 class="nav__title">Legal</h2>
          
          <ul class="nav__ul">
            <li>
              <a href="#">politicas</a>
            </li>
            
            <li>
              <a href="#">Terminos y condiciones</a>
            </li>
            
            <li>
              <a href="#">Mas..</a>
            </li>
          </ul>
        </li>
      </ul>
      
      <div class="legal">
        <p>&copy; 2021 Adrian Quintanar Guerrero. Todos los derechos reservados.</p>
        
        <div class="legal__links">
          <span>Made with <span class="heart">♥</span> Contactanos...</span>
        </div>
      </div>
    </footer>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
