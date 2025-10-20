// Library knowledge base - easy to update
const knowledgeBase = {
  intents: [
    {
      tag: "greeting",
      patterns: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "greetings"],
      responses: [
        "Hello! I'm your library assistant. I can help you with hours, locations, services, and more. What would you like to know?",
        "Hi there! How can I assist you with library information today?"
      ]
    },
    {
      tag: "hours",
      patterns: ["hours", "open", "close", "when", "time", "schedule", "what time"],
      responses: [
        "Our library hours are:\n\n📅 **Monday-Friday:** 8:00 AM - 10:00 PM\n📅 **Saturday:** 10:00 AM - 6:00 PM\n📅 **Sunday:** 12:00 PM - 8:00 PM\n\nHours may vary during holidays and exam periods."
      ]
    },
    {
      tag: "location",
      patterns: ["where", "location", "find", "floor", "room", "building", "directions", "map"],
      responses: [
        "Our library locations:\n\n**1st Floor:**\n• Main Desk\n• Computer Lab\n• Reference Section\n• Study Areas\n\n**2nd Floor:**\n• Group Study Rooms\n• Quiet Study Area\n• Periodicals\n\n**3rd Floor:**\n• Special Collections\n• Archives\n• Faculty Study Rooms\n\nWhat specific area are you looking for?"
      ]
    },
    {
      tag: "staff_help",
      patterns: ["help", "assistance", "staff", "librarian", "who", "contact", "ask", "question"],
      responses: [
        "Here's who can help:\n\n**Reference Desk (1st Floor):**\n• Research assistance\n• Citation help\n• Database guidance\n📞 (555) 123-4567\n\n**Circulation Desk:**\n• Checking out materials\n• Renewals & holds\n• Library card issues\n📞 (555) 123-4568\n\n**IT Support:**\n• Computer/printer issues\n• Login problems\n📞 (555) 123-4569"
      ]
    },
    {
      tag: "catalog",
      patterns: ["catalog", "search", "find books", "find articles", "database", "search library", "opac", "library search"],
      responses: [
        "To search our collection:\n\n**📚 Books & Media:**\nUse our library catalog at: library.edu/catalog\n\n**📰 Articles & Journals:**\nBrowse databases at: library.edu/databases\n\n**Popular Databases:**\n• JSTOR - Academic journals\n• EBSCOhost - Multidisciplinary\n• ProQuest - News & dissertations\n\nNeed help getting started? Visit the Reference Desk!"
      ]
    },
    {
      tag: "printing",
      patterns: ["print", "printer", "printing", "copy", "copies", "scan", "scanner"],
      responses: [
        "**Printing & Copying:**\n\n💵 **Costs:**\n• Black & white: $0.10/page\n• Color: $0.50/page\n\n📍 **Locations:**\n• Computer Lab (1st floor)\n• Study areas (2nd floor)\n\n💳 **Payment:**\nUse your student ID or add funds at library.edu/print\n\n🖨️ Scanners are free to use!"
      ]
    },
    {
      tag: "study_rooms",
      patterns: ["study room", "book room", "reserve room", "group study", "private room", "meeting room"],
      responses: [
        "**Study Room Reservations:**\n\n📍 Located on 2nd floor\n⏰ 2-hour time slots\n👥 Rooms fit 4-8 people\n\n**To Reserve:**\n1. Visit: library.edu/rooms\n2. Login with student ID\n3. Choose date & time\n\n**Rules:**\n• Check in within 15 minutes\n• No food, drinks OK with lids\n• Clean up after use"
      ]
    },
    {
      tag: "access",
      patterns: ["access", "login", "password", "card", "library card", "account", "barcode", "pin"],
      responses: [
        "**Library Access:**\n\n🎓 **Students & Faculty:**\nYour university ID is your library card!\n\n🔐 **Online Resources:**\n• On campus: Automatic access\n• Off campus: Login with university credentials\n\n❓ **Forgot Password?**\nReset at: accounts.university.edu\n\n**Community Members:**\nVisit circulation desk for guest access"
      ]
    },
    {
      tag: "renew",
      patterns: ["renew", "renewal", "extend", "due date", "overdue", "late", "fine"],
      responses: [
        "**Renewals & Due Dates:**\n\n🔄 **Renew Items:**\n• Online: library.edu/account\n• Phone: (555) 123-4568\n• In person: Circulation desk\n\n📅 **Loan Periods:**\n• Books: 3 weeks (renew 2x)\n• DVDs: 1 week\n• Reserves: 2 hours\n\n💰 **Fines:**\n• $0.25/day for most items\n• $1.00/hour for reserves"
      ]
    },
    {
      tag: "wifi",
      patterns: ["wifi", "wi-fi", "internet", "wireless", "network", "connect"],
      responses: [
        "**WiFi Access:**\n\n📡 **Network Name:** UniversityLibrary\n\n🔐 **Password:**\n• Students/Staff: Use university credentials\n• Guests: Ask at main desk for guest pass\n\n📶 **Troubleshooting:**\n• Forget network & reconnect\n• Contact IT: (555) 123-4569\n\n💻 Ethernet cables available at circulation desk"
      ]
    },
    {
      tag: "thanks",
      patterns: ["thank", "thanks", "appreciate", "helpful", "great"],
      responses: [
        "You're welcome! Happy to help! 😊",
        "My pleasure! Let me know if you need anything else!",
        "Glad I could assist! Feel free to ask if you have more questions."
      ]
    },
    {
      tag: "goodbye",
      patterns: ["bye", "goodbye", "see you", "later", "exit", "quit"],
      responses: [
        "Goodbye! Come back if you need more help! 📚",
        "See you later! Happy studying! 👋"
      ]
    }
  ],
  
  // Default response when no match found
  defaultResponse: "I'm not quite sure about that. I can help with:\n\n• Library hours\n• Locations & directions\n• Finding books & articles\n• Study room reservations\n• Printing & scanning\n• Staff contacts\n\nYou can also:\n📞 Call: (555) 123-4567\n📧 Email: library@university.edu\n🏢 Visit: Reference Desk (1st floor)"
};

// Export for use in chatbot.js
export default knowledgeBase;
