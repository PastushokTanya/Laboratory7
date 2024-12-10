import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element9Style: { backgroundColor: '', color: '' },
      element10Style: { backgroundColor: '', color: '' },
      isFirstClickOnElement9: true,
      isFirstClickOnElement10: true,
    };
  }

  changeColors = (element, bg, text) => {
    this.setState({ [element]: { backgroundColor: bg, color: text } });
  };

  handleClickElement9 = () => {
    const { isFirstClickOnElement9 } = this.state;
    if (isFirstClickOnElement9) {
      this.changeColors('element9Style', 'lightblue', 'darkblue');
    } else {
      this.changeColors('element9Style', 'lightgreen', 'darkgreen');
      this.changeColors('element10Style', 'lightblue', 'darkblue');
    }
    this.setState({ isFirstClickOnElement9: !isFirstClickOnElement9 });
  };

  handleClickElement10 = () => {
    const { isFirstClickOnElement10 } = this.state;
    if (isFirstClickOnElement10) {
      this.changeColors('element10Style', 'lightgreen', 'darkgreen');
    } else {
      this.changeColors('element10Style', 'lightblue', 'darkblue');
      this.changeColors('element9Style', 'lightgreen', 'darkgreen');
    }
    this.setState({ isFirstClickOnElement10: !isFirstClickOnElement10 });
  };

  render() {
    const { element9Style, element10Style } = this.state;

    return (
      <div>
     <h3>Моє хобі:</h3>
    <ul>
        <li>Малювання</li>
        <li>Спорт</li>
        <li>Кулінарія</li>
    </ul>

    <h3>Улюблені фільми:</h3>
    <ol>
        <li>Крізь моє вікно</li>
        <li>Ребел-Ридж</li>
        <li>Мадам Павутина</li>
    </ol>

    <h3>Улюблене місто</h3>
        <p
          style={element9Style}
          onClick={this.handleClickElement9}
        >
         Київ - це місто, де кожен камінь на вулицях розповідає історію. Величний 
    Дніпро розділяє місто на дві частини, даруючи захопливі панорами. Золоті куполи 
    старовинних храмів сяють на тлі сучасних висоток, а затишні парки приховують 
    столітні таємниці. Кожен крок Києвом — це подорож крізь час, де стародавні легенди 
    переплітаються з пульсуючим ритмом сучасності. Тут відчувається душа народу, його 
    сила, мрії та нескорений дух. Київ — це місто, яке залишає слід у серці назавжди.</p>
        <p
          style={element10Style}
          onClick={this.handleClickElement10}
        >
         1. Стародавнє місто: Київ заснований понад 1500 років тому.
        </p>
        <p>2. Золоті ворота: Це знамениті середньовічні ворота міста.</p>
        <p>3. Арсенальна: Найглибша станція метро у світі (105,5 м).</p>
        <p>4. Київський фунікулер: Один із найстаріших у світі, відкритий у 1905 році.</p>
      </div>
    );
  }
}

export default Content;