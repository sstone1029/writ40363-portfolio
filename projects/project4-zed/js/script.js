// Tab navigation
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.dataset.tab;
        
        // Remove active class and update ARIA attributes for all
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
            btn.setAttribute('tabindex', '-1');
        });
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class and update ARIA attributes for clicked
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        button.removeAttribute('tabindex');
        document.getElementById(tabName).classList.add('active');
        
        // Focus the activated tab panel for screen readers
        document.getElementById(tabName).focus();
    });
    
    // Add keyboard navigation for tabs
    button.addEventListener('keydown', (e) => {
        const currentIndex = Array.from(tabButtons).indexOf(button);
        let nextIndex;
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            nextIndex = (currentIndex + 1) % tabButtons.length;
            tabButtons[nextIndex].click();
            tabButtons[nextIndex].focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
            tabButtons[nextIndex].click();
            tabButtons[nextIndex].focus();
        } else if (e.key === 'Home') {
            e.preventDefault();
            tabButtons[0].click();
            tabButtons[0].focus();
        } else if (e.key === 'End') {
            e.preventDefault();
            tabButtons[tabButtons.length - 1].click();
            tabButtons[tabButtons.length - 1].focus();
        }
    });
});

// Initialize inactive tabs as not focusable
tabButtons.forEach((btn, index) => {
    if (index !== 0) {
        btn.setAttribute('tabindex', '-1');
    }
});

// Weather API Configuration
const WEATHER_API_KEY = "7390a8877096ab34feb9bd82872f3d3a"; // Replace with your OpenWeatherMap API key
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const weatherCards = document.getElementById('weather-cards');

// Store cities in localStorage
let savedCities = JSON.parse(localStorage.getItem('cities')) || [];

// Event Listeners
document.getElementById('add-city-btn').addEventListener('click', addCity);
document.getElementById('city-search').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addCity();
});

// Add City Function
async function addCity() {
    const cityInput = document.getElementById('city-search');
    const cityName = cityInput.value.trim();
    
    if (!cityName) {
        announceToScreenReader('Please enter a city name');
        alert('Please enter a city name');
        return;
    }
    
    // Check if city already added
    if (savedCities.some(city => city.toLowerCase() === cityName.toLowerCase())) {
        announceToScreenReader('City already added');
        alert('City already added!');
        cityInput.value = '';
        return;
    }
    
    announceToScreenReader('Fetching weather data...');
    await fetchWeather(cityName);
    cityInput.value = '';
}

// Helper function to announce messages to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'visually-hidden';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => announcement.remove(), 1000);
}

// Fetch Weather Data
async function fetchWeather(city) {
    try {
        const response = await fetch(
            `${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=imperial`
        );
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        
        // Save city to localStorage
        savedCities.push(data.name);
        localStorage.setItem('cities', JSON.stringify(savedCities));
        
        // Display weather card
        displayWeatherCard(data);
        announceToScreenReader(`Weather data for ${data.name} added successfully`);
        
    } catch (error) {
        alert(`Error: ${error.message}. Please check the city name and try again.`);
    }
}

// Display Weather Card
function displayWeatherCard(data) {
    const card = document.createElement('div');
    card.className = 'weather-card';
    card.dataset.city = data.name;
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', `Weather information for ${data.name}, ${data.sys.country}`);
    
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed); // Wind speed in mph
    
    card.innerHTML = `
        <button class="remove-btn" onclick="removeCity('${data.name}')" aria-label="Remove ${data.name} from comparison">×</button>
        <div class="city-name">${data.name}, ${data.sys.country}</div>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description} weather icon">
        <div class="temp">${temp}°F</div>
        <div class="description">${description}</div>
        <div class="weather-details">
            <div class="detail">
                <span class="detail-label">Feels like:</span>
                <span class="detail-value">${feelsLike}°F</span>
            </div>
            <div class="detail">
                <span class="detail-label">Humidity:</span>
                <span class="detail-value">${humidity}%</span>
            </div>
            <div class="detail">
                <span class="detail-label">Wind:</span>
                <span class="detail-value">${windSpeed} mph</span>
            </div>
        </div>
    `;
    
    weatherCards.appendChild(card);
}

// Remove City
function removeCity(cityName) {
    // Remove from DOM
    const card = document.querySelector(`[data-city="${cityName}"]`);
    if (card) card.remove();
    
    // Remove from localStorage
    savedCities = savedCities.filter(city => city !== cityName);
    localStorage.setItem('cities', JSON.stringify(savedCities));
    
    announceToScreenReader(`${cityName} removed from comparison`);
}

// Load Saved Cities on Page Load
async function loadSavedCities() {
    for (const city of savedCities) {
        await fetchWeather(city);
    }
}

// ===== TIME ZONE CONVERTER =====
// Note: timezones data is loaded from data.js

function displayTimeZones() {
    const timezoneDisplay = document.getElementById('timezone-display');
    timezoneDisplay.innerHTML = '<div class="timezone-grid"></div>';
    const grid = timezoneDisplay.querySelector('.timezone-grid');
    
    timezones.forEach(({ city, timezone }) => {
        const timeCard = document.createElement('div');
        timeCard.className = 'timezone-card';
        timeCard.setAttribute('role', 'article');
        timeCard.setAttribute('aria-label', `Time in ${city}`);
        timeCard.innerHTML = `
            <div class="timezone-city">${city}</div>
            <div class="timezone-time" data-timezone="${timezone}" aria-label="Current time">--:--:--</div>
            <div class="timezone-date" aria-label="Current date"></div>
        `;
        grid.appendChild(timeCard);
    });
    
    updateTimes();
    setInterval(updateTimes, 1000); // Update every second
}

function updateTimes() {
    document.querySelectorAll('.timezone-time').forEach(timeElement => {
        const timezone = timeElement.dataset.timezone;
        const now = new Date();
        
        const timeString = now.toLocaleTimeString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        
        const dateString = now.toLocaleDateString('en-US', {
            timeZone: timezone,
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
        
        timeElement.textContent = timeString;
        timeElement.nextElementSibling.textContent = dateString;
    });
}

// ===== CURRENCY CONVERTER =====
// Note: currencies data is loaded from data.js

function populateCurrencySelects() {
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');
    
    // Clear existing options
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
    
    // Populate both selects
    Object.entries(currencies).forEach(([code, name]) => {
        const option1 = document.createElement('option');
        option1.value = code;
        option1.textContent = `${code} - ${name}`;
        fromSelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = code;
        option2.textContent = `${code} - ${name}`;
        toSelect.appendChild(option2);
    });
    
    // Set defaults
    fromSelect.value = 'USD';
    toSelect.value = 'EUR';
}

function swapCurrencies() {
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');
    const amountInput = document.getElementById('amount');
    const convertedInput = document.getElementById('converted-amount');
    
    // Swap the selected currencies
    const tempCurrency = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = tempCurrency;
    
    // Swap the amounts if converted amount exists
    if (convertedInput.value) {
        const tempAmount = amountInput.value;
        amountInput.value = convertedInput.value;
        convertedInput.value = tempAmount;
    }
    
    // Clear the result
    document.getElementById('conversion-result').innerHTML = '';
}

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const resultDiv = document.getElementById('conversion-result');
    
    if (!amount || amount <= 0) {
        resultDiv.innerHTML = '<p style="color: #e74c3c;">Please enter a valid amount</p>';
        return;
    }
    
    try {
        resultDiv.innerHTML = '<p>Converting...</p>';
        
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        
        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        
        document.getElementById('converted-amount').value = convertedAmount;
        
        announceToScreenReader(`${amount} ${fromCurrency} equals ${convertedAmount} ${toCurrency}`);
        
        resultDiv.innerHTML = `
            <p><strong>${amount} ${fromCurrency}</strong> = <strong>${convertedAmount} ${toCurrency}</strong></p>
            <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">
                Exchange Rate: 1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}
            </p>
        `;
    } catch (error) {
        resultDiv.innerHTML = '<p style="color: #e74c3c;">Error fetching exchange rates. Please try again.</p>';
    }
}

document.getElementById('convert-btn')?.addEventListener('click', convertCurrency);
document.getElementById('swap-currencies')?.addEventListener('click', swapCurrencies);

// ===== WHERE TO STAY =====
// Note: accommodationData is loaded from data.js

function displayAccommodationInfo(cityKey = null) {
    const stayInfo = document.getElementById('stay-info');
    
    if (!cityKey) {
        stayInfo.innerHTML = `
            <div class="placeholder-message">
                <p>👆 Please select a city from the dropdown above to see accommodation options.</p>
            </div>
        `;
        return;
    }
    
    const cityData = accommodationData[cityKey];
    if (!cityData) return;
    
    stayInfo.innerHTML = `
        <div class="accommodation-section">
            <h3>🏠 Student Accommodation in ${cityData.city}</h3>
            <div class="accommodation-grid">
                ${cityData.places.map(place => `
                    <div class="accommodation-card">
                        <h4>${place.name}</h4>
                        <p class="accommodation-type">${place.type}</p>
                        <p><strong>💰 Price:</strong> ${place.price}</p>
                        <p><strong>📍 Location:</strong> ${place.location}</p>
                        <p><strong>✨ Amenities:</strong> ${place.amenities}</p>
                        <a href="https://${place.website}" target="_blank" class="accommodation-link">
                            Visit Website →
                        </a>
                    </div>
                `).join('')}
            </div>
            <div class="tips-section">
                <h3>💡 Accommodation Tips for ${cityData.city}</h3>
                <ul>
                    <li><strong>Book Early:</strong> Housing fills up fast, especially for September intake</li>
                    <li><strong>Check Location:</strong> Consider proximity to your university and public transport</li>
                    <li><strong>Read Reviews:</strong> Look for student reviews on Google and Facebook groups</li>
                    <li><strong>Understand Contracts:</strong> Know the lease length, deposit, and cancellation policy</li>
                    <li><strong>Visit if Possible:</strong> Try to view properties before committing, or ask for video tours</li>
                    <li><strong>Join Student Groups:</strong> Facebook groups like "Students in ${cityData.city}" have great housing tips</li>
                </ul>
            </div>
        </div>
    `;
}

// Set up accommodation city selector
document.getElementById('accommodation-city')?.addEventListener('change', (e) => {
    displayAccommodationInfo(e.target.value);
});

// ===== FOOD & ACTIVITIES =====
// Note: foodActivitiesData is loaded from data.js

function displayStudentDiscounts(cityKey = null) {
    const discountList = document.getElementById('discount-list');
    
    if (!cityKey) {
        discountList.innerHTML = `
            <div class="placeholder-message">
                <p>👆 Please select a city from the dropdown above to see food and activity recommendations.</p>
            </div>
        `;
        return;
    }
    
    const cityData = foodActivitiesData[cityKey];
    if (!cityData) return;
    
    discountList.innerHTML = `
        <div class="discounts-section">
            <!-- Food & Dining Section -->
            <div class="section-category">
                <h3 class="category-title">🍽️ Food & Dining in ${cityData.city}</h3>
                <div class="discount-grid">
                    ${cityData.food.map(item => `
                        <div class="discount-card">
                            <div class="discount-icon">${item.icon}</div>
                            <h4>${item.title}</h4>
                            <p>${item.desc}</p>
                            <p class="tip-text">${item.tip}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Entertainment & Activities Section -->
            <div class="section-category">
                <h3 class="category-title">🎉 Activities in ${cityData.city}</h3>
                <div class="discount-grid">
                    ${cityData.activities.map(item => `
                        <div class="discount-card">
                            <div class="discount-icon">${item.icon}</div>
                            <h4>${item.title}</h4>
                            <p>${item.desc}</p>
                            <p class="tip-text">${item.tip}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Tips Section -->
            <div class="discount-tips">
                <div class="tips-column">
                    <h3>🍴 Dining Tips for ${cityData.city}</h3>
                    <ul>
                        <li><strong>Eat like a local:</strong> Avoid main tourist areas for better prices and authenticity</li>
                        <li><strong>Lunch specials:</strong> Many restaurants offer cheaper set menus at lunch</li>
                        <li><strong>Happy hour:</strong> Take advantage of discounted food and drinks in early evening</li>
                        <li><strong>Student meal plans:</strong> University cafeterias offer the best value</li>
                        <li><strong>Cook with friends:</strong> Split grocery costs and make meal prep social</li>
                    </ul>
                </div>
                <div class="tips-column">
                    <h3>🎨 Activity Tips for ${cityData.city}</h3>
                    <ul>
                        <li><strong>Student ID is essential:</strong> Always carry it for discounts at museums and attractions</li>
                        <li><strong>Join student groups:</strong> Meet people and discover free events</li>
                        <li><strong>Free walking tours:</strong> Great way to orient yourself in a new city</li>
                        <li><strong>Explore on foot:</strong> Walking reveals hidden gems you'd miss otherwise</li>
                        <li><strong>Ask locals:</strong> Best recommendations come from people who live there</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// Set up food & activities city selector
document.getElementById('food-city')?.addEventListener('change', (e) => {
    displayStudentDiscounts(e.target.value);
});

// Initialize app
console.log('Study Abroad Hub initialized! 🌍');
loadSavedCities();
displayTimeZones();
populateCurrencySelects();
displayAccommodationInfo();
displayStudentDiscounts();