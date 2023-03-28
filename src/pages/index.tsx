import Image from 'next/image';


export default function Home(): JSX.Element {
  return (

      <div className="bg-purple-700 h-screen	w-full border-0	margin-0 relative">
        <div className=''>
           <Image src="/vector.png" alt="image men" height={305} width={205} className="absolute -left-10 m-20 "></Image>
           <Image src="/elearning.png" alt='image e' height={506} width={467} className="-left-40 -right-40 -top-10 " ></Image>
        </div>
        <div className='  ml-10'>
           <h1 className="text-pink-500 text-3xl ">Aprenda da melhor forma</h1>
          <h2 className="text-white ">
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
          </h2>
          <button className="bg-pink-500 text-white font-medium p-4 rounded-full w-64 ">
          Começar os estudos
          </button>
        </div>
      </div>

  );
}


