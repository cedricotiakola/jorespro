import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
import ProjectItem from './ProjectItem';

function CVContent() {
  return (
    <div className="bg-white shadow-lg print:shadow-none">
      <div className="p-6 print:p-3 text-sm print:text-xs">
        <header className="border-b-2 border-blue-600 pb-3 mb-3">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            JORESSE FOUNDIÉ TCHOUAMENI
          </h1>
          <p className="text-sm text-blue-600 font-semibold mb-2">
            Développeur Web Junior | Développeur Full Stack en progression
          </p>

          <div className="grid grid-cols-2 gap-1 gap-y-1 text-xs text-gray-700">
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-blue-600 flex-shrink-0" />
              <span>Douala, Cameroun (ouvert à la mobilité)</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} className="text-blue-600 flex-shrink-0" />
              <a href="mailto:joresstchouameni@gmail.com" className="hover:text-blue-600">
                joresstchouameni@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} className="text-blue-600 flex-shrink-0" />
              <span>+237 657 255 988</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin size={14} className="text-blue-600 flex-shrink-0" />
              <a
                href="https://www.linkedin.com/in/jores-foundie-tchouameni-7b322b345/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 truncate"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Github size={14} className="text-blue-600 flex-shrink-0" />
              <a
                href="https://github.com/JOGO237"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <Section title="PROFIL PROFESSIONNEL">
          <p className="text-gray-700 leading-snug">
            Développeur web polyvalent passionné avec 2 ans d'expérience en full-stack. Expert en PHP natif (POO/MVC) et MySQL, capable de concevoir des interfaces modernes et des systèmes dynamiques. Rigoureux, créatif et adaptable, j'ai développé plusieurs applications réelles en gestion, e-learning et e-commerce. Cherche à rejoindre une entreprise innovante au Canada pour contribuer à des projets ambitieux.
          </p>
        </Section>

        <Section title="COMPÉTENCES TECHNIQUES">
          <div className="grid grid-cols-1 gap-1">
            <div><span className="font-semibold">Langages : </span><span>PHP · JavaScript · HTML5 · CSS3 · C · C++ · Java</span></div>
            <div><span className="font-semibold">Front-End : </span><span>Bootstrap · Tailwind · jQuery · AJAX · React</span></div>
            <div><span className="font-semibold">Back-End : </span><span>PHP (POO/MVC) · API REST · Firebase</span></div>
            <div><span className="font-semibold">Base de données : </span><span>MySQL · UML · MERISE</span></div>
            <div><span className="font-semibold">Outils : </span><span>Git/GitHub · VS Code · Photoshop</span></div>
          </div>
        </Section>

        <Section title="EXPÉRIENCE PROFESSIONNELLE">
          <div className="space-y-2">
            <ExperienceItem
              title="Développeur Full Stack"
              company="SMART SOLUTION IT"
              location="Douala"
              period="Déc. 2024 – Aujourd'hui"
              achievements={[
                "Applications web dynamiques avec PHP natif (architecture MVC)",
                "Création et consommation d'API RESTful",
                "Gestion et optimisation MySQL",
                "Intégration front-end responsive",
                "Authentification sécurisée et gestion des rôles",
                "Collaboration Agile via Git"
              ]}
              technologies="PHP · MySQL · API REST · JavaScript · Git"
            />

            <ExperienceItem
              title="Développeur Web – Stagiaire & Junior"
              company="FORAMA Cameroun SARL"
              location="Douala"
              period="Juin 2024 – Sept. 2025"
              achievements={[
                "Interfaces modernes et adaptatives (Bootstrap, Tailwind, CSS3)",
                "Intégration API REST internes et tierces",
                "Applications avec Firebase (Auth, Firestore, Storage)",
                "Fonctionnalités avancées : e-mails, utilisateurs, dashboards",
                "Tests, correction bugs et optimisation du code",
                "Collaboration Agile avec documentation technique"
              ]}
            />
          </div>
        </Section>

        <Section title="PROJETS RÉALISÉS">
          <div className="space-y-1">
            <ProjectItem
              name="ÉduExam Academy"
              description="Plateforme d'accès à des ressources éducatives gratuites et payantes"
              technologies="PHP · HTML5 · CSS3 · Firebase"
            />
            <ProjectItem
              name="Gestion de Salon de Coiffure (USA)"
              description="Application complète : gestion clients, rendez-vous, finances"
              technologies="PHP · Tailwind · React"
              link="http://tiakosalon.free.nf"
            />
            <ProjectItem
              name="Promotion Football Cameroun"
              description="Mise en avant du football local"
              technologies="PHP · Bootstrap · MySQL"
              link="http://footcamer.byethost7.com/index.php"
            />
            <ProjectItem
              name="Boutique & Librairie en ligne"
              description="E-commerce + gestion de stock"
              technologies="PHP · MySQL · Bootstrap"
              link="http://olgashop.byethost12.com"
            />
            <ProjectItem
              name="EduExamPro"
              description="Gestion scolaire et e-commerce éducatif"
              technologies="PHP · Firebase · MySQL"
              link="http://eduexampro.byethost7.com"
            />
          </div>
        </Section>

        <Section title="FORMATION">
          <div className="space-y-1">
            <div>
              <p className="font-semibold text-gray-900">Licence 3 – Génie Logiciel</p>
              <p className="text-gray-700 text-sm">Institut Universitaire de la Côte (IUC), Douala — En cours (2025)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">BTS – Génie Logiciel</p>
              <p className="text-gray-700 text-sm">Institut Universitaire Siantou — (2023 – 2025)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Licence 1 – Informatique</p>
              <p className="text-gray-700 text-sm">Université de Yaoundé I — (2021 – 2022)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">CAPIEMP</p>
              <p className="text-gray-700 text-sm">Bafang — (2022 – 2023)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Baccalauréat Série C</p>
              <p className="text-gray-700 text-sm">Lycée Classique de Nkobilisson — (2020)</p>
            </div>
          </div>
        </Section>

        <div className="grid grid-cols-2 gap-4">
          <Section title="LANGUES">
            <div className="space-y-1">
              <p className="text-gray-700"><span className="font-semibold">Français :</span> Courant (langue maternelle)</p>
              <p className="text-gray-700"><span className="font-semibold">Anglais :</span> Intermédiaire / Professionnel</p>
            </div>
          </Section>

          <Section title="CENTRES D'INTÉRÊT">
            <p className="text-gray-700">
              Technologies · Développement personnel · Musique · Sport · Photographie · Apprentissage continu
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default CVContent;
