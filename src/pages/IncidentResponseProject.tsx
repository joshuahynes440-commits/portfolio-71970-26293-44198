import { AlertTriangle, Shield, CheckCircle, ArrowLeft, Users, FileWarning } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import mantisLogo from '@/assets/mantis-logo.png';

const IncidentResponseProject = () => {
  const navigate = useNavigate();

  const timeline = [
    { phase: 'Identification', time: 'T+0h', status: 'Ransomware detected via SOC alert' },
    { phase: 'Containment', time: 'T+1h', status: 'Affected systems isolated from network' },
    { phase: 'Eradication', time: 'T+6h', status: 'Malware removed, vulnerabilities patched' },
    { phase: 'Recovery', time: 'T+12h', status: 'Systems restored from clean backups' },
    { phase: 'Lessons Learned', time: 'T+24h', status: 'Post-incident review completed' }
  ];

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
              <AlertTriangle className="w-16 h-16 text-primary animate-cyber-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
              <span className="text-primary">🧠 Incident Response Tabletop Exercise</span>
            </h1>
            <p className="text-xl text-secondary mb-2">Akira Ransomware Simulation</p>
            <Badge variant="outline" className="border-secondary text-secondary mb-4">
              Preparedness through simulation
            </Badge>
          </div>

          {/* Scenario Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary flex items-center gap-2">
                <FileWarning className="w-6 h-6" />
                Scenario
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Participated in a simulated ransomware crisis using the OpenBAS platform to mimic the tactics of the 
                <span className="text-destructive font-bold"> Akira ransomware group</span>. This exercise tested the 
                organization's incident response capabilities under realistic attack conditions.
              </p>
            </CardContent>
          </Card>

          {/* Execution Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary flex items-center gap-2">
                <Users className="w-6 h-6" />
                Execution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">NIST Framework:</strong> Followed the NIST Incident Response 
                    lifecycle through all five phases: Identification → Containment → Eradication → Recovery → Lessons Learned.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Team Collaboration:</strong> Collaborated with a response team 
                    to isolate affected systems and restore clean backups.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Threat Analysis:</strong> Analyzed Indicators of Compromise (IoCs) 
                    and produced a timeline of the simulated attack.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Timeline Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary">Incident Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                    <div className="flex-shrink-0">
                      {index === timeline.length - 1 ? (
                        <CheckCircle className="w-6 h-6 text-primary" />
                      ) : (
                        <AlertTriangle className="w-6 h-6 text-cyber-orange" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-cyber text-foreground">{item.phase}</span>
                        <span className="text-sm text-secondary font-mono">{item.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Outcome Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Outcome
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Strengthened incident-handling coordination, communication, and defensive readiness for future ransomware threats.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12h</div>
                  <div className="text-sm text-muted-foreground">Recovery Time</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">System Restoration</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Zero</div>
                  <div className="text-sm text-muted-foreground">Data Loss</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Learnings */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary">Key Learnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg border border-primary/20">
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-cyber text-foreground mb-2">Rapid Response</h4>
                  <p className="text-sm text-muted-foreground">Quick containment is critical to minimize damage</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-primary/20">
                  <Users className="w-8 h-8 text-secondary mb-2" />
                  <h4 className="font-cyber text-foreground mb-2">Team Coordination</h4>
                  <p className="text-sm text-muted-foreground">Clear communication protocols save valuable time</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-primary/20">
                  <CheckCircle className="w-8 h-8 text-accent mb-2" />
                  <h4 className="font-cyber text-foreground mb-2">Backup Strategy</h4>
                  <p className="text-sm text-muted-foreground">Regular, tested backups are essential for recovery</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-primary/20">
                  <FileWarning className="w-8 h-8 text-cyber-orange mb-2" />
                  <h4 className="font-cyber text-foreground mb-2">Documentation</h4>
                  <p className="text-sm text-muted-foreground">Detailed logging helps prevent future incidents</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Note */}
          <Card className="bg-muted/20 backdrop-blur-sm border-secondary/30 shadow-glow-blue animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                <strong className="text-secondary">Note:</strong> This was a controlled simulation exercise designed to 
                improve incident response capabilities. No real systems or data were compromised.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IncidentResponseProject;
