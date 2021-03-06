import tabataImage from '../assets/img/tabata-timer.png'
import rockPapreScissorsImage from '../assets/img/rock-paper-scissors.png'
import laFabricaImage from '../assets/img/la-fabrica.png'

export const PROJECTS = [
    {
        text:
            'PWA para crear rutinas de ejercicio, con cronometro y otras funcionalidades.',
        image: tabataImage,
        tags: ['react', 'js', 'css', 'html'],
        url: 'https://tabata-timer.vercel.app',
        name: 'Tabata Timer',
    },
    {
        text:
            'Juego de piedra, papel o tijeras basado en un desafio de Frontend Mentors.',
        image: rockPapreScissorsImage,
        tags: ['react', 'js', 'css', 'html'],
        url: 'https://agustinz97.github.io/rock-paper-scissors-react/',
        name: 'Piedra, papel o Tijeras',
    },
    {
        text: 'Pagina web para la organización "La fábrica"',
        image: laFabricaImage,
        tags: ['laravel', 'php', 'mysql'],
        url: 'https://lafabricajujuy.org',
        name: 'La Fábrica',
    },
]
