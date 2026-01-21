const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const OpenAI = require('openai');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// AI Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, conversationHistory = [] } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // System prompt with knowledge about the education platform
        const systemPrompt = `You are an AI assistant for EduLearn Online, an online education platform. 

Our Programs:
- MBA (Master of Business Administration) - 2 years
- MCA (Master of Computer Applications) - 2 years
- BBA (Bachelor of Business Administration) - 3 years
- BCA (Bachelor of Computer Applications) - 3 years
- MA & BA (Arts Programs) - 3 years

Fee Structure:
- MBA/MCA: ₹60,000 - ₹1,20,000 per year
- BBA/BCA: ₹40,000 - ₹80,000 per year
- MA/BA: ₹30,000 - ₹60,000 per year
- Flexible EMI options available
- Scholarships for eligible students

Contact Information:
- Phone: +91 9587634413
- Email: amitywalaraj@gmail.com
- Address: Kota, Rajasthan, India (324001)

Admission Process:
1. Click 'Apply Now' or 'Sign Up'
2. Fill in your details
3. Upload required documents
4. Submit your application
Review and contact within 24-48 hours

Specializations available in:
- Business Management
- Technology & IT
- Finance & Accounting
- Digital Marketing
- Data Science & Analytics

Be helpful, friendly, and provide accurate information about our programs. If asked about something outside your knowledge, politely direct them to contact us directly.`;

        // Build messages array
        const messages = [
            { role: 'system', content: systemPrompt },
            ...conversationHistory,
            { role: 'user', content: message }
        ];

        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages,
            max_tokens: 500,
            temperature: 0.7,
        });

        const aiResponse = completion.choices[0].message.content;

        res.json({
            success: true,
            response: aiResponse,
            usage: {
                prompt_tokens: completion.usage.prompt_tokens,
                completion_tokens: completion.usage.completion_tokens,
                total_tokens: completion.usage.total_tokens
            }
        });

    } catch (error) {
        console.error('OpenAI API Error:', error);
        
        // Fallback to basic responses if API fails
        const fallbackResponse = getFallbackResponse(req.body.message);
        
        res.json({
            success: true,
            response: fallbackResponse,
            fallback: true
        });
    }
});

// Fallback responses when API is unavailable
function getFallbackResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('program') || lowerMessage.includes('course')) {
        return "We offer MBA, MCA, BBA, BCA, MA, and BA programs. Each program is designed with flexible online learning. Would you like to know more about a specific program?";
    } else if (lowerMessage.includes('fee') || lowerMessage.includes('cost')) {
        return "Our fee structure ranges from ₹30,000 to ₹1,20,000 per year depending on the program. We offer flexible EMI options and scholarships. Visit our Fee Structure page for detailed information!";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone')) {
        return "You can reach us at:\n📞 Phone: +91 9587634413\n📧 Email: amitywalaraj@gmail.com\n📍 Kota, Rajasthan, India";
    } else if (lowerMessage.includes('apply') || lowerMessage.includes('admission')) {
        return "Applying is easy! Click 'Apply Now', fill in your details, upload documents, and submit. Our team will contact you within 24-48 hours.";
    } else {
        return "I'm here to help! I can provide information about our programs, fees, admission process, and contact details. What would you like to know?";
    }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        openai: !!process.env.OPENAI_API_KEY 
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📚 EduLearn Online - Education Platform`);
    console.log(`🤖 AI Chat API: /api/chat`);
});
