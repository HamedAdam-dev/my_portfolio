import React, { useState, useEffect } from 'react'
import './site.css'

import imgHamed from './assets/photos/Hamed_President.JPG'
import resumePdf from './assets/Resume/Hamed Adam.pdf'

import imgDune from './assets/photos/dune.jpg'
import imgDune3 from './assets/photos/Dune 3.jpg'
import imgModa from './assets/photos/Moda.jpg'
import imgPicky from './assets/photos/Picky.jpg'
import imgPicky2 from './assets/photos/Picky Eater 2.png'
import imgWidening from './assets/photos/Widening Participation.jpeg'
import imgER from './assets/photos/ER Team.JPG'
import imgLusu from './assets/photos/Lusu team.jpeg'

import imgRocketLaunch from './assets/photos/rocketry-launch.jpg'
import imgRocketTeam from './assets/photos/rocketry-team.jpg'
import imgRocketMeet from './assets/photos/lrs-1.jpg'
import imgRocketMeeting from './assets/photos/rocketry-meeting.jpg'
import imgRocketLounge from './assets/photos/rocketry-lounge.jpg'
import imgRocketDinner from './assets/photos/rocketry-dinner.jpg'

import imgTEDX1 from './assets/photos/tedx-1.jpg'
import imgTEDX2 from './assets/photos/tedx-2.jpg'
import imgTEDX3 from './assets/photos/tedx-3.jpg'

import imgHack1 from './assets/photos/hack-1.jpg'
import imgHack2 from './assets/photos/hack-2.jpg'
import imgHack3 from './assets/photos/hack-3.jpg'
import imgRSS from './assets/photos/rss.jpg'

const EMAIL = 'phys.hamed.adam@gmail.com'

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experiences' },
  { label: 'Contact', id: 'contact' },
]

const EXPERIENCES = [
  {
    title: 'Experimental Particle Physics Intern',
    subtitle: 'Particle Physics Group, Lancaster · Aug–Oct 2026',
    description: 'As an experimental particle physics intern working on LArTPC neutrino detection for Fermilab’s DUNE experiment, supervised by Prof. Jaroslaw Nowak, I built machine learning classifiers for particle identification and worked on event reconstruction from detector data. I studied neutrino interactions that produce a lambda and a K+ in the SBND liquid-argon time projection chamber, and I’ve learned immensely from this project. A lot has gone over my head, but the lessons that will stay with me forever are to question everything (every assumption made and every function used in the code) and, most importantly, to be okay with not knowing everything, as there is a lot to learn. Huge thanks to Tom and Isobel for taking time out of their very busy schedules to teach me some cool science, and many thanks to Prof. Jarek for giving me this opportunity.',
    images: [imgDune, imgDune3],
    fixed: true,
    cover: true,
    link: 'https://github.com/HamedAdam-dev/Dune-LArTPC-',
  },
  {
    title: 'Research Intern',
    subtitle: 'Nonlinear and Biomedical Physics Group · Jun–Aug 2026',
    description: 'In the Nonlinear and Biomedical Physics Group under Prof. Aneta Stefanovska, I worked on chronotaxic systems: oscillators whose frequency changes with time while their amplitude and phase stay stable. I contributed to the analysis of a 300-day Li-ion battery ageing Electrochemical Impedance Spectroscopy experiment, using wavelet-based phase coherence (MODA, MATLAB) on impedance spectra reconstructed from current–voltage time series. We then developed the case for a nonlinear capacitor model of the voltage–current relationship. The ultimate goal was to find better methods to detect battery failure and ageing. This was a new field for my supervisor, as she is a biophysicist, so she and I were learning about batteries together, which was very fun and also scary. The work on this is currently ongoing, but I had to leave at the end of summer. This is the link to the original battery paper co-authored by Prof. Wilson and my supervisor Prof. Aneta.',
    images: [imgModa],
    fixed: true,
    full: true,
    cover: true,
    link: 'https://research.lancaster-university.uk/en/publications/early-prediction-of-li-ion-cell-failure-from-eis-derived-from-cur/',
    paper: 'https://research.lancaster-university.uk/en/publications/early-prediction-of-li-ion-cell-failure-from-eis-derived-from-cur/',
  },
  {
    title: 'Lancaster Rocketry Society',
    subtitle: 'Co-founder and president · May 2026–present',
    description: 'I am the type of person to say yes to most things, so when my friend asked if I wanted to build a rocketry society with him, I simply said, “Yep, when would you like to meet to talk about it more?” Now we have over 150 members. We are sponsored by companies such as AISLER, Eurocircuits, and Altium. I built two competition teams to compete in the National Rocketry Championship and the Satellite Design Competition respectively. I led the hardware design and managed our executive team. I also secured lab access and funding from the engineering department, and invited Dr Lie Wang, who works for the European Space Agency, to supervise our Satellite Design Competition team. Everyone on my executive team is elite, and I’m so happy to be surrounded by such knowledgeable and proactive people. This wouldn’t have been possible without them. Co-founding the rocketry society has to be my proudest accomplishment, and I can’t stop talking about it to everyone, hahaha.',
    images: [imgRocketLaunch, imgRocketTeam, imgRocketMeet, imgRocketMeeting, imgRocketLounge, imgRocketDinner],
    cover: true,
    link: 'https://lancaster-rocketry-society.github.io/Website/',
  },
  {
    title: 'Picky Eater',
    subtitle: 'Project director · Oct 2025–present',
    description: 'From a short catch-up with my Year 1 friends over the long summer to PDR sprints and weekly team meetings to discuss progress. Out of all my experiences at Lancaster, attempting to co-found a startup in second year with my friends was the most transformative and also the most painful experience ever. Not many people share their failures, but this one is special to me. Moving from Saudi to the UK was a huge shocker for me, as having to check whether a food item was halal or not was something new. So I came up with the idea to create an app that helps people with dietary restrictions find places to eat much more easily, and we wanted to make it an advertising platform for smaller hidden-gem businesses too, via user-generated content. So we started coding and creating the pitch deck, as well as hiring people to join our dev team. Some people had to leave due to uni deadlines and upcoming exams, and others left as they found graduate roles. With no idea of what leadership is or how to run a business adequately, I fell short. I learned so much from this experience, and I wouldn’t be able to properly put it into words, but in short, I now know what hard work actually is, how to build and lead a team, and how to plan well before execution. I’m glad to take these lessons with me to the Rocketry Society, which is thriving mostly due to my failure as a startup founder.',
    images: [imgPicky, imgPicky2],
    cover: true,
    link: 'https://picky-eater-beta.vercel.app/',
  },
  {
    title: 'Widening Participation, Role Model And External Relations Ambassador',
    subtitle: 'Lancaster University · Oct 2025–present',
    description: 'I have worked many part-time jobs during my time at Lancaster, but my favourite gigs have to be the ambassador roles. This role really does test your patience, resilience and social battery. On open days, I interacted with over 100 parents asking about my experience at Lancaster and what advice I had for their child and It was really nice talking to them. Meeting so many people from all over the country opened my eyes to how alike we all are: we have the same questions and worries, and similar experiences too. This job has made me a more empathetic and emotionally intelligent person, and I would do it all over again despite the long hours, hahaha.',
    images: [imgWidening, imgER],
  },

  {
    title: 'Events Crew',
    subtitle: 'Lancaster University · Oct 2025–present',
    description: 'I helped organise and run events for the university, such as Welcome Week and the Freshers’ Fair. I also worked on Roses, the largest intervarsity competition in Europe, where every sports team in Lancaster competes against its counterpart from York. Funnily enough, we have beaten York every year for the past five years, but the rivalry is still going strong and I can’t wait for Roses 2027. It’s really nice contributing to Lancaster, a place so close to my heart. I feel that my work, despite being small, has some impact on the student experience. Organising events and helping societies and local businesses has really turned me into a people person, and I am now certain that I would much rather work in a team than alone.',
    images: [imgLusu],
  },

  {
    title: 'RSS Hackathon',
    subtitle: 'Royal Statistical Society · 2nd place',
    description: "This was my first hackathon, and I went in not expecting much. I was used to programming on my own, so I had to learn how to work with a team in a very short time. The assignment was simple and very open-ended: analyse a large dataset and use statistical methods to explain what it shows. Before writing a single line of code, we laid out the plan with precision. Everyone knew what they needed to do and the roles were clear, so everything flowed smoothly until the presentation. Presenting is one of my weaknesses, but I forced myself out of my comfort zone and did my best to articulate myself well. The judges were impressed with the methods we used, and we ended up placing second.",
    images: [imgRSS],
  },
  {
    title: 'Quant Hackathon',
    subtitle: 'Quantitative Finance Hackathon',
    description: 'Organised the first Quant Hackathon in Lancaster, where participants had to build the bot with the best strategy under tight deadlines. I was very impressed with how the teams worked together. It felt more like a hangout than an assignment, and I love this type of teamwork. Some participants had never programmed before, while others had interned at companies such as Palantir, Barclays and BP Trading. Regardless of their experience, everyone gave it their all until the last second, and their competitive spirit really moved me.',
    images: [imgHack1, imgHack2, imgHack3],
  },
  {
    title: 'TEDx',
    subtitle: 'TEDx Lancaster University',
    description: 'Coordinated TEDx Lancaster, bringing in speakers from around the UK. It was a life-changing day and my first experience of taking something from idea to reality. I particularly enjoyed talking to the speakers behind the scenes and learning from their really cool and unique experiences. Make sure to check it out on YouTube. Huge thanks to Hashim Ahmed for making this happen, and to everyone else on the LU Enactus team. It wouldn’t have been possible without them.',
    images: [imgTEDX1, imgTEDX2, imgTEDX3],
  },
]

const SKILLS = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'C', 'C++', 'SQL'] },
  { category: 'Web & tools', items: ['React', 'Express', 'Vite', 'Git', 'Firebase', 'Linux', 'Docker'] },
  { category: 'Engineering', items: ['SolidWorks', 'CAD', 'Assembly (x86)', 'STM32 microcontrollers', 'PID control', 'PCB & schematic design (KiCad)'] },
  { category: 'Modules', items: ['Quantum mechanics', 'Linear algebra', 'Computational modelling', 'Real analysis', 'Thermodynamics', 'Electrodynamics'] },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/HamedAdam-dev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hamed-adam-dev' },
  { label: 'Email', href: `mailto:${EMAIL}` },
]

function scrollToId(id) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
  })
}

function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActiveId((current) => (current === visible.target.id ? current : visible.target.id))
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(NAV_LINKS.map((link) => link.id))

  const handleClick = (event, id) => {
    event.preventDefault()
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <header className="site-header">
      <nav className="site-nav wrap">
        <a href="#home" onClick={(event) => handleClick(event, 'home')} className="nav-brand">
          Hamed Adam
        </a>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? 'active' : ''}
                onClick={(event) => handleClick(event, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="nav-resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero wrap">
      <div>
        <p className="kicker">Physics · Lancaster University</p>
        <h1>Hamed Adam</h1>
        <p className="lede">
          I am a Theoretical Physics student and the President of the Lancaster Rocketry Society. I worked as an experimental particle physics intern on LArTPC neutrino detection for Fermilab’s DUNE experiment, supervised by Prof. Jaroslaw Nowak, and as a research intern in the Nonlinear and Biomedical Physics Group under Prof. Aneta Stefanovska. Additionally, I worked as Events Crew for LUSU and as a student ambassador for the External Relations, EDI and Widening Participation teams.
        </p>
        <div className="hero-links">
          <a href="#experiences" onClick={(event) => { event.preventDefault(); scrollToId('experiences') }}>
            Experience
          </a>
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <figure className="hero-photo">
        <img
          src={imgHamed}
          alt="Hamed Adam"
          width="1400"
          height="1018"
          decoding="async"
          fetchPriority="high"
        />
      </figure>
    </section>
  )
}



function Experiences() {
  return (
    <section id="experiences" className="section experiences wrap">
      <h2>Experience</h2>
      <div>
        {EXPERIENCES.map((experience) => (
          <article key={experience.title} className={`exp${(experience.images?.length || 0) === 6 ? ' exp-wide' : ''}${experience.fixed ? ' exp-fixed' : ''}${experience.full ? ' exp-full' : ''}${experience.cover ? ' exp-cover' : ''}`}>
            {experience.cover && experience.link && (
              <a
                className="exp-cover-link"
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={experience.title}
              />
            )}
            <div className={`exp-photos count-${experience.images?.length || 1}`}>
              {experience.images?.length ? (
                experience.images.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${experience.title}, photo ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    width="1400"
                    height="1050"
                  />
                ))
              ) : (
                <div className="exp-placeholder" role="img" aria-label={`Photo placeholder for ${experience.title}`}>
                  <span>Photo</span>
                </div>
              )}
            </div>
            <div className="exp-copy">
              <h3>
                {experience.link && !experience.cover ? (
                  <a href={experience.link} target="_blank" rel="noopener noreferrer">{experience.title}</a>
                ) : experience.title}
              </h3>
              <p className="exp-meta">{experience.subtitle}</p>
              <p>{experience.description}</p>
              {experience.paper && (
                <a className="exp-paper" href={experience.paper} target="_blank" rel="noopener noreferrer">
                  Original paper
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills wrap">
      <h2>Skills</h2>
      <div>
        {SKILLS.map((group) => (
          <div key={group.category} className="skill-row">
            <h3>{group.category}</h3>
            <p>{group.items.join('  ·  ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact wrap">
      <h2>Contact</h2>
 
      <a className="contact-mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer wrap">
      <p className="footer-credit">Hamed Adam</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
