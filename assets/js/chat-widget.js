// AI Chat Support Widget
class ChatWidget {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        this.createWidget();
        this.attachEventListeners();
        this.loadKnowledgeBase();
    }

    createWidget() {
        const widgetHTML = `
            <div id="chatWidget" class="chat-widget">
                <button id="chatToggle" class="chat-toggle" aria-label="Chat Support">
                    <i class="fas fa-comments"></i>
                    <span class="chat-badge">AI</span>
                </button>
                
                <div id="chatWindow" class="chat-window" style="display: none;">
                    <div class="chat-header">
                        <div class="chat-header-info">
                            <div class="chat-avatar">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div>
                                <h4>AI Support Assistant</h4>
                                <span class="chat-status">Online</span>
                            </div>
                        </div>
                        <button id="chatClose" class="chat-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div id="chatMessages" class="chat-messages">
                        <div class="chat-message bot-message">
                            <div class="message-avatar">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="message-content">
                                <p>Hello! 👋 I'm your AI assistant. How can I help you today?</p>
                                <div class="quick-replies">
                                    <button class="quick-reply" data-message="Tell me about programs">Programs</button>
                                    <button class="quick-reply" data-message="What are the fees?">Fees</button>
                                    <button class="quick-reply" data-message="How do I apply?">Apply</button>
                                    <button class="quick-reply" data-message="Contact information">Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="chat-input-container">
                        <input type="text" id="chatInput" class="chat-input" placeholder="Type your message..." />
                        <button id="chatSend" class="chat-send">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', widgetHTML);
    }

    attachEventListeners() {
        const toggle = document.getElementById('chatToggle');
        const close = document.getElementById('chatClose');
        const send = document.getElementById('chatSend');
        const input = document.getElementById('chatInput');

        toggle.addEventListener('click', () => this.toggleChat());
        close.addEventListener('click', () => this.toggleChat());
        send.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Quick replies
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-reply')) {
                const message = e.target.getAttribute('data-message');
                this.handleUserMessage(message);
            }
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const chatWindow = document.getElementById('chatWindow');
        const chatToggle = document.getElementById('chatToggle');
        
        if (this.isOpen) {
            chatWindow.style.display = 'flex';
            chatToggle.style.display = 'none';
            document.getElementById('chatInput').focus();
        } else {
            chatWindow.style.display = 'none';
            chatToggle.style.display = 'flex';
        }
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (message) {
            this.handleUserMessage(message);
            input.value = '';
        }
    }

    handleUserMessage(message) {
        this.addMessage(message, 'user');
        
        // Simulate AI thinking
        setTimeout(() => {
            const response = this.getAIResponse(message);
            this.addMessage(response, 'bot');
        }, 500);
    }

    addMessage(text, type) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageHTML = type === 'user' 
            ? `
                <div class="chat-message user-message">
                    <div class="message-content">
                        <p>${text}</p>
                    </div>
                    <div class="message-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                </div>
            `
            : `
                <div class="chat-message bot-message">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <p>${text}</p>
                    </div>
                </div>
            `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    loadKnowledgeBase() {
        this.knowledgeBase = {
            programs: {
                keywords: ['program', 'course', 'degree', 'mba', 'mca', 'bba', 'bca', 'masters', 'bachelor'],
                response: "We offer various programs including:\n\n📚 MBA - Master of Business Administration\n💻 MCA - Master of Computer Applications\n🎓 BBA - Bachelor of Business Administration\n💼 BCA - Bachelor of Computer Applications\n📖 MA & BA - Arts Programs\n\nWould you like to know more about any specific program?"
            },
            fees: {
                keywords: ['fee', 'cost', 'price', 'payment', 'tuition', 'affordable', 'scholarship'],
                response: "Our fee structure is designed to be accessible:\n\n💰 MBA/MCA: ₹60,000 - ₹1,20,000 per year\n💰 BBA/BCA: ₹40,000 - ₹80,000 per year\n💰 MA/BA: ₹30,000 - ₹60,000 per year\n\n✨ Flexible EMI options available\n🎓 Scholarships for eligible students\n\nVisit our Fee Structure page for detailed information!"
            },
            admission: {
                keywords: ['apply', 'admission', 'enroll', 'registration', 'join', 'eligibility', 'requirement'],
                response: "Applying is easy! 📝\n\n1️⃣ Click 'Apply Now' or 'Sign Up'\n2️⃣ Fill in your details\n3️⃣ Upload required documents\n4️⃣ Submit your application\n\nOur team will review and contact you within 24-48 hours. Need help with the process?"
            },
            contact: {
                keywords: ['contact', 'phone', 'email', 'address', 'reach', 'call', 'message'],
                response: "You can reach us at:\n\n📞 Phone: +91 9587634413\n📧 Email: amitywalaraj@gmail.com\n📍 Address: Kota, Rajasthan, India (324001)\n\nWe're here to help! Feel free to call or email us anytime."
            },
            specialization: {
                keywords: ['specialization', 'specialisation', 'major', 'concentration', 'focus area'],
                response: "We offer various specializations:\n\n🎯 Business Management specializations\n💻 Technology & IT specializations\n📊 Finance & Accounting\n📱 Digital Marketing\n🔬 Data Science & Analytics\n\nEach program has multiple specialization options to match your career goals!"
            },
            duration: {
                keywords: ['duration', 'how long', 'time', 'years', 'months', 'period'],
                response: "Program durations:\n\n⏱️ MBA/MCA: 2 years\n⏱️ BBA/BCA: 3 years\n⏱️ MA/BA: 3 years\n\nAll programs are flexible and can be completed at your own pace with our online learning system!"
            },
            default: {
                response: "I'm here to help! 😊\n\nI can assist you with:\n• Program information\n• Fee structure\n• Admission process\n• Contact details\n• Specializations\n\nWhat would you like to know more about?"
            }
        };
    }

    getAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check each category
        for (const [key, category] of Object.entries(this.knowledgeBase)) {
            if (key !== 'default' && category.keywords.some(keyword => lowerMessage.includes(keyword))) {
                return category.response;
            }
        }
        
        // Greetings
        if (lowerMessage.match(/\b(hi|hello|hey|good morning|good afternoon|good evening)\b/)) {
            return "Hello! 👋 Welcome to our online education platform. How can I assist you today?";
        }
        
        // Thanks
        if (lowerMessage.match(/\b(thank|thanks|appreciate)\b/)) {
            return "You're welcome! 😊 Is there anything else I can help you with?";
        }
        
        // Default response
        return this.knowledgeBase.default.response;
    }
}

// Initialize chat widget when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ChatWidget();
});
