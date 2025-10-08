import { useState, useEffect } from 'react';
import {
  Shield,
  Terminal,
  Download,
  Mail,
  MapPin,
  Linkedin,
  ExternalLink,
  Printer,
  Share2,
  CheckCircle,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Network,
  Lock,
  Cloud,
  FileText,
  ChevronRight,
  ChevronDown,
  X,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import mantisLogo from '@/assets/mantis-logo.png';
import profileCV from '@/assets/profile-cv.png';

const CVPage = () => {
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [expandedTimeline, setExpandedTimeline] = useState<string[]>(['education']);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const { toast } = useToast();

  const toggleTimeline = (id: string) => {
    setExpandedTimeline(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Joshua_Hynes_CV.pdf';
    link.download = 'Joshua_Hynes_CV.pdf';
    link.click();
    toast({
      title: "Download Started",
      description: "Joshua Hynes CV is downloading...",
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "CV page URL copied to clipboard",
    });
  };

  const handleContact = () => {
    window.location.href = 'mailto:hynesjoshua3@gmail.com?subject=Inquiry from CV Page';
  };

  const skills = {
    'Security Domains': ['GRC', 'Vulnerability Management', 'Incident Response', 'Cloud Security', 'IAM', 'Web App Security', 'CTI', 'PCI DSS', 'Penetration Testing', 'Digital Forensics'],
    'Tools': ['AWS (WAF, IAM, CloudTrail)', 'Splunk', 'Wazuh', 'Burp Suite', 'Metasploit', 'VirtualBox', 'VMware', 'Packet Tracer', 'OpenBAS', 'Nmap'],
    'Programming': ['Python', 'C/C++', 'Bash Scripting'],
    'OS & Networking': ['Linux Admin', 'Windows Admin', 'TCP/IP', 'DNS', 'DHCP', 'HTTP/S', 'Subnetting', 'Firewall Config'],
    'Frameworks': ['PCI DSS', 'NIST', 'OWASP Top 10', 'Cloud Shared Responsibility']
  };

  const projects = [
    {
      title: 'Built a Honeypot',
      description: 'Decoy system to lure attackers and study behavior',
      link: '/honeypot'
    },
    {
      title: 'Web Application Penetration Test',
      description: 'Ethical pentest on Uber.com replica with Burp Suite',
      link: '/web-pentest'
    },
    {
      title: 'Vulnerability Assessment & Exploitation',
      description: 'Security assessment of Metasploitable3 VM',
      link: '/vuln-assessment'
    },
    {
      title: 'Incident Response Tabletop Exercise',
      description: 'Simulated Akira ransomware crisis using OpenBAS',
      link: '/incident-response'
    }
  ];

  const timeline = [
    {
      id: 'education',
      category: 'Education',
      icon: GraduationCap,
      items: [
        {
          title: 'Cybersecurity Bootcamp',
          organization: 'Moringa School',
          location: 'Nairobi, Kenya',
          period: 'Feb 2025 - Oct 2025',
          details: [
            'Comprehensive training aligned with CompTIA Security+ objectives',
            'Hands-on experience in security tools, threat analysis, and defensive techniques',
            'Key Skills: SIEM (Splunk, Wazuh), Python for Security Scripting, Linux Administration, Vulnerability Management, Firewall Configuration, Cryptography, Network Security'
          ]
        },
        {
          title: 'BSc Electrical & Electronic Engineering',
          organization: 'JKUAT',
          location: 'Nairobi, Kenya',
          period: 'Sep 2019 - Jan 2025',
          details: [
            'Relevant Coursework: Critical Systems Design, Problem-Solving, Complex System Analysis',
            'Programming: C/C++ & Python for Engineering Applications',
            'Specializations: Embedded Systems, IoT'
          ]
        }
      ]
    },
    {
      id: 'certifications',
      category: 'Certifications',
      icon: Award,
      items: [
        {
          title: 'CompTIA Security+',
          organization: 'CompTIA',
          period: 'Expected Nov 2025',
          details: ['Industry-recognized certification demonstrating foundational security knowledge']
        },
        {
          title: 'Cloud Audit Academy',
          organization: 'AWS',
          period: '2025',
          details: ['Cloud Agnostic (AWS) certification']
        },
        {
          title: 'AWS WAF Introduction',
          organization: 'AWS',
          period: '2025',
          details: ['Web Application Firewall fundamentals']
        },
        {
          title: 'Foundation Level Threat Intelligence Analyst',
          organization: 'arcX',
          period: '2025',
          details: ['Cyber threat intelligence analysis foundations']
        }
      ]
    },
    {
      id: 'simulations',
      category: 'Forage Simulations',
      icon: Terminal,
      items: [
        {
          title: 'Deloitte Australia - Cyber Job Simulation',
          period: 'Aug 2025',
          details: [
            'Analyzed modern IT environment to identify security gaps and vulnerabilities',
            'Developed prioritized risk assessment and proposed mitigation strategies'
          ]
        },
        {
          title: 'Mastercard - Cybersecurity Job Simulation',
          period: 'Aug 2025',
          details: [
            'Conducted forensic analysis of security incident',
            'Formulated and documented incident response plan'
          ]
        },
        {
          title: 'Tata - Cybersecurity Analyst Job Simulation',
          period: 'Aug 2025',
          details: [
            'Performed log analysis and triaged security alerts',
            'Distinguished false positives from genuine threats'
          ]
        }
      ]
    },
    {
      id: 'experience',
      category: 'Professional Experience',
      icon: Briefcase,
      items: [
        {
          title: 'Intern',
          organization: 'KenGen Kenya',
          location: 'Naivasha, Kenya',
          period: 'Jan 2023 - Apr 2023',
          details: [
            'Applied rigorous testing and preventive maintenance protocols on high-voltage transformers',
            'Monitored complex live grid system, developing keen eye for anomalies',
            'Principles directly transferable to SIEM monitoring and incident detection'
          ]
        },
        {
          title: 'Intern',
          organization: 'Prowatt Enterprises',
          location: 'Nairobi, Kenya',
          period: 'Jan 2022 - Apr 2022',
          details: [
            'Designed electrical panels with detailed installation documentation',
            'Emphasized accuracy, adherence to standards, and clear audit trails',
            'Skills relevant to security policy creation and compliance evidence'
          ]
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${isPrintMode ? 'bg-white text-black' : 'bg-gradient-dark text-foreground'}`}>
      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; color: black !important; }
          * { box-shadow: none !important; }
        }
        @media screen {
          .print-only { display: none; }
        }
      `}</style>

      {/* Header Navigation */}
      <nav className="no-print fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
              size="sm"
              className="border-primary/30 hover:bg-primary/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Main Site
            </Button>
            <a href="/" className="flex items-center gap-3">
              <img src={mantisLogo} alt="Mantis Logo" className="w-10 h-10 animate-cyber-pulse" />
              <span className="text-xl font-cyber font-bold text-primary">MANTIS</span>
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleShare}
              variant="outline" 
              size="sm"
              className="border-primary/30 hover:bg-primary/20"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button 
              onClick={handlePrint}
              variant="outline" 
              size="sm"
              className="border-primary/30 hover:bg-primary/20"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button 
              onClick={handleDownloadPDF}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="px-6 py-12 bg-card/30 backdrop-blur-sm border-b border-primary/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-[300px_1fr_auto] gap-8 items-start">
              {/* Left: Photo & Contact */}
              <div className="space-y-4">
                <div className="relative w-48 h-48 mx-auto md:mx-0">
                  <img 
                    src={profileCV} 
                    alt="Joshua Hynes" 
                    className="w-full h-full rounded-full object-cover border-4 border-primary/50 shadow-glow-green"
                  />
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Linkedin className="w-4 h-4 text-primary" />
                    <a 
                      href="https://www.linkedin.com/in/joshua-hynes-8b7833314" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Center: Name & Title */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-cyber font-bold text-primary">
                  Joshua Hynes
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-secondary">
                  Information Security Analyst
                </p>
                <p className="text-lg text-muted-foreground italic">
                  From Circuits to Cyber
                </p>
              </div>

              {/* Right: Quick Actions */}
              <div className="no-print flex flex-col gap-2">
                <Button 
                  onClick={handleDownloadPDF}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  onClick={handlePrint}
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/20"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print CV
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Electrical & Electronic Engineer turned Information Security Analyst with a strong foundation in critical systems and a recent, intensive specialization in cybersecurity. Passionate about applying a methodical, analytical, and security-first mindset—developed through engineering precision—to safeguard digital infrastructures. Skilled in vulnerability management, incident response, and defensive security operations, with a focus on protecting systems, data, and users across diverse environments. Eager to contribute to strengthening organizational security posture and ensuring compliance with industry best practices.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills & Tech Stack */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-cyber font-bold text-center mb-8">
            <span className="text-primary">[</span>
            <span className="text-secondary">TECHNICAL SKILLS</span>
            <span className="text-primary">]</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg font-cyber text-primary flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline"
                        className="border-primary/40 hover:bg-primary/20 cursor-default text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Skills listed as seen in CV (proficiencies estimated)
          </p>
        </section>

        {/* Interactive Timeline */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-cyber font-bold text-center mb-12">
            <span className="text-primary">[</span>
            <span className="text-secondary">EXPERIENCE TIMELINE</span>
            <span className="text-primary">]</span>
          </h2>

          <div className="space-y-6">
            {timeline.map((section) => (
              <Card key={section.id} className="bg-card/50 backdrop-blur-sm border-primary/30">
                <CardHeader 
                  className="cursor-pointer hover:bg-primary/5 transition-colors"
                  onClick={() => toggleTimeline(section.id)}
                >
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <section.icon className="w-6 h-6 text-primary" />
                      <span className="text-xl font-cyber text-primary">{section.category}</span>
                    </div>
                    {expandedTimeline.includes(section.id) ? (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-primary" />
                    )}
                  </CardTitle>
                </CardHeader>
                
                {expandedTimeline.includes(section.id) && (
                  <CardContent className="space-y-6 border-t border-primary/20 pt-6">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="relative pl-8 border-l-2 border-primary/30 pb-6 last:pb-0">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                        
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-secondary">{item.title}</h3>
                          {item.organization && (
                            <p className="text-sm font-semibold text-primary">{item.organization}</p>
                          )}
                          {item.location && (
                            <p className="text-xs text-muted-foreground">{item.location}</p>
                          )}
                          <p className="text-xs text-muted-foreground font-mono">{item.period}</p>
                          
                          <ul className="space-y-1 mt-3">
                            {item.details.map((detail, detailIdx) => (
                              <li key={detailIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Highlighted Projects */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-cyber font-bold text-center mb-8">
            <span className="text-primary">[</span>
            <span className="text-secondary">SELECTED PROJECTS</span>
            <span className="text-primary">]</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {projects.map((project) => (
              <Card 
                key={project.title} 
                className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all group"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-cyber text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors no-print"
                  >
                    View Project Details
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-secondary/30">
            <CardHeader>
              <CardTitle className="text-lg font-cyber text-secondary">Hands-On Project Highlights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Conducted authorized ethical penetration testing on web application replicas using industry-standard tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Deployed vulnerable systems in isolated labs for comprehensive security assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Participated in simulated incident response exercises following NIST frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Created honeypot systems to study attacker behavior and tactics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* PDF Viewer Toggle */}
        <section className="no-print px-6 py-12 max-w-7xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary flex items-center gap-2">
                <FileText className="w-6 h-6" />
                View Original CV (PDF)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => setShowPDFViewer(!showPDFViewer)}
                variant="outline"
                className="border-primary/30 hover:bg-primary/20 mb-4"
              >
                {showPDFViewer ? <X className="w-4 h-4 mr-2" /> : <FileText className="w-4 h-4 mr-2" />}
                {showPDFViewer ? 'Hide PDF Viewer' : 'Show PDF Viewer'}
              </Button>
              
              {showPDFViewer && (
                <div className="border-2 border-primary/30 rounded-lg overflow-hidden">
                  <iframe
                    src="/Joshua_Hynes_CV.pdf"
                    className="w-full h-[800px]"
                    title="Joshua Hynes CV"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <section className="no-print px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-cyber font-bold text-primary">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have a message for me? Use the form below — I'll receive it directly via email.
              </p>
            </div>
            
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
              <CardContent className="pt-6">
                <form 
                  action="https://formspree.io/f/xwpkddjy" 
                  method="POST"
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 bg-background border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 bg-background border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-background border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <Button 
                onClick={handleDownloadPDF}
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/20"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV (PDF)
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-primary/20 text-center text-xs text-muted-foreground">
          <p className="mb-2">All experience & projects listed are completed in controlled, ethical environments unless otherwise stated.</p>
          <p>© 2025 Joshua Hynes. Information Security Analyst.</p>
        </footer>
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Joshua Hynes",
          "jobTitle": "Information Security Analyst",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "Kenya"
          },
          "sameAs": [
            "https://www.linkedin.com/in/joshua-hynes-8b7833314"
          ],
          "description": "Electrical & Electronic Engineer turned Information Security Analyst with a strong foundation in critical systems and intensive cybersecurity specialization",
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Moringa School"
            },
            {
              "@type": "EducationalOrganization",
              "name": "Jomo Kenyatta University of Agriculture and Technology"
            }
          ]
        })}
      </script>
    </div>
  );
};

export default CVPage;
