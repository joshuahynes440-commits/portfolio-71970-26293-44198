import { useState, useEffect } from 'react';
import { 
  Shield, 
  Terminal, 
  Scan, 
  Network, 
  Lock, 
  Eye, 
  Server, 
  Bug, 
  Code,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Download,
  ExternalLink,
  CheckCircle,
  Menu,
  ChevronDown,
  Filter,
  User,
  Briefcase,
  FileText,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import cyberHeroBg from '@/assets/cyber-hero-bg.jpg';
import mantisLogo from '@/assets/mantis-logo.png';
import profileHero from '@/assets/profile-hero.png';
import mantisHero from '@/assets/mantis-hero.jpg';
import tcsLogo from '@/assets/logos/tcs-logo.png';
import deloitteLogo from '@/assets/logos/deloitte-logo.png';
import mastercardLogo from '@/assets/logos/mastercard-logo.png';
import hpLogo from '@/assets/logos/hp-logo.png';
import tryhackmeLogo from '@/assets/logos/tryhackme-logo.png';

const CyberPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [selectedProjectFilter, setSelectedProjectFilter] = useState('All');
  const [skillsInView, setSkillsInView] = useState(false);
  const [isMantisModalOpen, setIsMantisModalOpen] = useState(false);
  const [nameTypedText, setNameTypedText] = useState('');
  const fullText = 'Joshua Hynes';
  const nameFullText = "I'M JOSHUA HYNES";

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation for name
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    // Intersection Observer for skills animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      clearInterval(typeTimer);
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  // Typing animation for "I'M JOSHUA HYNES" that repeats every 5 seconds
  useEffect(() => {
    const typeNameAnimation = () => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i <= nameFullText.length) {
          setNameTypedText(nameFullText.slice(0, i));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 200);
    };

    // Start immediately
    typeNameAnimation();

    // Repeat every 5 seconds
    const repeatInterval = setInterval(typeNameAnimation, 5000);

    return () => {
      clearInterval(repeatInterval);
    };
  }, []);

  const skills = [
    { name: 'Network Security', level: 90, icon: Shield },
    { name: 'Threat Detection', level: 85, icon: Eye },
    { name: 'Vulnerability Assessment', level: 88, icon: Bug },
    { name: 'Penetration Testing', level: 75, icon: Terminal },
    { name: 'Linux/Windows Admin', level: 92, icon: Server },
    { name: 'Traffic Analysis', level: 87, icon: Network },
    { name: 'Incident Response', level: 83, icon: Scan },
    { name: 'Security Tools', level: 89, icon: Code }
  ];

  const projects = [
    {
      title: '🕵️‍♂️ Built a Honeypot',
      description: 'A decoy system built to lure attackers and study their behavior in a safe, isolated environment.',
      preview: 'Simulates login interfaces to log attack patterns, credential attempts, and reconnaissance behavior.',
      tools: ['Flask', 'Python', 'Log Analysis', 'Network Security'],
      type: 'Security Research',
      category: 'Threat Detection',
      link: '/honeypot'
    },
    {
      title: '🧩 Web Application Penetration Test',
      description: 'Conducted ethical penetration test on Uber.com replica to identify web vulnerabilities.',
      preview: 'Used Burp Suite for HTTP/S interception and comprehensive vulnerability analysis.',
      tools: ['Burp Suite', 'OWASP Top 10', 'Web Security', 'DVWA'],
      type: 'Penetration Testing',
      category: 'Web Security',
      link: '/web-pentest'
    },
    {
      title: '⚙️ Vulnerability Assessment & Exploitation',
      description: 'Performed comprehensive security assessment of Metasploitable3 VM in isolated lab environment.',
      preview: 'Network enumeration using Nmap and exploit execution via Metasploit Framework.',
      tools: ['Nmap', 'Metasploit', 'Metasploitable3', 'VirtualBox'],
      type: 'Lab Environment',
      category: 'Penetration Testing',
      link: '/vuln-assessment'
    },
    {
      title: '🧠 Incident Response Tabletop Exercise',
      description: 'Simulated ransomware crisis using OpenBAS platform mimicking Akira ransomware group tactics.',
      preview: 'Followed NIST Incident Response lifecycle through all five critical phases.',
      tools: ['OpenBAS', 'NIST Framework', 'Incident Response', 'Forensics'],
      type: 'Incident Response',
      category: 'Threat Detection',
      link: '/incident-response'
    }
  ];

  const projectCategories = ['All', 'Penetration Testing', 'Threat Detection', 'Network Security', 'Web Security'];
  
  const filteredProjects = selectedProjectFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedProjectFilter);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experience = [
    {
      role: 'Virtual Cybersecurity Job Simulations',
      company: 'Forage',
      period: 'Aug 2025',
      location: 'Remote',
      achievements: [
        'Completed multiple professional cybersecurity job simulations hosted on Forage, gaining practical exposure to industry-relevant tasks across leading global organizations.',
        'Tata Consultancy Services – Cybersecurity Analyst Simulation: Practiced Identity and Access Management (IAM) strategies and aligned them with business objectives. Produced documentation and presentations to communicate technical solutions.',
        'Deloitte Australia – Cybersecurity Simulation: Analyzed web activity logs to detect suspicious activity. Supported a simulated client during a security breach and recommended mitigation steps.',
        'Mastercard – Cybersecurity Simulation: Served as an analyst on the Security Awareness Team. Reported phishing and other threats, identified at-risk business areas, and recommended targeted training.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-foreground overflow-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={mantisLogo} alt="Mantis Logo" className="w-10 h-10 animate-cyber-pulse" />
            <span className="text-xl font-cyber font-bold text-primary">MANTIS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors font-cyber">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-primary transition-colors font-cyber">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-primary transition-colors font-cyber">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-primary transition-colors font-cyber">
              Experience
            </button>
            <button onClick={() => scrollToSection('certifications')} className="text-muted-foreground hover:text-primary transition-colors font-cyber">
              Certificates
            </button>
            <a href="/cv" className="text-muted-foreground hover:text-primary transition-colors font-cyber">
              CV
            </a>
            <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors font-cyber">
              Contact
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/20">
                  <Menu className="w-4 h-4 mr-2" />
                  Menu
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 bg-card/95 backdrop-blur-md border-primary/30 shadow-glow-green z-50"
              >
                <DropdownMenuLabel className="font-cyber text-primary">Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-primary/30" />
                <DropdownMenuItem 
                  onClick={() => scrollToSection('about')}
                  className="font-cyber hover:bg-primary/20 hover:text-primary cursor-pointer"
                >
                  <User className="w-4 h-4 mr-2" />
                  About
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('skills')}
                  className="font-cyber hover:bg-primary/20 hover:text-primary cursor-pointer"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Skills
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('projects')}
                  className="font-cyber hover:bg-primary/20 hover:text-primary cursor-pointer"
                >
                  <Terminal className="w-4 h-4 mr-2" />
                  Projects
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('experience')}
                  className="font-cyber hover:bg-primary/20 hover:text-primary cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Experience
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('certifications')}
                  className="font-cyber hover:bg-primary/20 hover:text-primary cursor-pointer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Certificates
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="/cv"
                    className="font-cyber hover:bg-primary/20 hover:text-primary cursor-pointer flex items-center"
                  >
                    <User className="w-4 h-4 mr-2" />
                    CV / Résumé
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('contact')}
                  className="font-cyber hover:bg-primary/20 hover:text-primary cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      <div className="pt-20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-20 animate-scan-line"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-1 h-full">
            {[...Array(100)].map((_, i) => (
              <div 
                key={i} 
                className="text-primary text-xs animate-matrix-fall opacity-30"
                style={{ animationDelay: `${Math.random() * 4}s` }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: `url(${cyberHeroBg})` }}
        />
        
        {/* Decorative animated elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/30 rounded-full animate-cyber-pulse" />
        <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-secondary/30 rounded-lg animate-spin" style={{ animationDuration: '8s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-[2px] bg-primary animate-pulse" />
              <span className="font-cyber text-2xl md:text-3xl text-primary font-bold tracking-wider">
                {nameTypedText}
                <span className="animate-blink">_</span>
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-cyber font-bold leading-tight">
              <span className="text-primary">Born of Circuits. </span>
              <span className="text-secondary">Forged in Code.</span>
            </h1>
            
            <div className="pl-4 border-l-2 border-primary">
              <p className="text-muted-foreground leading-relaxed">
                Once I built circuits, now I deconstruct code. My path from Electrical Engineering to Cybersecurity is powered by curiosity and the urge to understand how things really work. Whether it's tearing down binaries, analyzing malware, or breaking systems to rebuild them stronger. I explore the space where creativity meets chaos. Always in debug mode. Always evolving.
              </p>
            </div>
            
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative elements around image */}
              <div className="absolute -top-8 -right-8 w-24 h-24">
                <Shield className="w-full h-full text-primary/20 animate-cyber-pulse" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20">
                <Lock className="w-full h-full text-secondary/20 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              
              {/* Main mantis image */}
              <div className="relative w-[400px] h-[400px] mx-auto">
                <div className="relative rounded-full overflow-hidden w-full h-full border-4 border-primary/30 shadow-glow-intense animate-float">
                  <img 
                    src={mantisHero} 
                    alt="Mantis - Symbol of Stealth and Focus" 
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                
                {/* Unmask the Mantis Button */}
                <Button
                  onClick={() => setIsMantisModalOpen(true)}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary/90 text-primary-foreground font-cyber shadow-glow-green border-2 border-primary/50 transition-all duration-500 hover:scale-110 hover:shadow-glow-intense hover:border-secondary animate-pulse hover:animate-none group"
                  style={{ animationDelay: '0.6s', animationDuration: '2s' }}
                >
                  <span className="relative z-10 group-hover:animate-pulse">Unmask the Mantis</span>
                  <span className="absolute inset-0 bg-secondary/20 rounded-md blur-xl group-hover:bg-secondary/40 transition-all duration-500"></span>
                </Button>
              </div>
              
              {/* Animated dots */}
              <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full animate-ping" />
              <div className="absolute bottom-20 left-10 w-3 h-3 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cyber font-bold text-center mb-12">
            <span className="text-primary">[</span>
            <span className="text-secondary">PROFILE_SUMMARY</span>
            <span className="text-primary">]</span>
          </h2>
          
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Cybersecurity enthusiast and IT Support Technician with hands-on experience in securing systems, 
                monitoring threats, and troubleshooting IT infrastructure. Skilled in using industry-standard tools 
                like <span className="text-primary font-cyber">Splunk</span>, <span className="text-primary font-cyber">Snort</span>, 
                <span className="text-primary font-cyber"> Wireshark</span>, and <span className="text-primary font-cyber">Nmap</span> to 
                detect vulnerabilities and protect networks. Adept in both Windows and Linux environments with a passion 
                for continuous learning and building secure systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cyber font-bold text-center mb-12">
            <span className="text-primary">[</span>
            <span className="text-secondary">SKILL_MATRIX</span>
            <span className="text-primary">]</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 group hover:scale-105 hover:shadow-glow-green animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <skill.icon className="w-8 h-8 text-primary group-hover:animate-cyber-pulse transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 blur-md bg-primary/20 group-hover:bg-primary/40 transition-all" />
                    </div>
                    <h3 className="font-cyber font-semibold text-sm">{skill.name}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span className="text-primary font-cyber font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                      {/* Animated charging bar with sweep effect and color gradient */}
                      <div 
                        className="absolute inset-0 rounded-full shadow-glow-green animate-skill-charge"
                        style={{ 
                          '--skill-level': `${skill.level}%`,
                          background: 'linear-gradient(90deg, hsl(0, 85%, 55%) 0%, hsl(30, 95%, 50%) 40%, hsl(50, 100%, 50%) 60%, hsl(80, 90%, 45%) 80%, hsl(142, 76%, 50%) 100%)'
                        } as React.CSSProperties}
                      >
                        {/* Animated charging sweep effect */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-charge-sweep-infinite"
                        />
                      </div>
                      {/* Glowing pulse at the end of bar */}
                      <div 
                        className="absolute top-0 h-full w-2 bg-white shadow-glow-intense animate-pulse-end"
                        style={{ 
                          '--skill-level': `${skill.level}%`
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cyber font-bold text-center mb-12">
            <span className="text-primary">[</span>
            <span className="text-secondary">SECURITY_PROJECTS</span>
            <span className="text-primary">]</span>
          </h2>
          
          {/* Project Filter Dropdown */}
          <div className="flex justify-center mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/20 font-cyber">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter: {selectedProjectFilter}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                className="w-56 bg-card/95 backdrop-blur-md border-primary/30 shadow-glow-green z-50"
              >
                <DropdownMenuLabel className="font-cyber text-primary">Project Categories</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-primary/30" />
                {projectCategories.map((category) => (
                  <DropdownMenuItem 
                    key={category}
                    onClick={() => setSelectedProjectFilter(category)}
                    className={`font-cyber hover:bg-primary/20 hover:text-primary cursor-pointer ${
                      selectedProjectFilter === category ? 'bg-primary/20 text-primary' : ''
                    }`}
                  >
                    <Terminal className="w-4 h-4 mr-2" />
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 group hover:shadow-glow-green">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-cyber text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="border-secondary text-secondary text-xs">
                      Ethical Research Only
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-2">{project.preview}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-primary/20 text-primary border-primary/30 font-cyber">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={() => window.location.href = project.link}
                    variant="default"
                    size="sm"
                    className="bg-gradient-cyber text-primary-foreground hover:shadow-glow-intense w-full"
                  >
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            All projects conducted in controlled research environments for educational purposes only.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-cyber font-bold text-center mb-12">
            <span className="text-primary">[</span>
            <span className="text-secondary">PROFESSIONAL_LOG</span>
            <span className="text-primary">]</span>
          </h2>
          
          {experience.map((exp, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-cyber font-bold text-primary">{exp.role}</h3>
                    <p className="text-lg text-secondary">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-background px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cyber font-bold text-center mb-12">
            <span className="text-primary">[</span>
            <span className="text-secondary">CERTIFICATES</span>
            <span className="text-primary">]</span>
          </h2>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Certificates</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Validated skills through hands-on cybersecurity training and real-world job simulations.
            </p>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I have completed a series of professional training programs and job simulations with globally recognized organizations. 
              These certifications demonstrate my ability to apply cybersecurity concepts in practical scenarios, strengthen technical 
              expertise, and develop problem-solving skills across networking, system administration, and security awareness. Each 
              certificate reflects hands-on experience and continuous growth in the cybersecurity field.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certificate 1: Tata */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 group hover:shadow-glow-green relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundImage: `url(${tcsLogo})` }}
              />
              <CardContent className="p-6 relative z-10">
                <h4 className="text-xl font-cyber font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Tata Cybersecurity Analyst Completion Certificate
                </h4>
                <p className="text-muted-foreground mb-4">
                  Completed a job simulation with Tata Consultancy Services focused on Identity and Access Management (IAM). 
                  Collaborated with a cybersecurity consulting team to align IAM practices with business objectives. Produced 
                  detailed documentation and presentations, demonstrating the ability to clearly communicate complex technical concepts.
                </p>
                <div className="mb-4">
                  <h5 className="font-semibold text-sm text-primary mb-2">Skills Gained:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Identity and Access Management (IAM)</li>
                    <li>• Cybersecurity best practices</li>
                    <li>• Business alignment of security strategies</li>
                    <li>• Technical documentation and presentation skills</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => window.open('/lovable-uploads/881f33dc-a71a-44da-9be1-821e3cf41255.png', '_blank')}
                  variant="default"
                  size="sm"
                  className="bg-gradient-cyber text-primary-foreground hover:shadow-glow-intense transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Certificate 2: Deloitte */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 group hover:shadow-glow-green relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundImage: `url(${deloitteLogo})` }}
              />
              <CardContent className="p-6 relative z-10">
                <h4 className="text-xl font-cyber font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Deloitte Australia Cybersecurity Job Simulation Certificate
                </h4>
                <p className="text-muted-foreground mb-4">
                  Completed a simulation with Deloitte Australia involving the analysis of web activity logs to detect suspicious 
                  behavior. Supported a client during a simulated cybersecurity breach and provided recommendations for remediation.
                </p>
                <div className="mb-4">
                  <h5 className="font-semibold text-sm text-primary mb-2">Skills Gained:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Log analysis and interpretation</li>
                    <li>• Threat detection and incident response</li>
                    <li>• Client support during security incidents</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => window.open('/lovable-uploads/865e714a-8360-4347-ba03-683de090c703.png', '_blank')}
                  variant="default"
                  size="sm"
                  className="bg-gradient-cyber text-primary-foreground hover:shadow-glow-intense transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Certificate 3: Mastercard */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 group hover:shadow-glow-green relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundImage: `url(${mastercardLogo})` }}
              />
              <CardContent className="p-6 relative z-10">
                <h4 className="text-xl font-cyber font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Mastercard Cybersecurity Job Simulation Certificate
                </h4>
                <p className="text-muted-foreground mb-4">
                  Participated in a job simulation as an analyst on Mastercard's Security Awareness Team. Helped identify and 
                  report threats such as phishing attacks, and assessed business areas requiring enhanced security training. 
                  Contributed to the design and implementation of targeted awareness programs.
                </p>
                <div className="mb-4">
                  <h5 className="font-semibold text-sm text-primary mb-2">Skills Gained:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Security awareness and threat reporting</li>
                    <li>• Phishing detection and analysis</li>
                    <li>• Training design and implementation</li>
                    <li>• Security communication strategies</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => window.open('/lovable-uploads/77fffafa-bb42-4460-a427-ee45544dfaa8.png', '_blank')}
                  variant="default"
                  size="sm"
                  className="bg-gradient-cyber text-primary-foreground hover:shadow-glow-intense transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Certificate 4: HP Life */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 group hover:shadow-glow-green relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundImage: `url(${hpLogo})` }}
              />
              <CardContent className="p-6 relative z-10">
                <h4 className="text-xl font-cyber font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Introduction to Cybersecurity Awareness – HP Life
                </h4>
                <p className="text-muted-foreground mb-4">
                  Completed an introductory cybersecurity course with HP Life, gaining foundational knowledge of common 
                  online threats and data protection measures.
                </p>
                <div className="mb-4">
                  <h5 className="font-semibold text-sm text-primary mb-2">Skills Gained:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Recognition of common cybersecurity threats</li>
                    <li>• Basic data protection strategies</li>
                    <li>• Familiarity with essential cybersecurity terminology</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => window.open('/lovable-uploads/1501c999-47f9-467d-85d1-297eaf2de020.png', '_blank')}
                  variant="default"
                  size="sm"
                  className="bg-gradient-cyber text-primary-foreground hover:shadow-glow-intense transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Certificate 5: TryHackMe - Full width */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 group hover:shadow-glow-green md:col-span-2 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundImage: `url(${tryhackmeLogo})` }}
              />
              <CardContent className="p-6 relative z-10">
                <h4 className="text-xl font-cyber font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Pre-Security Completion Certificate – TryHackMe
                </h4>
                <p className="text-muted-foreground mb-4">
                  Completed the Pre-Security learning path on TryHackMe, covering the fundamentals of networking, operating 
                  systems, web technologies, and cybersecurity principles. Gained hands-on experience through interactive 
                  labs and simulated environments.
                </p>
                <div className="mb-4">
                  <h5 className="font-semibold text-sm text-primary mb-2">Skills Gained:</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Networking:</strong> TCP/IP, OSI model, DNS, HTTP/HTTPS, DHCP, ARP, routing, and firewalls</li>
                        <li>• <strong>Operating Systems:</strong> Linux command line, file management, permissions, processes; Windows administration, registry, and task management</li>
                        <li>• <strong>Web Fundamentals:</strong> HTTP requests/responses, cookies, headers, client-server architecture</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Cybersecurity:</strong> Cryptography basics, CIA triad, authentication & access control, threat actor awareness</li>
                        <li>• <strong>Practical IT & Troubleshooting:</strong> System log analysis, virtualization, and interactive lab-based problem solving</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => window.open('/lovable-uploads/4c9bf766-5f5b-4559-b82e-2dc83793d4d4.png', '_blank')}
                  variant="default"
                  size="sm"
                  className="bg-gradient-cyber text-primary-foreground hover:shadow-glow-intense transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-cyber font-bold mb-8">
            <span className="text-primary">[</span>
            <span className="text-secondary">ESTABLISH_CONNECTION</span>
            <span className="text-primary">]</span>
          </h2>
          
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-8">
                Have a message for me? Use the form below — I'll receive it directly via email.
              </p>
              
              <div className="mb-6 flex justify-center">
                <Button 
                  onClick={() => window.open('https://www.linkedin.com/in/joshua-hynes-8b7833314', '_blank')}
                  variant="default" 
                  size="lg" 
                  className="bg-gradient-cyber text-primary-foreground hover:shadow-glow-intense"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>

              <form 
                action="https://formspree.io/f/xwpkddjy" 
                method="POST"
                className="max-w-xl mx-auto space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  variant="default" 
                  size="lg" 
                  className="w-full bg-gradient-cyber text-primary-foreground hover:shadow-glow-intense"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mantis Modal */}
      <Dialog open={isMantisModalOpen} onOpenChange={setIsMantisModalOpen}>
        <DialogContent className="bg-card/95 backdrop-blur-md border-primary/50 shadow-glow-green max-w-lg animate-fade-in">
          <DialogHeader>
            <DialogTitle className="text-2xl font-cyber text-primary">
              Why the Mantis?
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-muted-foreground leading-relaxed space-y-4 text-base">
            <p>
              The mantis symbolizes <span className="text-primary font-semibold">stealth</span>, <span className="text-primary font-semibold">focus</span>, and <span className="text-primary font-semibold">patience</span> — all traits that define both great hunters and great hackers. Like a mantis, I strike only after observing, analyzing, and understanding every move of my target system. It's a reminder that <span className="text-secondary font-semibold">precision always beats chaos</span>.
            </p>
            <p>
              Oh, and I might've watched Kung Fu Panda a few too many times — so let's just say, all work and no play makes Hynes a dull ETHICAL hacker 🥋😉.
            </p>
          </DialogDescription>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/30 text-center">
        <p className="text-muted-foreground font-cyber">
          <span className="text-primary">&gt; </span>
          Securing the digital frontier, one system at a time
          <span className="text-primary animate-blink"> _</span>
        </p>
      </footer>
      </div>
    </div>
  );
};

export default CyberPortfolio;