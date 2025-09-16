// This is your dynamic data structure.
// You can easily add new topics and documents here without changing the HTML or CSS.
// Just make sure the 'id' of each document is unique.
// The 'content' should be a string containing your HTML content for that document.

const docsData = {
    "Getting Started": {
        documents: [
            { 
                id: "installation-guide", 
                title: "Installation Guide", 
                content: `
                    <h2>Installation Guide</h2>
                    <p>Follow these steps to set up the environment:</p>
                    <ol>
                        <li>Download the latest version from our GitHub page.</li>
                        <li>Unzip the file and run the installer.</li>
                        <li>Follow the on-screen instructions to complete the setup.</li>
                    </ol>
                    <h3>System Requirements</h3>
                    <ul>
                        <li>OS: Windows 10 or later, Linux (any modern distribution)</li>
                        <li>RAM: 8GB minimum</li>
                        <li>Storage: 20GB free space</li>
                    </ul>
                `
            },
            { 
                id: "configuration", 
                title: "Configuration", 
                content: `
                    <h2>Configuration</h2>
                    <p>Customize your settings by editing the <code>config.ini</code> file.</p>
                    <pre>
[user]
username = "your_username"
theme = "dark"

[network]
proxy_enabled = false
port = 8080
                    </pre>
                `
            },
            { 
                id: "first-challenge", 
                title: "First Challenge", 
                content: `
                    <h2>First Challenge</h2>
                    <p>This challenge is designed to get you familiar with the basic concepts.</p>
                    <p>It's a great starting point for beginners!</p>
                `
            }
        ]
    },
    "Threat Hunting": {
        documents: [
            { 
                id: "basic-techniques", 
                title: "Basic Techniques", 
                content: `
                    <h2>Threat Hunting: Basic Techniques</h2>
                    <p>Learn the fundamental skills for proactive threat detection.</p>
                    <ul>
                        <li>Log analysis and correlation.</li>
                        <li>Network traffic monitoring.</li>
                        <li>Endpoint anomaly detection.</li>
                    </ul>
                `
            },
            { 
                id: "advanced-forensics", 
                title: "Advanced Forensics", 
                content: `
                    <h2>Advanced Forensics</h2>
                    <p>Dive deep into memory and disk forensics to uncover hidden artifacts.</p>
                `
            }
        ]
    },
    "Malware Analysis": {
        documents: [
            { 
                id: "static-analysis", 
                title: "Static Analysis", 
                content: `
                    <h2>Malware Analysis: Static Analysis</h2>
                    <p>Examine malicious code without executing it. This includes:</p>
                    <ul>
                        <li>String extraction.</li>
                        <li>Header analysis.</li>
                        <li>Decompilation.</li>
                    </ul>
                `
            },
            { 
                id: "dynamic-analysis", 
                title: "Dynamic Analysis", 
                content: `
                    <h2>Malware Analysis: Dynamic Analysis</h2>
                    <p>Run the malware in a controlled environment to observe its behavior.</p>
                `
            }
        ]
    }
};