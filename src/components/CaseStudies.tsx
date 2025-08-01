import React, { useState } from 'react';
import { Filter, ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';

interface CaseStudiesProps {
  darkMode: boolean;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Healthcare', 'Manufacturing', 'Financial', 'E-Commerce', 'Media & Entertainment', 'IT'];

  const caseStudies = [
  {
    "category": "Healthcare",
    "title": "AI-Powered Clinical Documentation",
    "client": "Global Health Systems",
    "challenge": "Reduce physician burnout and improve accuracy by automating the clinical documentation process from patient interactions.",
    "solution": "Deployed a natural language processing (NLP) model to transcribe and summarize doctor-patient conversations into structured clinical notes in real-time.",
    "results": ["80% reduction in manual documentation time", "95% accuracy in clinical note generation", "Improved physician satisfaction by 50%"],
    "image": "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "280%", "timeline": "8 months", "users": "5,000+ clinicians" }
  },
  {
    "category": "Healthcare",
    "title": "Intelligent Appointment Scheduling",
    "client": "Metro City Hospitals",
    "challenge": "Optimize appointment scheduling to reduce patient wait times and minimize no-shows across a multi-specialty hospital network.",
    "solution": "Implemented an AI-driven scheduling system that predicts appointment durations, suggests optimal times, and sends automated, interactive reminders.",
    "results": ["35% reduction in patient no-shows", "25% decrease in average wait times", "Improved clinic resource utilization by 20%"],
    "image": "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "220%", "timeline": "5 months", "users": "10,000+ patients monthly" }
  },
  {
    "category": "Financial",
    "title": "Real-Time Fraud Detection Engine",
    "client": "Innovate Bank Corp",
    "challenge": "Detect and prevent fraudulent transactions in real-time across millions of daily transactions without impacting legitimate customer experience.",
    "solution": "Developed a machine learning model that analyzes transaction patterns and user behavior to identify and flag suspicious activities with high accuracy.",
    "results": ["99.8% fraud detection accuracy", "Reduced false positives by 60%", "$15M saved in fraud losses annually"],
    "image": "https://images.pexels.com/photos/5980863/pexels-photo-5980863.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "450%", "timeline": "9 months", "users": "10M+ customers" }
  },
  {
    "category": "Financial",
    "title": "AI Customer Service Automation",
    "client": "Vertex Financial",
    "challenge": "Improve customer service efficiency and availability by automating responses to common inquiries across web and mobile platforms.",
    "solution": "Launched an AI-powered chatbot and virtual assistant capable of handling over 300 common banking queries and executing simple transactions.",
    "results": ["70% of customer queries resolved without human intervention", "24/7 customer support availability", "40% reduction in customer service operational costs"],
    "image": "https://images.pexels.com/photos/8353802/pexels-photo-8353802.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "310%", "timeline": "6 months", "users": "1M+ monthly interactions" }
  },
  {
    "category": "E-Commerce",
    "title": "AI-Powered Customer Service Chatbot",
    "client": "StyleHub Fashion",
    "challenge": "Provide instant, 24/7 support to online shoppers for queries related to orders, returns, and product information to enhance customer satisfaction.",
    "solution": "Integrated a conversational AI chatbot on the e-commerce site to provide instant answers, track orders, and process returns automatically.",
    "results": ["90% of support tickets resolved instantly", "50% reduction in human agent workload", "30% increase in customer satisfaction scores"],
    "image": "https://images.pexels.com/photos/7641913/pexels-photo-7641913.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "250%", "timeline": "4 months", "users": "500,000+ users" }
  },
  {
    "category": "E-Commerce",
    "title": "Hyper-Personalized Shopping Experience",
    "client": "ShopRight Online",
    "challenge": "Increase customer engagement and conversion rates by providing a unique and personalized shopping experience for each user.",
    "solution": "Utilized an AI recommendation engine that analyzes browsing history, purchase data, and user preferences to deliver personalized product suggestions and offers.",
    "results": ["35% increase in average order value", "25% higher customer retention rate", "20% boost in overall sales"],
    "image": "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "380%", "timeline": "7 months", "users": "2M+ shoppers" }
  },
  {
    "category": "Manufacturing",
    "title": "AI-Optimized Production Lines",
    "client": "Apex Manufacturing",
    "challenge": "Improve manufacturing efficiency and reduce defects by optimizing the assembly line process in real-time.",
    "solution": "Implemented computer vision systems to monitor production lines, identify anomalies, and use AI algorithms to adjust machine settings for optimal output.",
    "results": ["15% increase in production throughput", "30% reduction in product defects", "Minimized production line downtime by 20%"],
    "image": "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "320%", "timeline": "10 months", "users": "50+ production lines" }
  },
  {
    "category": "Manufacturing",
    "title": "Predictive Maintenance for Fleet",
    "client": "SwiftLogistics",
    "challenge": "Reduce vehicle downtime and maintenance costs for a large logistics fleet by predicting mechanical failures before they occur.",
    "solution": "Deployed IoT sensors and an AI model to analyze vehicle performance data, predict maintenance needs, and schedule service proactively.",
    "results": ["40% reduction in unexpected vehicle breakdowns", "25% decrease in annual maintenance costs", "15% improvement in on-time delivery rates"],
    "image": "https://images.pexels.com/photos/8079033/pexels-photo-8079033.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "290%", "timeline": "8 months", "users": "1,200+ vehicles" }
  },
  {
    "category": "Media & Entertainment",
    "title": "Personalized Content Recommendation Engine",
    "client": "StreamFlix",
    "challenge": "Increase user engagement and subscription retention by providing highly personalized content recommendations on a streaming platform.",
    "solution": "Built a deep learning recommendation engine that analyzes viewing habits and user ratings to suggest relevant movies and shows.",
    "results": ["30% increase in user watch time", "20% reduction in subscription churn", "Higher user satisfaction and engagement"],
    "image": "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "300%", "timeline": "6 months", "users": "5M+ active users" }
  },
  {
    "category": "Media & Entertainment",
    "title": "Automated Production Workflow",
    "client": "Starlight Studios",
    "challenge": "Accelerate the post-production process for films and TV shows by automating repetitive tasks like video tagging, transcription, and initial editing.",
    "solution": "Implemented an AI-powered media asset management system that automatically transcribes dialogue, recognizes faces, and creates rough cuts for editors.",
    "results": ["60% reduction in post-production time", "75% faster media search and retrieval", "Enabled creative teams to focus on high-value editing tasks"],
    "image": "https://images.pexels.com/photos/7234335/pexels-photo-7234335.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "270%", "timeline": "9 months", "users": "300+ production staff" }
  },
  {
    "category": "Media & Entertainment",
    "title": "AI-Powered Subtitle Generator",
    "client": "Global Media House",
    "challenge": "Manually creating accurate, time-synced subtitles for a vast library of video content is slow, expensive, and difficult to scale across multiple languages.",
    "solution": "Developed an AI model that automatically transcribes audio, translates it into multiple languages, and generates perfectly synchronized subtitle files (SRT, VTT).",
    "results": ["95% reduction in subtitle creation time per video", "Automated translation for over 50 languages", "98.5% accuracy in audio transcription"],
    "image": "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "260%", "timeline": "5 months", "users": "150+ content teams" }
  },
  {
    "category": "IT",
    "title": "AI-Driven Network Optimization",
    "client": "Connecta Telecom",
    "challenge": "Ensure high network performance and reliability for millions of users by proactively identifying and resolving potential network congestion and faults.",
    "solution": "Implemented an AI platform that monitors network traffic in real-time, predicts congestion points, and automatically reroutes traffic to maintain service quality.",
    "results": ["99.99% network uptime", "50% faster fault detection and resolution", "30% improvement in network capacity utilization"],
    "image": "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "410%", "timeline": "12 months", "users": "20M+ subscribers" }
  },
  {
    "category": "IT",
    "title": "Enhanced Customer Experience Platform",
    "client": "Innovatech Software",
    "challenge": "Proactively identify and resolve customer issues by analyzing support tickets, social media sentiment, and user feedback.",
    "solution": "Developed an AI-powered customer experience platform that aggregates and analyzes customer feedback from multiple channels to identify trends and predict churn.",
    "results": ["25% reduction in customer churn", "40% faster identification of emerging issues", "Improved Net Promoter Score (NPS) by 15 points"],
    "image": "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    "metrics": { "roi": "350%", "timeline": "7 months", "users": "500+ support agents" }
  }
];

  const filteredCaseStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <section id="case-studies" className={`py-24 ${
      darkMode ? 'bg-slate-800' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Proven Results
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Real success stories from industry leaders who transformed their operations with our solutions.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : darkMode
                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:transform hover:scale-105 ${
                darkMode 
                  ? 'bg-slate-900 border border-slate-700' 
                  : 'bg-white border border-slate-200 shadow-lg hover:shadow-2xl'
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {study.category}
                  </span>
                </div>

                {/* Metrics */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {study.metrics.roi} ROI
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.metrics.timeline}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.metrics.users}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {study.title}
                </h3>
                
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {study.client}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className={`text-sm font-semibold mb-1 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Challenge
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-sm font-semibold mb-1 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Solution
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Results
                    </h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className={`flex items-center text-sm ${
                          darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className={`inline-flex flex-col items-center gap-4 p-8 rounded-2xl ${
            darkMode ? 'bg-slate-900' : 'bg-white'
          } border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Ready to achieve similar results?
            </h3>
            <p className={`text-center max-w-md ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Let's discuss how we can transform your business with proven solutions.
            </p>
            <a
              href="#contact"
              className="px-8 py-3 btn-aquamarine font-semibold rounded-lg shadow-lg hover:shadow-xl"
            >
              See Our Results
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
