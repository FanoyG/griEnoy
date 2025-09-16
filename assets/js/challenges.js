// ============================================
// 📂 Challenge Dataset
// Both `challenges.html` and `challenge-details.html` use this file
// ============================================

/*
  ✅ How to add a new Challenge:

  1. Pick a skill (e.g., "Windows", "Linux").
     - If it doesn’t exist, create a new skill key.

  2. Inside that skill, create a topic (e.g., "User & Group Management").
     - If it doesn’t exist, create a new topic key.

  3. Add challenges inside that topic:
     {
       id: UNIQUE_NUMBER,          // must be unique
       name: "Challenge Title",    // short title for listing
       description: "1–2 lines",   // description for listing
       level: "Easy|Medium|Hard",  // difficulty
       type: "script|command",     // layout type
       
       // Extra fields used in challenge-details
       subtitle: "Optional subtitle text",
       scenario: "Describe the situation",
       script: "file.ps1 or .sh (for script challenges)",
       task: "What the learner must do",
       flag: "expected flag or command",
       hints: ["Hint 1", "Hint 2"]
     }
*/

const challengeData = {
  "Windows": {
    "User & Group Management": [
      {
        id: 1,
        name: "Find Unauthorized User",
        description: "Find an unauthorized user account and report it.",
        level: "Easy",
        type: "script",
        subtitle: "Locate and disable the user account to complete the challenge.",
        scenario: "An alert was triggered for an unauthorized user account creation.",
        script: "challenge_unauthorized_user.ps1",
        task: "Find the unauthorized user and submit its name.",
        flag: "unauthorized_user",
        hints: [
          "Check the 'users' group.",
          "Use <code>Get-LocalUser</code> in PowerShell."
        ]
      },
      {
        id: 2,
        name: "Identify Inactive Users",
        description: "Identify all inactive users and disable them.",
        level: "Medium",
        type: "script",
        subtitle: "Audit inactive users.",
        scenario: "Some users haven't logged in for over 90 days.",
        script: "challenge_inactive_users.ps1",
        task: "Identify inactive accounts and disable them.",
        flag: "inactive_users_disabled",
        hints: [
          "Check last logon timestamps.",
          "Use <code>Get-ADUser</code> with -LastLogonDate."
        ]
      }
    ],
    "File & Folder Permissions": [
      {
        id: 6,
        name: "Hidden Malware File",
        description: "Detect a hidden malware file hidden through permission tricks.",
        level: "Hard",
        type: "script",
        subtitle: "Locate the hidden file and submit its MD5 hash.",
        scenario: "A suspicious file has been dropped somewhere in your VM.",
        script: "challenge_hidden_file.ps1",
        task: "Find the hidden file and calculate its MD5 hash.",
        flag: "a8b9c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
        hints: [
          "Check C:\\Users\\Public",
          "Use <code>Get-FileHash</code>",
          "List hidden files with <code>dir /a:h</code>"
        ]
      }
    ]
  },
  "Linux": {
    "Users & Groups": [
      {
        id: 14,
        name: "Shell History Analysis",
        description: "Analyze a user's shell history to find a malicious command.",
        level: "Medium",
        type: "command",
        subtitle: "Analyze user shell history to detect malicious command.",
        scenario: "Logs suggest a user executed a suspicious command.",
        task: "Identify the malicious command executed from history.",
        flag: "rm -rf /tmp/malware",
        hints: [
          "Check ~/.bash_history",
          "Look for deletion or suspicious downloads"
        ]
      }
    ]
  }
};
// Note: Add new challenges above this line only!