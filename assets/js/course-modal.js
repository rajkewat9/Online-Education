// Course Details Data
const courseDetails = {
    mba: {
        title: "MBA - Master of Business Administration",
        duration: "2 Years (4 Semesters)",
        mode: "Online",
        eligibility: "Bachelor's degree in any discipline with minimum 50% marks",
        fee: "₹1,15,000 - ₹1,25,000",
        description: "Our MBA program is designed to transform aspiring professionals into dynamic business leaders. With a focus on practical skills, strategic thinking, and real-world applications, this program prepares you for leadership roles across industries.",
        highlights: [
            "Industry-relevant curriculum updated regularly",
            "Live interactive sessions with industry experts",
            "Case study based learning methodology",
            "Capstone projects with real companies",
            "Flexible learning schedule for working professionals",
            "Access to virtual library with 10,000+ resources",
            "Placement assistance and career guidance",
            "Alumni network of 50,000+ professionals"
        ],
        specializations: [
            {
                name: "Marketing Management",
                description: "Master digital marketing, brand strategy, consumer behavior, and market research"
            },
            {
                name: "Finance Management",
                description: "Expertise in corporate finance, investment banking, financial analysis, and risk management"
            },
            {
                name: "Human Resource Management",
                description: "Learn talent acquisition, performance management, organizational development, and HR analytics"
            },
            {
                name: "Operations Management",
                description: "Focus on supply chain, process optimization, quality management, and logistics"
            },
            {
                name: "IT Management",
                description: "Bridge technology and business with IT strategy, project management, and digital transformation"
            },
            {
                name: "International Business",
                description: "Navigate global markets with expertise in export-import, cross-cultural management, and international finance"
            }
        ],
        curriculum: [
            "Semester 1: Management Fundamentals, Organizational Behavior, Business Statistics, Accounting for Managers",
            "Semester 2: Marketing Management, Financial Management, Operations Management, Human Resource Management",
            "Semester 3: Specialization Core Subjects, Strategic Management, Business Analytics, Electives",
            "Semester 4: Specialization Advanced Subjects, Capstone Project, Industry Internship, Leadership Development"
        ],
        careerProspects: [
            "Business Development Manager - ₹6-12 LPA",
            "Marketing Manager - ₹7-15 LPA",
            "Financial Analyst - ₹6-14 LPA",
            "HR Manager - ₹6-12 LPA",
            "Operations Manager - ₹7-13 LPA",
            "Management Consultant - ₹8-18 LPA",
            "Product Manager - ₹10-20 LPA",
            "Entrepreneur/Startup Founder"
        ]
    },
    mca: {
        title: "MCA - Master of Computer Applications",
        duration: "2 Years (4 Semesters)",
        mode: "Online",
        eligibility: "Bachelor's degree with Mathematics at 10+2 level or graduation",
        fee: "₹1,25,000 - ₹1,40,000",
        description: "The MCA program is designed to create technology leaders who can develop innovative solutions for complex problems. With hands-on projects, industry collaborations, and cutting-edge curriculum, you'll be ready to excel in the dynamic tech industry.",
        highlights: [
            "Latest technologies: AI/ML, Cloud, DevOps, Blockchain",
            "Hands-on coding labs and real-world projects",
            "Industry certifications (AWS, Azure, Google Cloud)",
            "Hackathons and coding competitions",
            "Live coding sessions with industry professionals",
            "24/7 access to virtual labs and development tools",
            "Dedicated placement cell with 95% placement record",
            "Internship opportunities with top tech companies"
        ],
        specializations: [
            {
                name: "Artificial Intelligence & Machine Learning",
                description: "Deep learning, neural networks, NLP, computer vision, and predictive analytics"
            },
            {
                name: "Data Science & Analytics",
                description: "Big data technologies, statistical modeling, data visualization, and business intelligence"
            },
            {
                name: "Cyber Security",
                description: "Ethical hacking, network security, cryptography, security auditing, and threat analysis"
            },
            {
                name: "Cloud Computing",
                description: "AWS, Azure, GCP, cloud architecture, DevOps, containerization, and microservices"
            },
            {
                name: "Mobile Application Development",
                description: "iOS, Android, React Native, Flutter, cross-platform development, and app monetization"
            },
            {
                name: "Software Engineering",
                description: "Full-stack development, system design, microservices, agile methodologies, and software testing"
            }
        ],
        curriculum: [
            "Semester 1: Programming Fundamentals, Data Structures, Database Management, Computer Networks",
            "Semester 2: Object-Oriented Programming, Web Technologies, Operating Systems, Software Engineering",
            "Semester 3: Specialization Core, Advanced Algorithms, Cloud Computing, Mobile Development",
            "Semester 4: Specialization Advanced Topics, Major Project, Industry Internship, Emerging Technologies"
        ],
        careerProspects: [
            "Software Developer - ₹5-12 LPA",
            "Full Stack Developer - ₹7-15 LPA",
            "Data Scientist - ₹8-20 LPA",
            "AI/ML Engineer - ₹10-25 LPA",
            "Cloud Architect - ₹12-28 LPA",
            "DevOps Engineer - ₹8-18 LPA",
            "Cyber Security Analyst - ₹7-16 LPA",
            "Tech Lead/Architect - ₹15-35 LPA"
        ]
    },
    bba: {
        title: "BBA - Bachelor of Business Administration",
        duration: "3 Years (6 Semesters)",
        mode: "Online",
        eligibility: "10+2 from recognized board with minimum 50% marks",
        fee: "₹1,35,000 (Total Program)",
        description: "Our BBA program provides a strong foundation in business fundamentals and prepares students for successful careers in management. The program emphasizes practical learning, leadership development, and entrepreneurial thinking.",
        highlights: [
            "Comprehensive business foundation",
            "Industry internships and live projects",
            "Guest lectures from business leaders",
            "Entrepreneurship development programs",
            "Soft skills and personality development",
            "Business simulation games and case studies",
            "National and international study tours (virtual)",
            "Pre-placement training and grooming sessions"
        ],
        specializations: [
            {
                name: "General Management",
                description: "Broad-based business education covering all functional areas"
            },
            {
                name: "Marketing",
                description: "Consumer behavior, brand management, digital marketing basics"
            },
            {
                name: "Finance",
                description: "Financial accounting, investment fundamentals, banking operations"
            },
            {
                name: "Human Resources",
                description: "Organizational behavior, talent management, HR operations"
            }
        ],
        curriculum: [
            "Year 1: Business Communication, Principles of Management, Financial Accounting, Business Economics, Business Mathematics",
            "Year 2: Marketing Management, Human Resource Management, Financial Management, Operations Management, Business Law",
            "Year 3: Strategic Management, Entrepreneurship, Business Analytics, Specialization Subjects, Summer Internship, Final Project"
        ],
        careerProspects: [
            "Management Trainee - ₹3-6 LPA",
            "Business Analyst - ₹4-8 LPA",
            "Sales Executive - ₹3-7 LPA",
            "Marketing Coordinator - ₹3.5-7 LPA",
            "HR Executive - ₹3-6 LPA",
            "Operations Executive - ₹3.5-7 LPA",
            "Higher Studies: MBA, MS",
            "Entrepreneurship opportunities"
        ]
    },
    bca: {
        title: "BCA - Bachelor of Computer Applications",
        duration: "3 Years (6 Semesters)",
        mode: "Online",
        eligibility: "10+2 with Mathematics (preferred) from recognized board",
        fee: "₹1,50,000 (Total Program)",
        description: "The BCA program provides comprehensive knowledge of computer applications and software development. Students gain practical skills in programming, database management, web development, and emerging technologies.",
        highlights: [
            "Strong programming foundation in multiple languages",
            "Hands-on projects and coding assignments",
            "Industry-standard development tools and platforms",
            "Regular coding challenges and hackathons",
            "Industry internships with tech companies",
            "Preparation for IT certifications",
            "Soft skills and aptitude training",
            "Campus placement with 90%+ success rate"
        ],
        specializations: [
            {
                name: "Software Development",
                description: "Programming languages, web development, mobile app development"
            },
            {
                name: "Database Management",
                description: "SQL, NoSQL databases, data modeling, database administration"
            },
            {
                name: "Web Technologies",
                description: "HTML, CSS, JavaScript, React, Node.js, full-stack development"
            },
            {
                name: "Networking",
                description: "Computer networks, network security, system administration"
            }
        ],
        curriculum: [
            "Year 1: C Programming, Computer Fundamentals, Digital Electronics, Mathematics, Communication Skills",
            "Year 2: Data Structures, Java Programming, Database Management, Web Technologies, Operating Systems",
            "Year 3: Software Engineering, Cloud Computing, Mobile App Development, Python Programming, Major Project, Industrial Training"
        ],
        careerProspects: [
            "Software Developer - ₹3-8 LPA",
            "Web Developer - ₹3-7 LPA",
            "Database Administrator - ₹4-9 LPA",
            "System Analyst - ₹4-8 LPA",
            "Network Administrator - ₹3.5-7 LPA",
            "Quality Assurance Analyst - ₹3-6 LPA",
            "Higher Studies: MCA, M.Tech",
            "Freelancing and Consulting"
        ]
    },
    ma: {
        title: "MA - Master of Arts",
        duration: "2 Years (4 Semesters)",
        mode: "Online",
        eligibility: "Bachelor's degree in relevant field with minimum 50% marks",
        fee: "₹80,000 - ₹95,000",
        description: "Our MA programs offer in-depth study in various humanities and social science disciplines. Develop critical thinking, research skills, and subject expertise that opens doors to diverse career opportunities in education, research, media, and public service.",
        highlights: [
            "Expert faculty with research background",
            "Research methodology and analytical skills",
            "Interdisciplinary approach to learning",
            "Virtual seminars and guest lectures",
            "Access to digital libraries and journals",
            "Dissertation guidance and support",
            "Career opportunities in teaching and research",
            "Preparation for competitive exams (NET, SET)"
        ],
        specializations: [
            {
                name: "English Literature",
                description: "Literary criticism, contemporary literature, creative writing, linguistics"
            },
            {
                name: "Psychology",
                description: "Clinical psychology, counseling, behavioral analysis, psychological testing"
            },
            {
                name: "Economics",
                description: "Macroeconomics, econometrics, development economics, economic policy"
            },
            {
                name: "Political Science",
                description: "Political theory, public administration, international relations, comparative politics"
            },
            {
                name: "Sociology",
                description: "Social research, urban sociology, gender studies, social movements"
            },
            {
                name: "History",
                description: "Modern history, historiography, archival research, cultural studies"
            }
        ],
        curriculum: [
            "Semester 1: Core Subject Foundations, Research Methodology, Critical Theory",
            "Semester 2: Advanced Core Subjects, Electives, Literature Review",
            "Semester 3: Specialization Studies, Advanced Research Methods, Field Work",
            "Semester 4: Dissertation Writing, Viva Voce Preparation, Comprehensive Examination"
        ],
        careerProspects: [
            "Lecturer/Assistant Professor - ₹4-8 LPA",
            "Content Writer/Editor - ₹3-7 LPA",
            "Researcher/Analyst - ₹4-9 LPA",
            "Counselor/Psychologist - ₹3.5-8 LPA (for Psychology)",
            "Civil Services (IAS, IPS, IFS)",
            "Media and Journalism - ₹3-8 LPA",
            "NGO/Social Work - ₹3-6 LPA",
            "Higher Studies: PhD, M.Phil"
        ]
    },
    ba: {
        title: "BA - Bachelor of Arts",
        duration: "3 Years (6 Semesters)",
        mode: "Online",
        eligibility: "10+2 from recognized board with minimum 50% marks",
        fee: "₹90,000 (Total Program)",
        description: "The BA program provides a broad-based education in humanities and social sciences. Students develop critical thinking, communication, and analytical skills that are valuable across various career paths.",
        highlights: [
            "Flexible course structure",
            "Choice of multiple specializations",
            "Development of critical thinking skills",
            "Strong foundation for competitive exams",
            "Guest lectures and virtual seminars",
            "Research projects and field studies",
            "Preparation for higher studies",
            "Industry exposure through internships"
        ],
        specializations: [
            {
                name: "English",
                description: "Literature, language studies, communication skills"
            },
            {
                name: "Psychology",
                description: "Fundamentals of psychology, human behavior, counseling basics"
            },
            {
                name: "Economics",
                description: "Microeconomics, macroeconomics, statistics, Indian economy"
            },
            {
                name: "Political Science",
                description: "Political systems, governance, public policy, international affairs"
            },
            {
                name: "History",
                description: "Ancient, medieval, and modern history, world civilizations"
            },
            {
                name: "Sociology",
                description: "Social structures, culture, social issues, community development"
            }
        ],
        curriculum: [
            "Year 1: Foundation courses in chosen subjects, Communication Skills, Environmental Studies, General Knowledge",
            "Year 2: Core subject studies, Optional papers, Research methodology basics, Social awareness",
            "Year 3: Advanced topics, Project work, Internship/Field work, Comprehensive examination"
        ],
        careerProspects: [
            "Content Creator - ₹2.5-5 LPA",
            "Public Relations Officer - ₹3-6 LPA",
            "Social Worker - ₹2.5-5 LPA",
            "Administrative Officer - ₹3-6 LPA",
            "Journalism - ₹3-7 LPA",
            "Teaching (after B.Ed) - ₹3-6 LPA",
            "Civil Services Preparation",
            "Higher Studies: MA, MBA, MSW"
        ]
    }
};

// Open Course Modal
function openCourseModal(courseId) {
    const course = courseDetails[courseId];
    if (!course) return;

    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header-content">
            <h2>${course.title}</h2>
            <div class="course-meta">
                <span><i class="far fa-clock"></i> ${course.duration}</span>
                <span><i class="fas fa-laptop"></i> ${course.mode}</span>
                <span><i class="fas fa-rupee-sign"></i> ${course.fee}</span>
            </div>
        </div>

        <div class="course-section">
            <h3><i class="fas fa-info-circle"></i> Program Overview</h3>
            <p class="course-description">${course.description}</p>
        </div>

        <div class="course-section">
            <h3><i class="fas fa-user-graduate"></i> Eligibility</h3>
            <p class="eligibility">${course.eligibility}</p>
        </div>

        <div class="course-section">
            <h3><i class="fas fa-star"></i> Program Highlights</h3>
            <ul class="highlights-list">
                ${course.highlights.map(highlight => `<li><i class="fas fa-check-circle"></i> ${highlight}</li>`).join('')}
            </ul>
        </div>

        <div class="course-section">
            <h3><i class="fas fa-graduation-cap"></i> Specializations</h3>
            <div class="specializations-grid">
                ${course.specializations.map(spec => `
                    <div class="spec-item">
                        <h4>${spec.name}</h4>
                        <p>${spec.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="course-section">
            <h3><i class="fas fa-book"></i> Curriculum Overview</h3>
            <ul class="curriculum-list">
                ${course.curriculum.map(item => `<li><i class="fas fa-chevron-right"></i> ${item}</li>`).join('')}
            </ul>
        </div>

        <div class="course-section">
            <h3><i class="fas fa-briefcase"></i> Career Prospects</h3>
            <ul class="career-list">
                ${course.careerProspects.map(career => `<li><i class="fas fa-arrow-right"></i> ${career}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-actions">
            <a href="fees.html" class="btn btn-outline">View Fee Details</a>
            <a href="signup.html" class="btn btn-primary">Apply Now</a>
        </div>
    `;

    document.getElementById('courseModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Course Modal
function closeCourseModal() {
    document.getElementById('courseModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('courseModal');
    if (event.target === modal) {
        closeCourseModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCourseModal();
    }
});
