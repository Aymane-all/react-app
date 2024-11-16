import React , { Component }from "react";

class JeuDee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face: null,
      compteur: 0,
      fin: false,
    };
  }

  jouer() {
    if (this.state.fin) return;
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState((e) => ({
      face: valeur,
      compteur: e.compteur + 1,
      fin: valeur === parseInt(this.state.hiddenFace, 10)
    }));
  }

  getImage() {
    const { face } = this.state;
    return face ? `/images/face${face}.png` : "images/Dé.PNG"; 
  }

  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false});
  }

  handleHiddenFaceChange(e) {
    const value = e.target.value;
    if (value >= 1 && value <= 6) {
      this.setState({ hiddenFace: value });
    }
  }

  render() {
    const { face, compteur, fin, hiddenFace } = this.state;

    return (
      <div>
        <h1>Jeu de Dé Joueur 1</h1>

        <div>
          <label>Donner le numéro caché entre 1 et 6:</label>
          <input
            type="number"
            value={hiddenFace}
            onChange={(e) => this.handleHiddenFaceChange(e)}
            min="1"
            max="6"
          />
        </div>

      

        <h2>Face: {face || '0'}</h2>
        <img src={this.getImage()} alt="Dice" />
        <h2>Nombre d'essais: {compteur}</h2>

        <div>
          <button onClick={() => this.jouer()} disabled={fin}>
            Jouer
          </button>
          <button onClick={() => this.initialiser()}>
            Initialiser
          </button>
        </div>

        {fin && (
          <p>Bravo, vous avez trouvé la face cachée!</p>
        )}
      </div>
    );
  }
}

export default JeuDee;
