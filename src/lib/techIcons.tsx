import {
  SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiVuedotjs, SiSvelte, SiHtml5, SiCss, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiNestjs, SiExpress,
  SiOpenai, SiGooglegemini,
  SiMongodb, SiPostgresql,
  SiDocker, SiGithubactions,
  SiGit, SiRedis, SiSocketdotio,
  SiD3, SiChartdotjs, SiGraphql, SiJenkins, SiApachekafka, SiWebrtc,
} from "react-icons/si";
import { FaRobot, FaBrain, FaServer, FaPlug, FaAws, FaDatabase, FaMobile } from "react-icons/fa";

export const techIconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  // Languages
  "JavaScript (ES6+)": { icon: <SiJavascript />,   color: "#F7DF1E" },
  "TypeScript":         { icon: <SiTypescript />,    color: "#3178C6" },
  "Python":             { icon: <SiPython />,         color: "#3776AB" },
  // Frontend
  "React.js":           { icon: <SiReact />,          color: "#61DAFB" },
  "React Native":       { icon: <SiReact />,          color: "#61DAFB" },
  "Next.js":            { icon: <SiNextdotjs />,      color: "#fff" },
  "Vue.js":             { icon: <SiVuedotjs />,       color: "#4FC08D" },
  "SvelteKit":          { icon: <SiSvelte />,         color: "#FF3E00" },
  "HTML5":              { icon: <SiHtml5 />,          color: "#E34F26" },
  "CSS3":               { icon: <SiCss />,            color: "#1572B6" },
  "Tailwind CSS":       { icon: <SiTailwindcss />,    color: "#06B6D4" },
  "Bootstrap":          { icon: <SiBootstrap />,      color: "#7952B3" },
  "D3.js":              { icon: <SiD3 />,              color: "#F9A03C" },
  "Chart.js":           { icon: <SiChartdotjs />,     color: "#FF6384" },
  // Backend
  "Node.js":            { icon: <SiNodedotjs />,      color: "#339933" },
  "NestJS":             { icon: <SiNestjs />,         color: "#E0234E" },
  "Express.js":         { icon: <SiExpress />,        color: "#fff" },
  "REST APIs":          { icon: <FaServer />,          color: "#9ca3af" },
  "WebSockets":         { icon: <SiSocketdotio />,    color: "#010101" },
  "Socket.io Client":   { icon: <SiSocketdotio />,    color: "#010101" },
  "Socket.io":          { icon: <SiSocketdotio />,    color: "#010101" },
  "GraphQL":            { icon: <SiGraphql />,        color: "#E10098" },
  // AI / ML
  "OpenAI GPT-4":       { icon: <SiOpenai />,         color: "#fff" },
  "OpenAI":             { icon: <SiOpenai />,         color: "#fff" },
  "Google Gemini":      { icon: <SiGooglegemini />,   color: "#4285F4" },
  "Claude":             { icon: <FaBrain />,           color: "#a78bfa" },
  "Prompt Engineering": { icon: <FaBrain />,           color: "#a78bfa" },
  "AI Agents":          { icon: <FaRobot />,           color: "#a78bfa" },
  "Generative AI":      { icon: <FaRobot />,           color: "#a78bfa" },
  "NLP":                { icon: <FaBrain />,           color: "#a78bfa" },
  "Sentiment Analysis": { icon: <FaBrain />,           color: "#a78bfa" },
  // Databases
  "MongoDB":            { icon: <SiMongodb />,         color: "#47A248" },
  "PostgreSQL":         { icon: <SiPostgresql />,      color: "#4169E1" },
  "AWS RDS (PostgreSQL)":{ icon: <SiPostgresql />,    color: "#4169E1" },
  "Redis":              { icon: <SiRedis />,           color: "#DC382D" },
  "Redis (caching)":    { icon: <SiRedis />,           color: "#DC382D" },
  "Redis (session)":    { icon: <SiRedis />,           color: "#DC382D" },
  "Redis (session management)": { icon: <SiRedis />,  color: "#DC382D" },
  "Redis (query caching)":      { icon: <SiRedis />,  color: "#DC382D" },
  "Data Indexing":      { icon: <FaDatabase />,        color: "#6b7280" },
  "Materialized Views": { icon: <FaDatabase />,        color: "#6b7280" },
  "Indexes":            { icon: <FaDatabase />,        color: "#6b7280" },
  "AWS S3 (medical files)":     { icon: <FaAws />,    color: "#FF9900" },
  "AWS S3 (file storage)":      { icon: <FaAws />,    color: "#FF9900" },
  // Infrastructure
  "AWS EC2":            { icon: <FaAws />,             color: "#FF9900" },
  "AWS S3":             { icon: <FaAws />,             color: "#FF9900" },
  "AWS Lambda":         { icon: <FaAws />,             color: "#FF9900" },
  "AWS SQS":            { icon: <FaAws />,             color: "#FF9900" },
  "AWS ECS (containerised clusters)": { icon: <FaAws />, color: "#FF9900" },
  "AWS Secrets Manager (credential management)": { icon: <FaAws />, color: "#FF9900" },
  "AWS":                { icon: <FaAws />,             color: "#FF9900" },
  "Docker":             { icon: <SiDocker />,          color: "#2496ED" },
  "CI/CD":              { icon: <SiGithubactions />,   color: "#2088FF" },
  "Jenkins":            { icon: <SiJenkins />,         color: "#D24939" },
  "Serverless":         { icon: <FaAws />,             color: "#FF9900" },
  // Tools
  "Git":                { icon: <SiGit />,             color: "#F05032" },
  "Third Party APIs":   { icon: <FaPlug />,            color: "#9ca3af" },
  "Framer Motion":      { icon: <FaServer />,          color: "#9ca3af" },
  "Mobile App":         { icon: <FaMobile />,          color: "#9ca3af" },
  "Kafka":              { icon: <SiApachekafka />,     color: "#231F20" },
  "Apache Kafka":       { icon: <SiApachekafka />,     color: "#231F20" },
  "WebRTC":             { icon: <SiWebrtc />,          color: "#4285F4" },
};

export function getTechIcon(name: string) {
  // exact match first, then partial
  if (techIconMap[name]) return techIconMap[name];
  const key = Object.keys(techIconMap).find((k) =>
    name.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(name.toLowerCase())
  );
  return key ? techIconMap[key] : null;
}
