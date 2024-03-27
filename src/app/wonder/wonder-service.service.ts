import { Injectable } from '@angular/core';
import { Wonder } from './wonder-model';


@Injectable({
  providedIn: 'root'
})
export class WondersService {
  wonders : Wonder[] = [
  ];

  constructor() { }
  getWonders(): Wonder[] {
    return [
      {
          "name": "Great Wall of China",
          "description": "The Great Wall of China is a series of fortifications that were built to protect the Chinese empire from invasions.",
          "image": "assets/china.webp"
      },
      {
          "name": "Petra",
          "description": "Petra is an ancient city located in Jordan. It is famous for its rock-cut architecture and water conduit system.",
          "image": "assets/petra.webp"
      },
      {
          "name": "Christ the Redeemer",
          "description": "Christ the Redeemer is a statue of Jesus Christ located in Rio de Janeiro, Brazil. It is one of the New Seven Wonders of the World.",
          "image": "assets/christ.webp"
      },
      {
          "name": "Machu Picchu",
          "description": "Machu Picchu is an Incan citadel located in the Andes Mountains of Peru. It is known for its stunning architecture and panoramic views.",
          "image": "assets/machu.webp"
      },
      {
          "name": "Chichen Itza",
          "description": "Chichen Itza is a Mayan archaeological site located in Mexico. It is famous for its pyramid-shaped El Castillo and other ancient structures.",
          "image": "assets/el-castilio.webp"
      },
      {
          "name": "Colosseum",
          "description": "The Colosseum is an ancient amphitheater located in Rome, Italy. It was used for gladiatorial contests, public spectacles, and other events.",
          "image": "assets/colloseum.webp"
      },
      {
          "name": "Taj Mahal",
          "description": "The Taj Mahal is a white marble mausoleum located in Agra, India. It was built by the Mughal emperor Shah Jahan in memory of his wife.",
          "image": "assets/tai-mahai.webp"
      }
  ];
  }
}