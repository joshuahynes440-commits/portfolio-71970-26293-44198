import { useState } from 'react';
import { Shield, Terminal, Eye, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import mantisLogo from '@/assets/mantis-logo.png';

const HoneypotProject = () => {
  const navigate = useNavigate();
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);

  const codeBlock = `# Simple honeypot example (Flask) — logs login attempts to a file
from flask import Flask, request, render_template_string
from datetime import datetime
import logging

app = Flask(__name__)
logging.basicConfig(filename="honeypot_attempts.log", level=logging.INFO)

LOGIN_HTML = """
<html><head><title>Login</title></head>
<body><h2>Sign In</h2>
<form method='post' action='/login'>
<input name='username' placeholder='Username'><br/>
<input name='password' type='password' placeholder='Password'><br/>
<button type='submit'>Login</button>
</form></body></html>
"""

@app.route("/")
def home():
    return LOGIN_HTML

@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")
    ip = request.remote_addr
    ua = request.headers.get("User-Agent")
    log_entry = f"{datetime.utcnow()} | IP: {ip} | UA: {ua} | {username}:{password}"
    logging.info(log_entry)
    return "Invalid credentials", 401

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)`;

  const sampleLogs = [
    { timestamp: '2025-01-15 14:23:45', ip: '192.168.1.xxx', username: 'admin', status: 'Failed' },
    { timestamp: '2025-01-15 14:24:12', ip: '10.0.0.xxx', username: 'root', status: 'Failed' },
    { timestamp: '2025-01-15 14:25:33', ip: '172.16.0.xxx', username: 'test', status: 'Failed' }
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
              <Shield className="w-16 h-16 text-primary animate-cyber-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
              <span className="text-primary">🕵️‍♂️ Built a Honeypot</span>
            </h1>
            <Badge variant="outline" className="border-secondary text-secondary mb-4">
              Ethical Research Only
            </Badge>
          </div>

          {/* Summary Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A honeypot is a decoy system built to lure attackers and study their behavior in a safe, isolated environment. 
                It exposes limited fake services to log attack patterns, credential attempts, and reconnaissance behavior — 
                turning hostile activity into valuable defensive insight.
              </p>
            </CardContent>
          </Card>

          {/* Function Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                Function
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Simulates a basic login interface and common network ports to attract scanners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Records connection data such as timestamps, IP addresses, user agents, and credentials for analysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Deployed in an isolated research lab — no real users or sensitive data involved.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Code Block Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-cyber text-primary">Implementation Code</CardTitle>
                <Button
                  onClick={() => setIsCodeExpanded(!isCodeExpanded)}
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/20"
                >
                  {isCodeExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Collapse
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Expand Code
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            {isCodeExpanded && (
              <CardContent>
                <pre className="bg-muted/30 p-4 rounded-lg overflow-x-auto border border-primary/20">
                  <code className="text-sm font-mono text-primary">{codeBlock}</code>
                </pre>
              </CardContent>
            )}
          </Card>

          {/* Activity Logs Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-glow-green mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-primary">Sample Activity Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 p-4 rounded-lg border border-primary/20">
                <div className="space-y-2 font-mono text-sm">
                  {sampleLogs.map((log, index) => (
                    <div key={index} className="text-muted-foreground hover:text-primary transition-colors">
                      <span className="text-secondary">{log.timestamp}</span> | 
                      IP: <span className="text-accent">{log.ip}</span> | 
                      User: <span className="text-primary">{log.username}</span> | 
                      Status: <span className="text-destructive">{log.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Note: This honeypot operates in a sandboxed research environment. No production data captured.
              </p>
            </CardContent>
          </Card>

          {/* Ethical Disclaimer */}
          <Card className="bg-muted/20 backdrop-blur-sm border-secondary/30 shadow-glow-blue animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                <strong className="text-secondary">Ethical Disclaimer:</strong> For research and cybersecurity learning purposes only. 
                Not used for offensive actions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HoneypotProject;
