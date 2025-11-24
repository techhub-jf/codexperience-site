
import ava1 from '@assets/2025/palestrantes/1.png';
import ava2 from '@assets/2025/palestrantes/2.png';
import ava3 from '@assets/2025/palestrantes/3.png';
import ava4 from '@assets/2025/palestrantes/4.png';
import ava5 from '@assets/2025/palestrantes/5.png';
import ava6 from '@assets/2025/palestrantes/6.png';
import ava7 from '@assets/2025/palestrantes/7.png';
import ava8 from '@assets/2025/palestrantes/8.png';

interface Talker {
  name: string;
  talker: string;
  id: number;
  link: string;
}

export const talkers: Talker[] = [
  { talker: ava1, id: 1, name: 'Henrique Barbosa', link: 'https://www.linkedin.com/in/softlivre/' },
  { talker: ava2, id: 2, name: 'Wendel Moreira', link: 'https://www.linkedin.com/in/wendel-moreira/' },
  { talker: ava3, id: 3, name: 'Romulo Assis', link: 'https://www.linkedin.com/in/romulo-assis/' },
  { talker: ava4, id: 4, name: 'Lucas Lopes', link: 'https://www.linkedin.com/in/lucas-lopes-br/' },
  { talker: ava5, id: 5, name: 'Igor Nascimento', link: 'https://www.linkedin.com/in/igor-m-nascimento/' },
  { talker: ava6, id: 6, name: 'Danilo Santos', link: 'https://www.linkedin.com/in/danilo-oliveira-santos/' },
  { talker: ava7, id: 7, name: 'Aldemon Monifácio', link: 'https://www.linkedin.com/in/aldemonbonifacio/' },
  { talker: ava8, id: 8, name: 'Tiago Calado', link: 'https://www.linkedin.com/in/calado-tiago/' },
];

export default function Talks() {
  return (
    <div id='2' className='h-full w-full flex flex-col items-center bg-black pt-20 pb-8 gap-4 sm:gap-16'>
      <div className='space-y-4 flex justify-center flex-col max-w-xl lg:max-w-7xl'>
        <h2 className="text-white text-center text-2xl font-extrabold sm:text-6xl pb-6">
          PALESTRANTES CONFIRMADOS
        </h2>
      </div>
      <p className="text-white text-center px-2 text-x sm:text-2xl max-w-72 sm:max-w-xl lg:max-w-5xl">
        Essas são feras que vão compartilhar conhecimento com a gente!
      </p>
      <div className='my-10 h-2/3 max-w-72 items-center justify-center flex flex-wrap gap-16 md:max-w-7xl'>
        {talkers.map((talk) => (
          <div key={talk.id}>
            <a href={talk.link} target='_blank' rel="noopener noreferrer" className='space-y-4 flex flex-col items-center'>
              <div className='w-60 h-80 rounded-xl border-green-500 overflow-hidden border-2 p-6'>
                <img src={talk.talker} alt={`Foto de ${talk.name}`} className='w-full h-full object-cover -mt-2 scale-[1.35]' />
              </div>
              <p className='bg-green-500 py-1 px-6 rounded-lg text-center font-semibold text-black'>{talk.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}