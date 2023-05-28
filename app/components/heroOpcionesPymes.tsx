import 'tailwindcss/tailwind.css';
import Section from './section';

const people = [
    {
      name: 'PyMe',
      imageUrl: '/static/pymes-1.jpg',
      linkUrl: '/',
    },
    {
      name: 'Empresas y Corporativos',
      imageUrl: '/static/pymes-2.jpg',
      linkUrl: '/',
    },
    {
        name: 'Gobierno',
        imageUrl: '/static/pymes-3.jpg',
        linkUrl: '/',
    },
  ];


export default function HeroOpcionesPymes(){
    return(
        <Section delay={0.1}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <a href={person.linkUrl}>
                  <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt={person.name} />
                </a>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
    );
}