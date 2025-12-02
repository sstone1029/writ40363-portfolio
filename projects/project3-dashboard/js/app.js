// ==========================================
// PROJECT 3: PERSONAL DATA DASHBOARD
// LAB16: fetch() and JSON Basics
// ==========================================

// ==========================================
// TOAST NOTIFICATION SYSTEM
// ==========================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
  
  console.log('Toast shown:', message);
}

// ==========================================
// Theme Management
// ==========================================
function initializeTheme() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('dashboardTheme');

  if (savedTheme === 'dark') {
    document.body.classList.add('theme-dark');
    updateThemeIcon('dark');
  } else {
    updateThemeIcon('light');
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('theme-dark');

  // Save preference
  localStorage.setItem('dashboardTheme', isDark ? 'dark' : 'light');

  // Update icon
  updateThemeIcon(isDark ? 'dark' : 'light');
  
  // Show toast notification
  showToast(`${isDark ? '🌙 Dark' : '☀️ Light'} mode activated`, 'info');

  console.log('Theme switched to:', isDark ? 'dark' : 'light');
}

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector('.theme-icon');

  if (theme === 'dark') {
    themeIcon.textContent = '☀️'; // Sun for dark mode (to switch to light)
  } else {
    themeIcon.textContent = '🌙'; // Moon for light mode (to switch to dark)
  }
}

function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
}

// Call these when page loads
initializeTheme();
setupThemeToggle();
console.log('Dashboard app loaded!');
console.log('LAB16: Learning fetch() API');

// Function to load weather data
function loadWeather() {
    console.log('🌤️ Loading weather data...');

    fetch('./data/weather.json')
        .then(response => {
            console.log('✅ Got response:', response);
            return response.json();
        })
        .then(data => {
            console.log('✅ Weather data loaded:', data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('❌ Error loading weather:', error);
            displayWeatherError();
        });
}
// Function to display weather data in the DOM
function displayWeather(weather) {
    console.log('📊 Displaying weather data...');

    const weatherDisplay = document.getElementById('weather-display');

    weatherDisplay.innerHTML = `
        <div class="weather-current">
            <div class="weather-icon">${weather.icon}</div>
            <div class="weather-temp">${weather.temperature}°F</div>
            <div class="weather-location">${weather.location}</div>
            <div class="weather-condition">${weather.condition}</div>
        </div>
        <div class="weather-details">
            <div class="weather-detail">
                <span>💧 Humidity</span>
                <strong>${weather.humidity}%</strong>
            </div>
            <div class="weather-detail">
                <span>💨 Wind Speed</span>
                <strong>${weather.windSpeed} mph</strong>
            </div>
            <div class="weather-detail">
    <span>🌡️ Feels Like</span>
    <strong>${weather.feelsLike}°F</strong>
</div>
        </div>
    `;

    console.log('✅ Weather displayed successfully!');
}
// Function to show error message if weather data fails to load
function displayWeatherError() {
    const weatherDisplay = document.getElementById('weather-display');

    weatherDisplay.innerHTML = `
        <div class="error-message">
            <div class="error-icon">⚠️</div>
            <p>Could not load weather data</p>
            <p class="error-hint">Check console for details</p>
        </div>
    `;
}

// Load weather data when page loads
loadWeather();
// Global variable to store all quotes
let allQuotes = [];
let currentQuoteIndex = -1; // Track current quote to avoid repeats
let currentQuote = null; // Track the currently displayed quote

// Function to load quotes from JSON
function loadQuotes() {
  console.log('Loading quotes...');

  fetch('data/quotes.json')
    .then(response => {
      console.log('Got quotes response:', response);
      return response.json();
    })
    .then(data => {
      console.log('Quotes data:', data);
      allQuotes = data; // Store quotes in global variable
      displayRandomQuote(); // Show first quote
    })
    .catch(error => {
      console.error('Error loading quotes:', error);
      displayQuotesError();
    });
}

// Function to display a random quote
function displayRandomQuote() {
  // Make sure we have quotes loaded
  if (allQuotes.length === 0) {
    console.error('No quotes available');
    return;
  }

  // Get the quotes display element
  const quotesDisplay = document.getElementById('quotes-display');
  const existingQuote = quotesDisplay.querySelector('.quote-card');
  
  // If there's an existing quote, fade it out first
  if (existingQuote) {
    existingQuote.classList.add('fade-out');
    
    // Wait for fade out animation, then update
    setTimeout(() => {
      updateQuoteContent();
    }, 300);
  } else {
    // No existing quote, just display
    updateQuoteContent();
  }
}

// Helper function to update quote content
function updateQuoteContent() {
  // Get random index (different from current)
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * allQuotes.length);
  } while (randomIndex === currentQuoteIndex && allQuotes.length > 1);

  currentQuoteIndex = randomIndex;
  const quote = allQuotes[randomIndex];
  currentQuote = quote; // Store current quote

  // Display the quote
  const quotesDisplay = document.getElementById('quotes-display');
  quotesDisplay.innerHTML = `
    <div class="quote-card">
      <div class="quote-text">"${quote.text}"</div>
      <div class="quote-author">— ${quote.author}</div>
    </div>
  `;
  
  // Add double-click to copy functionality
  const quoteCard = quotesDisplay.querySelector('.quote-card');
  quoteCard.addEventListener('dblclick', copyQuoteToClipboard);

  // Update favorite button state
  updateFavoriteButton();

  console.log('Displayed quote:', quote);
}

// Function to show error message
function displayQuotesError() {
  const quotesDisplay = document.getElementById('quotes-display');
  quotesDisplay.innerHTML = `
    <div class="error-message">
      ⚠️ Could not load quotes
    </div>
  `;
}

// Call loadQuotes when page loads
loadQuotes();
// Set up "New Quote" button
function setupQuotesButton() {
  const newQuoteBtn = document.getElementById('new-quote-btn');

  newQuoteBtn.addEventListener('click', () => {
    console.log('New quote button clicked!');
    displayRandomQuote();
  });
}


// Call setupQuotesButton after DOM is loaded
setupQuotesButton();

// Function to copy quote to clipboard
function copyQuoteToClipboard() {
  if (!currentQuote) return;
  
  const quoteText = `"${currentQuote.text}" — ${currentQuote.author}`;
  
  navigator.clipboard.writeText(quoteText)
    .then(() => {
      showToast('📋 Quote copied to clipboard!', 'success');
      console.log('Quote copied:', quoteText);
    })
    .catch(err => {
      console.error('Failed to copy:', err);
      showToast('❌ Failed to copy quote', 'error');
    });
}

// ========================================
// FAVORITE QUOTES FEATURE
// ========================================

// Function to load favorite quotes from localStorage
function loadFavorites() {
  const favoritesJSON = localStorage.getItem('favoriteQuotes');
  
  if (favoritesJSON) {
    return JSON.parse(favoritesJSON);
  } else {
    return []; // Return empty array if no favorites yet
  }
}

// Function to save favorites to localStorage
function saveFavorites(favorites) {
  localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
  console.log('Favorites saved:', favorites);
}

// Function to check if a quote is already favorited
function isQuoteFavorited(quote) {
  const favorites = loadFavorites();
  return favorites.some(fav => 
    fav.text === quote.text && fav.author === quote.author
  );
}

// Function to toggle favorite status of current quote
function toggleFavorite() {
  if (!currentQuote) {
    console.log('No quote to favorite');
    return;
  }

  const favorites = loadFavorites();
  const isFavorited = isQuoteFavorited(currentQuote);

  if (isFavorited) {
    // Remove from favorites
    const updatedFavorites = favorites.filter(fav => 
      !(fav.text === currentQuote.text && fav.author === currentQuote.author)
    );
    saveFavorites(updatedFavorites);
    showToast('💔 Removed from favorites', 'info');
    console.log('Quote removed from favorites');
  } else {
    // Add to favorites
    favorites.push(currentQuote);
    saveFavorites(favorites);
    showToast('❤️ Added to favorites!', 'success');
    console.log('Quote added to favorites');
  }

  // Update UI
  updateFavoriteButton();
  displayFavorites();
}

// Function to update favorite button appearance
function updateFavoriteButton() {
  const favoriteBtn = document.getElementById('favorite-btn');
  const heartIcon = favoriteBtn.querySelector('.heart-icon');
  
  if (!currentQuote) return;

  if (isQuoteFavorited(currentQuote)) {
    heartIcon.textContent = '❤️';
    favoriteBtn.classList.add('favorited');
    favoriteBtn.title = 'Remove from favorites';
  } else {
    heartIcon.textContent = '🤍';
    favoriteBtn.classList.remove('favorited');
    favoriteBtn.title = 'Add to favorites';
  }
}

// Function to display all favorite quotes
function displayFavorites() {
  const favorites = loadFavorites();
  const favoritesDisplay = document.getElementById('favorites-display');

  // If no favorites, show message
  if (favorites.length === 0) {
    favoritesDisplay.innerHTML = `
      <div class="no-favorites">
        <div class="empty-icon">💭</div>
        <p>No favorite quotes yet!</p>
        <p class="empty-hint">Click the favorite button on quotes you love.</p>
      </div>
    `;
    return;
  }

  // Display all favorite quotes
  favoritesDisplay.innerHTML = favorites.map((quote, index) => `
    <div class="favorite-item">
      <div class="favorite-quote">
        <div class="favorite-text">"${quote.text}"</div>
        <div class="favorite-author">— ${quote.author}</div>
      </div>
      <button class="btn-unfavorite" onclick="removeFavorite(${index})" title="Remove from favorites">
        ❌
      </button>
    </div>
  `).join('');

  console.log(`Displayed ${favorites.length} favorite quotes`);
}

// Function to remove a specific favorite by index
function removeFavorite(index) {
  const favorites = loadFavorites();
  const removedQuote = favorites[index];
  
  favorites.splice(index, 1);
  saveFavorites(favorites);
  displayFavorites();
  
  // Update favorite button if the removed quote is currently displayed
  if (currentQuote && 
      currentQuote.text === removedQuote.text && 
      currentQuote.author === removedQuote.author) {
    updateFavoriteButton();
  }
  
  console.log('Favorite removed:', removedQuote);
}

// Set up favorite button click handler
function setupFavoriteButton() {
  const favoriteBtn = document.getElementById('favorite-btn');
  
  favoriteBtn.addEventListener('click', () => {
    console.log('Favorite button clicked!');
    toggleFavorite();
  });
}

// Initialize favorites when page loads
setupFavoriteButton();
displayFavorites();

// ========================================
// TASKS WIDGET (from LAB18)
// ========================================

// Function to load tasks from localStorage
function loadTasks() {
  const tasksJSON = localStorage.getItem('dashboardTasks');

  if (tasksJSON) {
    return JSON.parse(tasksJSON);
  } else {
    return []; // Return empty array if no tasks yet
  }
}

// Function to save tasks to localStorage
function saveTasks(tasks) {
  localStorage.setItem('dashboardTasks', JSON.stringify(tasks));
  console.log('Tasks saved:', tasks);
}
// Function to display all tasks
function displayTasks() {
  const tasks = loadTasks();
  const tasksList = document.getElementById('tasks-list');

  // If no tasks, show message
  if (tasks.length === 0) {
    tasksList.innerHTML = `
      <div class="no-tasks">
        No tasks yet. Add one above! ✨
      </div>
    `;
    updateTaskStats(tasks);
    return;
  }

  // Clear existing tasks
  tasksList.innerHTML = '';

  // Display each task
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(index));

    // Create task text
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task.text;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(index));

    // Append all elements to task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);

    tasksList.appendChild(taskItem);
  });

  updateTaskStats(tasks);
}
// Function to add a new task
function addTask(taskText) {
  const tasks = loadTasks();

  const newTask = {
    text: taskText,
    completed: false,
    id: Date.now() // Unique ID using timestamp
  };

  tasks.push(newTask);
  saveTasks(tasks);
  displayTasks();
  
  showToast('✅ Task added successfully!', 'success');

  console.log('Task added:', newTask);
}

// Set up form submission
function setupTaskForm() {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    const taskText = taskInput.value.trim();

    if (taskText) {
      addTask(taskText);
      taskInput.value = ''; // Clear input
      taskInput.focus(); // Focus back on input
    }
  });
}
// Function to toggle task complete/incomplete
function toggleTask(index) {
  const tasks = loadTasks();
  const taskItem = document.querySelectorAll('.task-item')[index];
  
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  
  // Add celebration animation if task was completed
  if (tasks[index].completed) {
    taskItem.classList.add('celebrating');
    showToast('🎉 Task completed!', 'success');
    
    // Remove animation class after animation completes
    setTimeout(() => {
      taskItem.classList.remove('celebrating');
    }, 600);
  } else {
    showToast('📝 Task marked incomplete', 'info');
  }
  
  displayTasks();

  console.log('Task toggled:', tasks[index]);
}
// Function to delete a task
function deleteTask(index) {
  const tasks = loadTasks();
  const taskToDelete = tasks[index];

  // Optional: Confirm before deleting
  if (confirm(`Delete task: "${taskToDelete.text}"?`)) {
    const taskItem = document.querySelectorAll('.task-item')[index];
    
    // Add removing animation
    taskItem.classList.add('removing');
    
    // Wait for animation then remove
    setTimeout(() => {
      tasks.splice(index, 1);
      saveTasks(tasks);
      displayTasks();
      showToast('🗑️ Task deleted', 'info');
    }, 300);

    console.log('Task deleted');
  }
}
// Function to update task statistics
function updateTaskStats(tasks) {
  const statsDiv = document.getElementById('task-stats');

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  if (totalTasks === 0) {
    statsDiv.innerHTML = '';
    return;
  }

  const completionPercentage = Math.round((completedTasks / totalTasks) * 100);

  statsDiv.innerHTML = `
    <div class="stat">Total: <strong>${totalTasks}</strong></div>
    <div class="stat">Completed: <strong>${completedTasks}</strong></div>
    <div class="stat">Pending: <strong>${pendingTasks}</strong></div>
    <div class="stat">Progress: <strong>${completionPercentage}%</strong></div>
  `;
}
// Initialize tasks when page loads
displayTasks();
setupTaskForm();
