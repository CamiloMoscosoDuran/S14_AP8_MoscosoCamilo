import { Component } from '@angular/core';

interface Juego {
  id: number;
  nombre: string;
  genero: string;
  desc: string;
  rating: string;
  imagen: string;
}

@Component({
  selector: 'app-juegos',
  standalone: false,
  templateUrl: './juegos.html',
  styleUrl: './juegos.css',
})
export class Juegos {
  juegos: Juego[] = [
    {
      id: 1,
      nombre: 'PES 2011',
      genero: 'Deportes',
      desc: 'El clásico simulador de fútbol que marcó a toda una generación con su jugabilidad.',
      rating: '8.5/10',
      imagen: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/wii_24/SI_Wii_ProEvolutionSoccer2011.jpg'
    },
    {
      id: 2,
      nombre: 'DBZ: Budokai Tenkaichi 3',
      genero: 'Lucha',
      desc: 'Considerado uno de los mejores juegos de pelea de Dragon Ball con un roster inmenso.',
      rating: '9.2/10',
      imagen: 'https://e.snmc.io/lk/f/x/58bcbb3df3099da4d452792b5744af4a/8060247'
    },
    {
      id: 3,
      nombre: 'PUBG Mobile',
      genero: 'Shooter',
      desc: 'El famoso Battle Royale adaptado para móviles. Sobrevive y sé el último en pie.',
      rating: '8.0/10',
      imagen: 'https://m.media-amazon.com/images/M/MV5BODQzNzJjY2QtY2Y2YS00OWJmLTlkZWMtMmNmMmE2NTg1MjQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
      id: 4,
      nombre: 'Rocket League',
      genero: 'Deportes / Acción',
      desc: 'Fútbol pero con coches acrobáticos impulsados por cohetes. Pura diversión multijugador.',
      rating: '8.8/10',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFsM4F-NEaaFE7B5XsgyRNrfuwGFiBJktFg&s'
    }
  ];

  filtroActual: string = 'Todos';

  get juegosFiltrados(): Juego[] {
    if (this.filtroActual === 'Todos') {
      return this.juegos;
    }
    return this.juegos.filter(j => j.genero.toLowerCase().includes(this.filtroActual.toLowerCase()));
  }

  setFiltro(filtro: string) {
    this.filtroActual = filtro;
  }
}
