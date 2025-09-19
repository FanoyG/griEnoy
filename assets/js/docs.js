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
                    <h2>VirtualBox Installation & SOC Lab Setup Guide</h2>
                    <p>Use these curated resources to understand, set up, and troubleshoot your VirtualBox environment for SOC practice.</p>
                    
                    <h3>1. VirtualBox Basics & Installation (Theory)</h3>
                    <div style="margin-bottom: 10px;">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wX75Z-4MEoM" 
                        title="VirtualBox Basics & Installation" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <ul>
                        <li><strong>Purpose:</strong> Learn hypervisors, why VirtualBox is used, and installation steps.</li>
                        <li><strong>Advantages:</strong> Solid foundation for beginners, explains core concepts clearly with live hands on End to End setup.</li>
                        <li><strong>Disadvantages:</strong> Somethings might just bounce over your head take time to sink in.</li>
                    </ul>

                    <h3>2. Building a Basic Home Lab</h3>
                    <div style="margin-bottom: 10px;">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/kku0fVfksrk" 
                        title="Building a Basic Home Lab" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <ul>
                        <li><strong>Purpose:</strong> Step-by-step guide to set up a cybersecurity home lab using VirtualBox.</li>
                        <li><strong>Advantages:</strong> Hands-on instructions, safe environment for SOC practice, covers basic tools.</li>
                        <li><strong>Disadvantages:</strong> Simple lab; may not cover advanced SOC tools.</li>
                    </ul>

                    <h3>3. Fixing Windows Product Key Errors in VirtualBox</h3>
                    <div style="margin-bottom: 10px;">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SGYHOTnZGes" 
                        title="Fix Windows Product Key Errors" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <p>Windows sometimes comes with an automatic setup file (unattend.xml) that tells it to use a product key. If the VM settings don’t match or no key is provided, Windows cannot read it and shows an error.</p>

                    <h3>System Requirements</h3>
                    <ul>
                        <li>OS: Windows 10 or later, Linux (any modern distribution)</li>
                        <li>RAM: 8GB minimum</li>
                        <li>Storage: 20GB minimum free space (more for multiple VMs)</li>
                        <li>USB: 32GB minimum if storing VMs externally</li>
                    </ul>
                `
            }
            
        ]
    }
};