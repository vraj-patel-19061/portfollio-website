"use client"

import { Mail, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function Portfolio() {
  // State for typing animation
  const [displayedText, setDisplayedText] = useState("")
  const fullText =
    "Data Engineer passionate about building scalable data solutions and turning data into actionable insights."

  // Theme toggle functionality - fixed implementation
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Ensure component is mounted before rendering theme toggle - fixed
  useEffect(() => {
    setMounted(true)
  }, [])

  // Fixed theme toggle function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-background text-foreground w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Add custom CSS animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        
        @keyframes data-flow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-data-flow {
          animation: data-flow 3s linear infinite;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .badge-hover {
          transition: all 0.3s ease;
        }
        
        .badge-hover:hover {
          transform: scale(1.1);
          background-color: rgb(59, 130, 246);
          color: white;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .text-shimmer {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shimmer 3s linear infinite;
        }
      `}</style>

      {/* Navigation - Removed LinkedIn button */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="#home">
              <span className="hidden font-bold sm:inline-block text-foreground">Vraj Patel</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                About
              </a>
              <a href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Experience
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <span className="font-bold md:hidden text-foreground">Vraj Patel</span>
            </div>
            {/* Navigation buttons - only theme toggle */}
            <nav className="flex items-center space-x-2">
              {/* Fixed theme toggle button */}
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="hover-lift" disabled={!mounted}>
                {mounted ? (
                  theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )
                ) : (
                  <div className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section with enhanced animations */}
      <section id="home" className="w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating data particles */}
        <div className="absolute inset-0 -z-5 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-green-500 rounded-full animate-float stagger-2"></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-500 rounded-full animate-float stagger-4"></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-yellow-500 rounded-full animate-float stagger-6"></div>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2 animate-on-scroll opacity-0">
            {/* Toned down name styling - removed excessive glow effects */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent font-extrabold tracking-wide text-shimmer">
                  Vraj Patel
                </span>
                {/* Innovative floating particles effect */}
                <div className="absolute -inset-4 pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float opacity-70"></div>
                  <div className="absolute top-2 right-1/4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-float stagger-2 opacity-60"></div>
                  <div className="absolute -top-1 left-3/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float stagger-4 opacity-80"></div>
                  <div className="absolute bottom-1 left-1/2 w-0.5 h-0.5 bg-blue-300 rounded-full animate-float stagger-6 opacity-50"></div>
                  <div className="absolute bottom-0 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-float stagger-3 opacity-70"></div>
                </div>
                {/* Pulsing glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 blur-lg animate-pulse opacity-30 -z-10"></div>
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 min-h-[3rem]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row animate-on-scroll opacity-0 stagger-2">
            <Button size="lg" asChild className="hover-lift">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned with innovative detective theme */}
      <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden">
        {/* Enhanced background with detective theme - fixed for dark mode */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-blue-900/5 to-purple-900/5 dark:from-slate-100/5 dark:via-blue-100/5 dark:to-purple-100/5" />
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200/20 dark:border-blue-800/20 rounded-full animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-24 h-24 border border-purple-200/20 dark:border-purple-800/20 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 border border-green-200/20 dark:border-green-800/20 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center animate-on-scroll opacity-0">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Data Detective Story
            </span>
          </h2>

          {/* Interactive detective dashboard layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Detective profile card */}
            <div className="animate-on-scroll opacity-0 stagger-1">
              <Card className="relative overflow-hidden border-2 border-blue-200/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl animate-pulse-glow">
                      🕵️‍♂️
                    </div>
                    <div>
                      <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Data Detective
                      </CardTitle>
                      <CardDescription className="text-lg">Case Status: Active</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Experience badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">2.5 Years Experience</span>
                  </div>

                  {/* Animated stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Changed background opacity from 50% to 20% for lighter appearance */}
                    <div className="text-center p-4 bg-white/20 dark:bg-gray-800/120 rounded-lg hover:scale-105 transition-transform">
                      <div className="text-2xl font-bold text-blue-600">∞</div>
                      <div className="text-xs text-muted-foreground">Patterns Found</div>
                    </div>
                    {/* Changed background opacity from 50% to 20% for lighter appearance */}
                    <div className="text-center p-4 bg-white/20 dark:bg-gray-800/200 rounded-lg hover:scale-105 transition-transform text-transparent">
                      <div className="text-2xl font-bold text-purple-600">100%</div>
                      <div className="text-xs text-muted-foreground">Cases Solved</div>
                    </div>
                  </div>

                  {/* Detective tools */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">Detective Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        Pattern Recognition
                      </Badge>
                      <Badge
                        variant="outline"
                        className="hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                      >
                        Data Extraction
                      </Badge>
                      <Badge
                        variant="outline"
                        className="hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                      >
                        Insight Generation
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Interactive story */}
            <div className="space-y-6 animate-on-scroll opacity-0 stagger-2">
              {/* Case file header */}
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/20 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  Case File: The Data Mystery
                </h3>
                <p className="text-muted-foreground italic">
                  "Imagine a world where data is the key to unlocking mysteries..."
                </p>
              </div>

              {/* Interactive story cards */}
              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">The Investigation Begins</h4>
                        <p className="text-sm text-muted-foreground">
                          Hidden trends, untold stories, and secrets that could change everything. That's where I come
                          in with my analytical mindset.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Solving Complex Cases</h4>
                        <p className="text-sm text-muted-foreground">
                          Discovering patterns in chaos, transforming raw data into clear, actionable insights through
                          meticulous extraction and analysis.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:translate-x-2 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">The Detective's Method</h4>
                        <p className="text-sm text-muted-foreground">
                          Combining technical Data Engineer skills with detective intuition, always searching for hidden
                          stories within the numbers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Animated code snippet - fixed for dark mode */}
              <Card className="bg-gray-900 dark:bg-gray-950 text-green-400 font-mono text-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="ml-2 text-gray-400">detective_mode.py</span>
                  </div>
                  <div className="space-y-1">
                    <div className="animate-pulse">
                      <span className="text-blue-400">def</span>{" "}
                      <span className="text-yellow-400">solve_data_mystery</span>():
                    </div>
                    <div className="pl-4 animate-pulse" style={{ animationDelay: "0.5s" }}>
                      patterns = <span className="text-purple-400">extract_hidden_insights</span>()
                    </div>
                    <div className="pl-4 animate-pulse" style={{ animationDelay: "1s" }}>
                      insights = <span className="text-purple-400">transform_chaos_to_clarity</span>(patterns)
                    </div>
                    <div className="pl-4 animate-pulse" style={{ animationDelay: "1.5s" }}>
                      <span className="text-blue-400">return</span> actionable_solutions
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with staggered animations */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-muted/90 relative overflow-hidden">
        {/* Advanced animated background with data matrix effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-green-900/5 dark:from-blue-100/5 dark:via-purple-100/5 dark:to-green-100/5" />
          {/* Matrix-style data flow */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-data-flow"
                style={{
                  left: `${(i * 5) % 100}%`,
                  height: "100%",
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + (i % 3)}s`,
                }}
              />
            ))}
          </div>
          {/* Floating tech icons */}
          <div className="absolute top-20 left-20 w-8 h-8 bg-blue-500/10 rounded-lg rotate-45 animate-float" />
          <div className="absolute top-40 right-32 w-6 h-6 bg-purple-500/10 rounded-full animate-float stagger-3" />
          <div className="absolute bottom-32 left-40 w-10 h-10 bg-green-500/10 rounded-lg animate-float stagger-5" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              A comprehensive arsenal of cutting-edge technologies orchestrated to solve complex data challenges
            </p>
          </div>

          {/* Redesigned hub-and-spoke layout matching the sketch */}
          <div className="animate-on-scroll opacity-0 stagger-1">
            <div className="relative w-full max-w-5xl mx-auto">
              {/* Desktop layout */}
              <div className="hidden md:block relative h-[700px]">
                {/* Central DATA node - made perfectly round */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center animate-pulse-glow border-4 border-white dark:border-gray-800 relative overflow-hidden">
                    {/* Inner glow effect */}
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-sm"></div>
                    <span className="relative text-white text-2xl font-bold tracking-wider drop-shadow-lg">DATA</span>
                  </div>
                </div>

                {/* Connecting lines - using SVG for precise positioning */}
                <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 800 700">
                  {/* Added connecting lines from center DATA node to each skill box edge */}
                  <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Line to Core Languages (top-left) */}
                  <line
                    x1="400"
                    y1="350"
                    x2="97"
                    y2="165"
                    stroke="url(#lineGradient1)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />

                  {/* Line to Data Processing (top-right) */}
                  <line
                    x1="400"
                    y1="350"
                    x2="703"
                    y2="165"
                    stroke="url(#lineGradient1)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />

                  {/* Line to Data Concepts (bottom-left) */}
                  <line
                    x1="400"
                    y1="350"
                    x2="97"
                    y2="525"
                    stroke="url(#lineGradient2)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />

                  {/* Line to Cloud Services (bottom-right) */}
                  <line
                    x1="400"
                    y1="350"
                    x2="703"
                    y2="525"
                    stroke="url(#lineGradient2)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  />

                  {/* Top Right (330°) - Data Processing - moved further from center and closer to right edge */}
                  <foreignObject x="600" y="45" width="300" height="240">
                    {/* Increased height from 240px to 280px for Cloud Services */}
                    <Card className="w-64 h-[240px] border-2 border-purple-200/30 transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/14 to-purple-600/14 transition-all duration-300 rounded-lg m-0 p-0" />
                      <CardHeader className="relative flex flex-row items-center gap-3 pb-3 p-4 m-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg">⚙️</span>
                        </div>
                        <CardTitle className="text-lg bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                          Data Processing
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative space-y-6 pt-0 p-4 m-0">
                        <div className="flex flex-wrap gap-2">
                          {["Databricks", "Snowflake", "dbt", "Airflow"].map((skill) => (
                            <Badge key={skill} variant="outline" className="transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </foreignObject>

                  {/* Bottom Right (30°) - Cloud Services - moved further from center and closer to right edge */}
                  <foreignObject x="600" y="405" width="300" height="280">
                    {/* Increased height from 240px to 280px for Cloud Services */}
                    <Card className="w-64 h-[280px] border-2 border-orange-200/30 transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/14 to-red-500/14 transition-all duration-300 rounded-lg m-0 p-0 leading-8" />
                      <CardHeader className="relative flex flex-row items-center gap-3 pb-3 p-4 m-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">☁️</span>
                        </div>
                        <CardTitle className="text-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          Cloud Services
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative space-y-6 pt-0 p-4 m-0">
                        <div className="flex flex-wrap gap-2">
                          {["S3", "SNS", "Lambda", "CloudWatch", "EventBridge", "IAM"].map((skill) => (
                            <Badge key={skill} variant="outline" className="text-sm transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </foreignObject>

                  {/* Bottom Left (150°) - Data Concepts - increased height to prevent content overflow */}
                  <foreignObject x="-53" y="405" width="300" height="280">
                    {/* Increased height from 240px to 280px for Data Concepts */}
                    <Card className="w-64 h-[280px] border-2 border-indigo-200/30 transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/14 to-indigo-600/14 transition-all duration-300 rounded-lg m-0 p-0" />
                      <CardHeader className="relative flex flex-row items-center gap-3 pb-3 p-4 m-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg">🔒</span>
                        </div>
                        <CardTitle className="text-lg bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                          Data Concepts
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative space-y-6 pt-0 p-4 m-0">
                        <div className="flex flex-wrap gap-2">
                          {["Data Governance", "Data Migration", "Batch Processing"].map((skill) => (
                            <Badge key={skill} variant="outline" className="text-sm transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </foreignObject>

                  {/* Top Left (210°) - Core Languages - increased height to prevent content overflow */}
                  <foreignObject x="-53" y="45" width="300" height="240">
                    <Card className="w-64 h-[240px] border-2 border-blue-200/30 transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/14 to-blue-600/14 transition-all duration-300 rounded-lg m-0 p-0" />
                      <CardHeader className="relative flex flex-row items-center gap-3 pb-3 p-4 m-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg">💻</span>
                        </div>
                        <CardTitle className="text-lg bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                          Core Languages
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative space-y-6 pt-0 p-4 m-0">
                        <div className="flex flex-wrap gap-2">
                          {["Python", "PySpark", "SQL"].map((skill) => (
                            <Badge key={skill} variant="outline" className="transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </foreignObject>
                </svg>
              </div>

              {/* Mobile layout - completely redesigned to match the flowing sketch */}
              <div className="md:hidden relative">
                {/* Central DATA node at the top - circular design */}
                <div className="flex justify-center mb-12">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center animate-pulse-glow border-4 border-white dark:border-gray-800 shadow-2xl">
                      <div className="absolute inset-2 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-sm"></div>
                      <span className="relative text-white text-xl font-bold tracking-wider drop-shadow-lg">DATA</span>
                    </div>
                    {/* Floating particles around DATA node */}
                    <div className="absolute -inset-8 pointer-events-none">
                      <div className="absolute top-2 left-4 w-1 h-1 bg-blue-400 rounded-full animate-float opacity-70"></div>
                      <div className="absolute top-8 right-2 w-0.5 h-0.5 bg-purple-400 rounded-full animate-float stagger-2 opacity-60"></div>
                      <div className="absolute bottom-4 left-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float stagger-4 opacity-80"></div>
                      <div className="absolute bottom-2 right-6 w-0.5 h-0.5 bg-blue-300 rounded-full animate-float stagger-6 opacity-50"></div>
                    </div>
                  </div>
                </div>

                {/* Flowing vertical layout with aligned positioning - fixed alignment for mobile */}
                <div className="relative max-w-sm mx-auto px-4">
                  {/* Flowing connecting line on the left - positioned to align with all boxes */}
                  {/* Flowing connecting from node to left line */}
                  <div className="-z-10 absolute left-8 -top-28 right-50 h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30 rounded-full"></div>
                  
                  {/* Flowing connecting line on the left - positioned to align with all boxes */}
                  <div className="absolute left-8 -top-28 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-green-500/30 rounded-full"></div>

                  {/* Skill boxes in flowing arrangement - fixed width alignment for mobile */}
                  <div className="space-y-8">
                    {/* Core Languages - fixed right border alignment */}
                    <div className="relative ml-10 animate-on-scroll opacity-0 stagger-1">
                      <div className="absolute -left-7 top-6 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <Card className="w-full border-2 border-blue-200/30 transition-all duration-300 shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-lg"></div>
                        <CardHeader className="relative flex flex-row items-center gap-3 pb-2 p-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">💻</span>
                          </div>
                          <CardTitle className="text-base bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                            Core Languages
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="relative space-y-6 pt-0 p-3">
                          <div className="flex flex-wrap gap-2">
                            {["Python", "PySpark", "SQL"].map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs transition-colors">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Cloud Services - fixed right border alignment */}
                    <div className="relative ml-10 animate-on-scroll opacity-0 stagger-2">
                      <div
                        className="absolute -left-7 top-6 w-3 h-3 bg-orange-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <Card className="w-full border-2 border-orange-200/30 transition-all duration-300 shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-lg"></div>
                        <CardHeader className="relative flex flex-row items-center gap-3 pb-2 p-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">☁️</span>
                          </div>
                          <CardTitle className="text-base bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            Cloud Services
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="relative space-y-6 pt-0 p-3">
                          <div className="flex flex-wrap gap-2">
                            {["S3", "SNS", "Lambda", "CloudWatch", "EventBridge", "IAM"].map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs transition-colors">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Data Concepts - fixed right border alignment */}
                    <div className="relative ml-10 animate-on-scroll opacity-0 stagger-3">
                      <div
                        className="absolute -left-7 top-6 w-3 h-3 bg-indigo-500 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <Card className="w-full border-2 border-indigo-200/30 transition-all duration-300 shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-600/5 rounded-lg"></div>
                        <CardHeader className="relative flex flex-row items-center gap-3 pb-2 p-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">🔒</span>
                          </div>
                          <CardTitle className="text-base bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                            Data Concepts
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="relative space-y-6 pt-0 p-3">
                          <div className="flex flex-wrap gap-2">
                            {["Data Governance", "Data Migration", "Batch Processing"].map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs transition-colors">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Data Processing - fixed right border alignment */}
                    <div className="relative ml-10 animate-on-scroll opacity-0 stagger-4">
                      <div
                        className="absolute -left-7 top-6 w-3 h-3 bg-purple-500 rounded-full animate-pulse"
                        style={{ animationDelay: "1.5s" }}
                      ></div>
                      <Card className="w-full border-2 border-purple-200/30 transition-all duration-300 shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 rounded-lg"></div>
                        <CardHeader className="relative flex flex-row items-center gap-3 pb-2 p-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">⚙️</span>
                          </div>
                          <CardTitle className="text-base bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                            Data Processing
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="relative space-y-6 pt-0 p-3">
                          <div className="flex flex-wrap gap-2">
                            {["Databricks", "Snowflake", "dbt", "Airflow"].map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs transition-colors">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill mastery summary */}
            <div className="animate-on-scroll opacity-0 stagger-2 mt-16">
              <Card className="relative overflow-hidden border-2 border-gradient-to-r from-blue-200/20 via-purple-200/20 to-green-200/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-green-50/30 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-green-950/10" />
                <CardContent className="relative p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                    Technical Proficiency Overview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-blue-600">90%</div>
                      <div className="text-sm text-muted-foreground">Programming & Scripting</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-purple-600">85%</div>
                      <div className="text-sm text-muted-foreground">Data Processing & ETL</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-green-600">80%</div>
                      <div className="text-sm text-muted-foreground">SQL Models</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Completely redesigned with interactive timeline */}
      <section id="experience" className="w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden">
        {/* Advanced animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-blue-900/5 to-purple-900/5 dark:from-slate-100/5 dark:via-blue-100/5 dark:to-purple-100/5" />
          {/* Animated circuit pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent rounded-full opacity-30" />
          </div>
          {/* Floating achievement badges */}
          <div className="absolute top-20 right-20 w-12 h-12 bg-blue-500/10 rounded-full animate-float flex items-center justify-center">
            <span className="text-blue-500 text-xl">🏆</span>
          </div>
          <div className="absolute bottom-32 left-20 w-10 h-10 bg-green-500/10 rounded-full animate-float stagger-3 flex items-center justify-center">
            <span className="text-green-500 text-lg">💡</span>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-20 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              2.5 years of transforming data challenges into scalable solutions
            </p>
          </div>

          {/* Interactive timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full opacity-30" />

            <div className="space-y-24">
              {/* Current Role - Data Engineer 1 */}
              <div className="relative animate-on-scroll opacity-0 stagger-1">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse-glow shadow-2xl relative z-10">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Role info */}
                  <div className="lg:text-right space-y-6">
                    <div className="inline-block lg:block">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm">
                        CURRENT ROLE
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Data Engineer - 1
                      </h3>
                      <p className="text-xl text-muted-foreground mb-4">Aptologics • June 2024 - Present</p>
                      <div className="flex flex-wrap gap-2 lg:justify-end">
                        <Badge variant="outline" className="hover:bg-purple-100 dark:hover:bg-purple-900/30">
                          Marketing Data
                        </Badge>
                        <Badge variant="outline" className="hover:bg-green-100 dark:hover:bg-green-900/30">
                          Full-Stack ETL
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Achievements */}
                  <div className="space-y-6">
                    <Card className="relative overflow-hidden border-2 border-blue-200/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 group-hover:from-blue-100/50 group-hover:to-purple-100/50 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-950/30 transition-all duration-500" />
                      <CardContent className="relative p-6">
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">🎯</span>
                          </div>
                          Key Achievements
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3 group/item hover:bg-white/50 dark:hover:bg-gray-800/200 p-3 rounded-lg transition-colors">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                            <div>
                              <p className="font-semibold text-sm">Team Collaboration</p>
                              <p className="text-sm text-muted-foreground">
                                Worked with 3-member engineering team for Phase-1 delivery
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 group/item hover:bg-white/50 dark:hover:bg-gray-800/200 p-3 rounded-lg transition-colors">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                            <div>
                              <p className="font-semibold text-sm">Scalable Architecture</p>
                              <p className="text-sm text-muted-foreground">
                                Built marketing data pipelines for Google Ads, Facebook Ads, Bing Ads
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 group/item hover:bg-white/50 dark:hover:bg-gray-800/200 p-3 rounded-lg transition-colors">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                            <div>
                              <p className="font-semibold text-sm">Production Excellence</p>
                              <p className="text-sm text-muted-foreground">
                                Delivered production-grade dbt models for billions of records
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tech stack used */}
                    <Card className="relative overflow-hidden">
                      <CardContent className="p-4">
                        <h5 className="font-semibold mb-3 text-sm text-muted-foreground">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {["Supermetrics", "Amazon S3", "Apache Airflow", "Snowflake", "dbt", "GitLab CI/CD"].map(
                            (tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs hover:scale-105 transition-transform cursor-pointer"
                              >
                                {tech}
                              </Badge>
                            ),
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Previous Role - Associate Data Engineer */}
              <div className="relative animate-on-scroll opacity-0 stagger-2">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-green-500 rounded-full flex items-center justify-center animate-pulse-glow shadow-2xl relative z-10">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Achievements */}
                  <div className="space-y-6 lg:order-2">
                    <div className="inline-block">
                      <Badge className="bg-gradient-to-r from-purple-500 to-green-500 text-white px-4 py-2 text-sm">
                        FOUNDATION ROLE
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                        Associate Data Engineer
                      </h3>
                      <p className="text-xl text-muted-foreground mb-4">Aptologics • June 2023 - May 2024</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="hover:bg-purple-100 dark:hover:bg-purple-900/30">
                          Independent Lead
                        </Badge>
                        <Badge variant="outline" className="hover:bg-green-100 dark:hover:bg-green-900/30">
                          CRM Integration
                        </Badge>
                        <Badge variant="outline" className="hover:bg-blue-100 dark:hover:bg-blue-900/30">
                          Performance Optimization
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Impact metrics */}
                  <div className="space-y-6 lg:order-1">
                    <Card className="relative overflow-hidden border-2 border-purple-200/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-green-50/50 dark:from-purple-950/20 dark:to-green-950/30 group-hover:from-purple-100/50 group-hover:to-green-100/50 dark:group-hover:from-purple-900/30 dark:group-hover:to-green-950/30 transition-all duration-500" />
                      <CardContent className="relative p-6">
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">📈</span>
                          </div>
                          Impact Metrics
                        </h4>

                        <div className="grid grid-cols-2 gap-6 mb-6">
                          <div className="text-center p-4 bg-white/50 dark:bg-gray-800/200 rounded-lg hover:scale-105 transition-transform">
                            <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
                            <div className="text-xs text-muted-foreground">Cost Savings</div>
                          </div>
                          <div className="text-center p-4 bg-white/50 dark:bg-gray-800/200 rounded-lg hover:scale-105 transition-transform">
                            <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                            <div className="text-xs text-muted-foreground">Runtime Reduction</div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3 group/item hover:bg-white/50 dark:hover:bg-gray-800/200 p-3 rounded-lg transition-colors">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                            <div>
                              <p className="font-semibold text-sm">Solo Project Leadership</p>
                              <p className="text-sm text-muted-foreground">
                                Managed 2-person team deliverables independently
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 group/item hover:bg-white/50 dark:hover:bg-gray-800/200 p-3 rounded-lg transition-colors">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                            <div>
                              <p className="font-semibold text-sm">CRM Data Integration</p>
                              <p className="text-sm text-muted-foreground">
                                Automated HubSpot & Salesforce data extraction
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tech stack */}
                    <Card className="relative overflow-hidden">
                      <CardContent className="p-4">
                        <h5 className="font-semibold mb-3 text-sm text-muted-foreground">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Python",
                            "Databricks",
                            "Spark",
                            "HubSpot API",
                            "Salesforce",
                            "dbt",
                            "Kimball Methodology",
                          ].map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs hover:scale-105 transition-transform cursor-pointer"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Career progression summary */}
            <div className="mt-20 animate-on-scroll opacity-0 stagger-3">
              <Card className="relative overflow-hidden border-2 border-gradient-to-r from-blue-200/20 via-purple-200/20 to-green-200/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-green-50/30 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-green-950/10" />
                <CardContent className="relative p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                      Career Growth Trajectory
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-white text-2xl">🚀</span>
                      </div>
                      <h4 className="font-bold text-blue-600">Rapid Advancement</h4>
                      <p className="text-sm text-muted-foreground">Promoted to Data Engineer role within 1 year</p>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-white text-2xl">💡</span>
                      </div>
                      <h4 className="font-bold text-purple-600">Innovation Focus</h4>
                      <p className="text-sm text-muted-foreground">Consistently delivered cost-effective solutions</p>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-white text-2xl">📊</span>
                      </div>
                      <h4 className="font-bold text-green-600">Measurable Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        Achieved 50% cost savings and 30% performance gains
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        {/* Gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 animate-on-scroll opacity-0">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-on-scroll opacity-0 stagger-1">
            I'm always interested in discussing new opportunities, data engineering challenges, or potential
            collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll opacity-0 stagger-2">
            <Button size="lg" asChild className="hover-lift">
              <a href="mailto:vrajpatel19061@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          {/* Moved "Made with love" to left side */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Made with love</span>
            <span className="text-red-500 animate-pulse">❤️</span>
          </div>
          {/* Removed Vercel deployment text - only keeping build info */}
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
