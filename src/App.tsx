import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Star, 
  Search, 
  GamepadIcon, 
  Sword, 
  Car, 
  Brain, 
  Zap, 
  Heart, 
  Menu, 
  X
} from 'lucide-react';

// Game data
const games = [
  {
    id: 1,
    title: "Aventura Épica",
    category: "aventura",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    downloads: "2.5M",
    featured: true,
    description: "Embárcate en un viaje épico a través de tierras místicas y lucha contra criaturas temibles."
  },
  {
    id: 2,
    title: "Darvemy",
    category: "acción",
    image: './assets/images/darvemy.jpg',
    rating: 4.5,
    downloads: "9.8M",
    featured: true,
    description: "Embárcate en una emocionante aventura en primera persona, donde la acción, el sigilo y la resolución de acertijos se fusionan en una lucha contra el tiempo"
  },
  {
    id: 3,
    title: "Campeones de Carreras",
    category: "carreras",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    downloads: "3.2M",
    featured: true,
    description: "Compite contra los mejores pilotos del mundo en impresionantes circuitos."
  },
  {
    id: 4,
    title: "Maestro del Puzzle",
    category: "puzzle",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    downloads: "1.2M",
    featured: true,
    description: "Desafía tu mente con intrincados rompecabezas y acertijos."
  },
  {
    id: 5,
    title: "Reino de Fantasía",
    category: "rpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHayJzMEeibW8DgsVU99d_YxNdPEnI5rTC7g&s",
    rating: 4.9,
    downloads: "5.1M",
    featured: true,
    description: "Construye tu reino, entrena tu ejército y conquista el mundo de fantasía."
  },
  {
    id: 6,
    title: "Supervivencia Zombie",
    category: "acción",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    downloads: "2.8M",
    featured: false,
    description: "Sobrevive en un mundo post-apocalíptico lleno de zombis y peligros."
  },
  {
    id: 7,
    title: "Constructor de Ciudades",
    category: "simulación",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    downloads: "1.5M",
    featured: false,
    description: "Diseña, construye y gestiona la ciudad de tus sueños desde cero."
  },
  {
    id: 8,
    title: "Leyenda Deportiva",
    category: "deportes",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    downloads: "3.0M",
    featured: false,
    description: "Conviértete en una leyenda del deporte compitiendo en varios desafíos atléticos."
  },
  {
    id: 9,
    title: "Maestro de la Cocina",
    category: "simulación",
    image: "https://play-lh.googleusercontent.com/hoGqPx3t4H1pZTzOKJZ9lYw0TPox29WDvq5qOXwXtMiSQtP4kZcJkamG_xbfz_Us0w=w526-h296-rw",
    rating: 4.2,
    downloads: "900K",
    featured: false,
    description: "Cocina deliciosas comidas virtuales y conviértete en el chef definitivo."
  },
  {
    id: 10,
    title: "Conquista Medieval",
    category: "estrategia",
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    downloads: "2.2M",
    featured: false,
    description: "Lidera tu ejército hacia la victoria en épicas batallas medievales."
  },
  {
    id: 11,
    title: "Explorador Oceánico",
    category: "aventura",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    downloads: "1.7M",
    featured: false,
    description: "Sumérgete en las profundidades del océano y descubre tesoros ocultos."
  },
  {
    id: 12,
    title: "Guerrero Ninja",
    category: "acción",
    image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    downloads: "2.1M",
    featured: false,
    description: "Domina el arte del sigilo y el combate como un ninja de élite."
  }
];

// Categories with icons
const categories = [
  { name: "Todos los juegos", icon: <GamepadIcon size={20} /> },
  { name: "Acción", icon: <Zap size={20} /> },
  { name: "Aventura", icon: <Sword size={20} /> },
  { name: "Carreras", icon: <Car size={20} /> },
  { name: "Puzzle", icon: <Brain size={20} /> },
  { name: "RPG", icon: <Heart size={20} /> }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Todos los juegos");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const featuredGames = games.filter(game => game.featured);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredGames.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredGames.length - 1 : prev - 1));
  };
  
  const filteredGames = selectedCategory === "Todos los juegos" 
    ? games 
    : games.filter(game => game.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GamepadIcon size={28} className="text-blue-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">GameStore</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search games..." 
                className="bg-gray-700 rounded-full py-2 px-4 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <a href="#" className="hover:text-blue-400 transition">Inicio</a>
            <a href="#" className="hover:text-blue-400 transition">Libreria</a>
            <a href="#" className="hover:text-blue-400 transition">Cuenta</a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 px-4 py-3 space-y-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar juegos..." 
                className="bg-gray-700 rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <a href="#" className="block py-2 hover:text-blue-400 transition">Home</a>
            <a href="#" className="block py-2 hover:text-blue-400 transition">Library</a>
            <a href="#" className="block py-2 hover:text-blue-400 transition">Account</a>
          </div>
        )}
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {/* Featured Games Carousel */}
        <div className="relative overflow-hidden rounded-xl mb-12 shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-[500px]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredGames.map((game) => (
              <div key={game.id} className="min-w-full relative">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-4xl font-bold mb-2">{game.title}</h2>
                  <p className="text-lg mb-4 max-w-2xl">{game.description}</p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 mr-1" size={18} />
                      <span>{game.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="text-green-400 mr-1" size={18} />
                      <span>{game.downloads}</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition w-48 flex items-center justify-center">
                    <Download size={18} className="mr-2" />
                    Descargar
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Controls */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {featuredGames.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition whitespace-nowrap ${
                  selectedCategory === category.name 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Games Grid */}
        <h2 className="text-2xl font-bold mb-6">{selectedCategory} ({filteredGames.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="relative h-48">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/70 rounded-full px-2 py-1 text-sm flex items-center">
                  <Star className="text-yellow-400 mr-1" size={14} />
                  <span>{game.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{game.title}</h3>
                <p className="text-gray-400 text-sm mb-3 capitalize">{game.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300 flex items-center">
                    <Download size={14} className="mr-1 text-green-400" />
                    {game.downloads}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-1.5 px-3 rounded-full transition">
                    Descargar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <GamepadIcon size={24} className="text-blue-500" />
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">GameStore</h2>
              </div>
              <p className="text-gray-400 max-w-md">Tu destino principal para descargar los mejores juegos de todos los géneros. ¡Juega, compite y diviértete!</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Empresa</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-blue-400 transition">Sobre Nosotros</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Empleo</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Noticias</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Socios</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Recursos</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-blue-400 transition">Centro de Ayuda</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Comunidad</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Desarrolladores</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-blue-400 transition">Política de Privacidad</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Términos de Servicio</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Política de Cookies</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">CLUF</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 GameStore. Todos los derechos reservados.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;