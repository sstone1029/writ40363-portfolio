# Study Abroad Hub 🌍

## PROJECT ZED: AI-Assisted Web Application

**Developer:** Samantha Stone  
**Course:** WRIT 40363 - Digital Communication & Design  
**Due Date:** December 10, 2025

---

## Project Overview

The Study Abroad Hub is an interactive web application designed to help college students planning to study abroad. The app provides essential tools for comparing weather across different cities, converting currencies, finding accommodation options, tracking time zones, and discovering student discounts.

This project represents my fourth and final web development project, where I'm working with **GitHub Copilot** as my AI pair programming partner to build something more ambitious than my previous projects.

---

## Why This App?

As a college student interested in travel and international experiences, I wanted to create a practical tool that consolidates the most important information students need when considering study abroad programs. Instead of jumping between multiple websites and apps, students can use this hub to compare destinations side-by-side.

---

## Technologies Used

- **HTML5** - Semantic structure and accessibility
- **CSS3** - Responsive design with CSS Grid/Flexbox, custom properties, gradients, and animations
- **JavaScript (ES6+)** - DOM manipulation, async/await, fetch API, localStorage
- **APIs:**
  - OpenWeatherMap API - Real-time weather data
  - Exchange Rate API - Live currency conversion (planned)
- **GitHub Pages** - Deployment and hosting
- **AI Tools:** GitHub Copilot (Claude Sonnet 4.5)

---

## Features

### 1. **Weather Comparison** ☀️
- Search and add multiple cities to compare weather conditions
- Display current temperature, feels-like temp, humidity, and wind speed
- Weather icons and descriptions
- Save favorite cities to localStorage
- Remove cities with one click

### 2. **Time Zone Converter** 🕐
- Compare current times across different study abroad destinations
- Help students coordinate with friends/family back home

### 3. **Currency Converter** 💱
- Convert between major world currencies
- Live exchange rates
- Essential for budgeting study abroad costs

### 4. **Where to Stay** 🏠
- Student-friendly accommodation information
- Dorms, hostels, apartments comparison

### 5. **Student Discounts** 🎓
- Curated list of international student discount programs
- Tech services, transportation, and entertainment deals

---

## Upskilled Techniques

This project demonstrates growth from Projects 1-3:

### From Project 1 (HTML/CSS):
- **Advanced CSS animations and transitions** - Smooth hover effects, card transformations
- **CSS Grid layout** - Responsive card containers
- **Custom CSS properties** - Color theming with CSS variables
- **Gradient backgrounds** - Modern visual design

### From Project 2 (JavaScript):
- **Complex DOM manipulation** - Dynamically creating and removing weather cards
- **Event delegation** - Efficient event handling across multiple elements
- **localStorage integration** - Persisting user data across sessions
- **Form validation and error handling** - City search validation

### From Project 3 (APIs & Async):
- **Working with external APIs** - OpenWeatherMap integration
- **Advanced async patterns** - Fetch API with error handling
- **Complex state management** - Managing multiple cities and API responses
- **Data processing** - Converting units and formatting weather data

### New Techniques (Learned via AI):
- Tab-based navigation system
- API key management and security practices
- Modular code organization
- Accessibility considerations (ARIA labels, keyboard navigation)

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samanthastone/writ40363-portfolio.git
   cd projects/project4-zed
   ```

2. **Get API Keys:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) for a free API key
   - (Optional) Get currency exchange rate API key

3. **Add your API key:**
   - Open `js/script.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key

4. **Open the app:**
   - Open `index.html` in your browser
   - Or visit the live version: [Study Abroad Hub](https://samanthastone.github.io/writ40363-portfolio/projects/project4-zed/)

---

## Development Process

This project was built in collaboration with GitHub Copilot (Claude Sonnet 4.5). Key stages included:

1. **Planning & Brainstorming** - AI helped generate project ideas tailored to college student needs
2. **Structure Setup** - Built HTML foundation with tabbed navigation system
3. **Weather API Integration** - Implemented fetch API with error handling and data display
4. **localStorage Implementation** - Added persistence for saved cities
5. **Responsive Design** - Created mobile-friendly layout with CSS Grid
6. **Enhancement & Polish** - Refined UI/UX, added animations, improved accessibility

For detailed documentation of my AI collaboration, see [AI_COLLABORATION_LOG.md](AI_COLLABORATION_LOG.md).

---

## Challenges & Learning

Key challenges I encountered:
- Understanding API authentication and CORS issues
- Managing asynchronous data fetching for multiple cities
- Designing an intuitive tab-based interface
- Balancing feature scope with time constraints

What I learned:
- How to effectively prompt AI for specific functionality
- When to modify AI-generated code vs. using it as-is
- The importance of testing with real API data
- How to break complex features into manageable steps

See my full reflection in [REFLECTION.md](REFLECTION.md).

---

## Future Enhancements

If I continue developing this app, I would add:
- 5-day weather forecast for each city
- Interactive map showing all saved cities
- Cost of living comparison data
- User accounts for cross-device syncing
- Social features to share travel plans with friends
- Flight price tracking integration

---

## Credits

- **Weather data:** [OpenWeatherMap API](https://openweathermap.org/)
- **Weather icons:** OpenWeatherMap
- **AI Assistant:** GitHub Copilot (Claude Sonnet 4.5)
- **Developer:** Samantha Stone
- **Course Instructor:** [TCU DCDA]
- **Inspiration:** Personal interest in study abroad programs and travel planning

---

## License

This project was created for educational purposes as part of WRIT 40363 at TCU.

---

## Contact

Questions or feedback? Feel free to reach out!

**Portfolio:** [samanthastone.github.io/writ40363-portfolio](https://samanthastone.github.io/writ40363-portfolio)  
**GitHub:** [@samanthastone](https://github.com/samanthastone)