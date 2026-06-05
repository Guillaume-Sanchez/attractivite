import { 
  Building, 
  ArrowRight,
  Trophy,
  Music,
  TreePine,
  Factory,
  Scissors,
  Wrench
} from 'lucide-react';

export default function App() {
  return (
    // La classe scroll-smooth permet le défilement fluide vers les ancres
    <div className="font-sans text-slate-900 scroll-smooth">
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-[90vh] bg-white flex flex-col justify-center items-center px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-6 block">
            Territoire d'Avenir
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
            Changez de <span className="text-rose-500">code.</span> <br />
            Changez de <span className="text-blue-600">vie.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-light">
            Une agglomération qui recrute vos talents tech et industriels, sans vous faire payer le prix fort sur votre qualité de vie.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Lien d'ancrage vers l'économie */}
            <a 
              href="#economie"
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-full transition-transform hover:-translate-y-1 shadow-lg hover:shadow-rose-500/30 flex items-center justify-center gap-2"
            >
              Entreprises & Emplois <ArrowRight size={20} />
            </a>
            
            {/* Lien d'ancrage vers le lifestyle */}
            <a 
              href="#lifestyle"
              className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 font-bold py-4 px-8 rounded-full transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Cadre de vie & Sorties
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 1 : ECONOMIE --- */}
      <section id="economie" className="py-24 bg-slate-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">L'écosystème <span className="text-rose-500">Tech & Industriel</span>.</h2>
            <p className="text-xl text-slate-500 max-w-2xl">
              Des PME innovantes aux grands groupes, notre bassin d'emploi recherche activement des profils qualifiés (Titres RNCP de niveau 7, Ingénieurs) pour soutenir sa croissance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Carte 1 : Top Industrie */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-rose-100 text-rose-500 rounded-xl flex items-center justify-center">
                  <Factory size={32} />
                </div>
                <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">Vaux-le-Pénil</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Top Industrie</h3>
              <p className="text-slate-600">
                Acteur incontournable de la ZI, cette entreprise est experte dans la fabrication d'équipements de transmission de puissance hydrauliques et pneumatiques. Elle conçoit des solutions sur-mesure pour les environnements de haute pression.
              </p>
            </div>

            {/* Carte 3 : Sellerie du Lys */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-500 rounded-xl flex items-center justify-center">
                  <Scissors size={32} />
                </div>
                <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">Le Mée-sur-Seine</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sellerie du Lys</h3>
              <p className="text-slate-600">
                Présente depuis plus de 30 ans, cette entreprise allie artisanat de précision et industrie technique. Elle est spécialisée dans la confection sur-mesure de bâches, la sellerie automobile, nautique, ainsi que pour les équipements médicaux et aéronautiques.
              </p>
            </div>

            {/* Carte 4 : Sellerie du Lys */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-500 rounded-xl flex items-center justify-center">
                  <Wrench size={32} />
                </div>
                <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">Vaux-le-Pénil</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Melun Hydraulique</h3>
              <p className="text-slate-600">
                PME historique (plus de 50 ans d'existence) experte en hydraulique de puissance et mécatronique. Elle conçoit des solutions sur-mesure pour des secteurs exigeants comme l'énergie, l'industrie lourde et l'aéronautique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2 : LIFESTYLE --- */}
      {/* --- SECTION 2 : LIFESTYLE --- */}
<section id="lifestyle" className="py-24 bg-white px-4">
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-black mb-4">La vraie <span className="text-blue-600">déconnexion</span>.</h2>
      <p className="text-xl text-slate-500 max-w-2xl">
        Fini les deux heures de transports par jour. L'agglomération melunaise offre un équilibre parfait : une scène culturelle vibrante, un tissu associatif fort et un accès immédiat à des espaces naturels exceptionnels.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Activité 1 : Culture & Musique */}
      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 transition-transform">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 bg-fuchsia-100 text-fuchsia-600 rounded-xl flex items-center justify-center">
            <Music size={32} />
          </div>
          <span className="text-xs font-bold bg-white text-slate-500 px-3 py-1 rounded-full shadow-sm">Savigny-le-Temple</span>
        </div>
        <h3 className="text-xl font-bold mb-3">L'Empreinte</h3>
        <p className="text-slate-600">
          Scène de Musiques Actuelles (SMAC) mythique de l'agglomération. Avec sa programmation éclectique allant du rock indé à l'électro, c're le lieu incontournable pour vos soirées concerts et afterworks le week-end, sans avoir à remonter sur Paris.
        </p>
      </div>

      {/* Activité 2 : Sport & Événements */}
      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 transition-transform">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
            <Trophy size={32} />
          </div>
          <span className="text-xs font-bold bg-white text-slate-500 px-3 py-1 rounded-full shadow-sm">Agglomération</span>
        </div>
        <h3 className="text-xl font-bold mb-3">Dynamisme Associatif</h3>
        <p className="text-slate-600">
          Le territoire vibre au rythme de ses clubs et de ses infrastructures sportives. Rejoignez une communauté soudée et participez à des événements fédérateurs et conviviaux, à l'image des fameuses Olympiades du Baby Hand en juin.
        </p>
      </div>

      {/* Activité 3 : Nature & Plein air */}
      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 transition-transform">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
            <TreePine size={32} />
          </div>
          <span className="text-xs font-bold bg-white text-slate-500 px-3 py-1 rounded-full shadow-sm">Bois-le-Roi</span>
        </div>
        <h3 className="text-xl font-bold mb-3">Base de Loisirs & Forêt</h3>
        <p className="text-slate-600">
          À quelques minutes du centre de Melun, profitez d'un accès direct à la nature. Un immense terrain de jeu avec des plans d'eau, parfait pour décompresser, pique-niquer, faire du sport ou simplement voir courir vos animaux de compagnie.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-12 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Building className="text-blue-500" size={24} />
          <span className="font-bold text-xl">Agglomération Partenaire</span>
        </div>
        <p className="text-slate-400">
          Un projet soutenu par les acteurs publics et privés du territoire pour attirer les jeunes talents.
        </p>
      </footer>

    </div>
  );
}