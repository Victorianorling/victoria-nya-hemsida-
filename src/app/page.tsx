
export default function Home() {
  return (
    <div className='bg-gradient-to-br from-[#B03640] to-[#59242E] min-h-screen flex flex-col items-center justify-center text-white p-8'>
      
      <main className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-3xl text-center">
        <h1 className='mb-4 text-3xl font-bold text-[hsl(323,92%,80%)]'>
          Välkommen till min hemsida!
        </h1>
        <p className="text-lg text-[hsl(0,0%,90%)] mb-6">Det här är en enkel hemsida byggd med Next.js.</p>
        
        {/* Huvudbild */}
        <div className="rounded-lg overflow-hidden shadow-lg mb-8">
          <img 
            className='h-full w-full object-cover transition duration-300 ease-in-out hover:scale-105' 
            src="/victoria.png" 
            alt="Huvudbild" 
          />
        </div>

        {/* Extra bilder */}
        <div className="grid grid-cols-2 gap-4 items-center">
          <img 
            className='h-full w-full object-cover rounded-lg transition duration-300 ease-in-out hover:scale-105' 
            src="/konferens.png" 
            alt="Bild 1" 
          />
          <img 
            className='h-full w-full object-cover rounded-lg transition duration-300 ease-in-out hover:scale-105' 
            src="/ribbat.png" 
            alt="Bild 2" 
          />
          <img 
            className='h-full w-full object-cover rounded-lg transition duration-300 ease-in-out hover:scale-105' 
            src="badminton.png" 
            alt="Bild 3" 
          />
          <img 
            className='h-full w-full object-cover rounded-lg transition duration-300 ease-in-out hover:scale-105' 
            src="/d-dagen.png" 
            alt="Bild 4" 
          />
        </div>
      </main>
    </div>
  )
}
