import { Bug, Terminal, Shield, ArrowLeft, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import mantisLogo from '@/assets/mantis-logo.png';

const VulnAssessmentProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-dark text-foreground">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={mantisLogo} alt="Mantis Logo" className="w-10 h-10 animate-cyber-pulse" />
            <span className="text-xl font-cyber font-bold text-primary">MANTIS</span>
          </div>
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="border-primary/30 text-primary hover:bg-primary/20 font-cyber"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      <div className="pt-24 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-4">
              <Bug className="w-16 h-16 text-primary animate-cyber-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
              <span className="text-primary">⚙️ Vulnerability Assessment & Exploitation</span>
            </h1>
            <p className="text-xl text-secondary mb-2">Metasploitable3</p>
            <Badge variant="outline" className="border-secondary text-secondary mb-4">
              Ethical Research Only
            </Badge>
          </div>

          {/* Description Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Project Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Deployed and configured the intentionally vulnerable Metasploitable3 VM within an isolated cybersecurity lab.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Performed network enumeration using Nmap to identify open ports, services, and OS details.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Leveraged the Metasploit Framework to research and execute exploits against identified weaknesses.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Successfully gained unauthorized access to illustrate real-world exploitation chains and privilege escalation.</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Terminal Animation */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                Exploitation Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 p-6 rounded-lg border border-primary/20 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-secondary">$ nmap -sV -O 192.168.1.100</div>
                  <div className="text-muted-foreground pl-4">Starting Nmap scan...</div>
                  <div className="text-primary pl-4">PORT 21/tcp open ftp vsftpd 2.3.4</div>
                  <div className="text-primary pl-4">PORT 22/tcp open ssh OpenSSH 5.9p1</div>
                  <div className="text-primary pl-4">PORT 80/tcp open http Apache 2.2.14</div>
                  <div className="text-muted-foreground mt-4">$ msfconsole</div>
                  <div className="text-accent pl-4">msf6 &gt; use exploit/unix/ftp/vsftpd_234_backdoor</div>
                  <div className="text-accent pl-4">msf6 exploit(vsftpd_234_backdoor) &gt; set RHOSTS 192.168.1.100</div>
                  <div className="text-accent pl-4">msf6 exploit(vsftpd_234_backdoor) &gt; exploit</div>
                  <div className="text-primary pl-4 mt-2 font-bold animate-pulse">
                    [*] Exploit completed successfully!
                  </div>
                  <div className="text-primary pl-4">
                    [*] Command shell session opened
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Outcome Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary flex items-center gap-2">
                <Activity className="w-6 h-6" />
                Outcome
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Highlighted the risks of default configurations, outdated software, and unnecessary open services.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-muted/30 p-4 rounded-lg border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Vulnerabilities Identified</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Successful Exploits</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Lab Containment</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tools Used */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary">Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg border border-primary/20">
                  <Terminal className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-cyber text-foreground">Nmap</div>
                    <div className="text-xs text-muted-foreground">Network Discovery</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg border border-primary/20">
                  <Bug className="w-8 h-8 text-secondary" />
                  <div>
                    <div className="font-cyber text-foreground">Metasploit</div>
                    <div className="text-xs text-muted-foreground">Exploit Framework</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg border border-primary/20">
                  <Shield className="w-8 h-8 text-accent" />
                  <div>
                    <div className="font-cyber text-foreground">Metasploitable3</div>
                    <div className="text-xs text-muted-foreground">Target Environment</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg border border-primary/20">
                  <Activity className="w-8 h-8 text-cyber-orange" />
                  <div>
                    <div className="font-cyber text-foreground">VirtualBox</div>
                    <div className="text-xs text-muted-foreground">Virtualization</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ethical Statement */}
          <Card className="bg-muted/20 backdrop-blur-sm border-secondary/30 shadow-glow-blue animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                <strong className="text-secondary">Ethical Statement:</strong> Conducted in a controlled lab for learning 
                and demonstration only — no external targets.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VulnAssessmentProject;
