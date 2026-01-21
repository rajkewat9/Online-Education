const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
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

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

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
            ...conversationHistory.slice(-6), // Keep last 6 messages for context
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

        return res.status(200).json({
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
        const fallbackResponse = getFallbackResponse(req.body.message || '');
        
        return res.status(200).json({
            success: true,
            response: fallbackResponse,
            fallback: true
        });
    }
};
