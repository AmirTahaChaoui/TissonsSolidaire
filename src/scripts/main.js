// Global state
let currentUser = null;
let articles = [
    {
        id: 1,
        name: 'Veste en jean vintage',
        category: 'Vestes',
        size: 'M',
        price: 25,
        condition: 'Très bon état',
        reserved: false,
    },
    {
        id: 2,
        name: 'Robe d\'été fleurie',
        category: 'Robes',
        size: 'S',
        price: 18,
        condition: 'Bon état',
        reserved: false,
    },
    {
        id: 3,
        name: 'Pull en laine mérinos',
        category: 'Pulls',
        size: 'L',
        price: 30,
        condition: 'Excellent état',
        reserved: true,
    },
    {
        id: 4,
        name: 'Pantalon chino beige',
        category: 'Pantalons',
        size: 'M',
        price: 22,
        condition: 'Bon état',
        reserved: false,
    },
    {
        id: 5,
        name: 'Chemise à carreaux',
        category: 'Chemises',
        size: 'L',
        price: 15,
        condition: 'Très bon état',
        reserved: false,
    },
    {
        id: 6,
        name: 'Manteau d\'hiver noir',
        category: 'Manteaux',
        size: 'M',
        price: 45,
        condition: 'Excellent état',
        reserved: false,
    },
];

// Mobile menu functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
}

// Auth functions
function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

function switchAuthTab(tab) {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (tab === 'login') {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        showToast('Veuillez remplir tous les champs', 'error');
        return;
    }

    // Simple authentication logic
    let role = 'user';
    let name = 'Utilisateur';

    if (email === 'admin@ecotextile.fr' && password === 'admin123') {
        role = 'admin';
        name = 'Administrateur';
    }

    currentUser = { email, name, role };
    closeAuthModal();
    updateAuthSection();
    showToast('Connexion réussie !', 'success');

    // Clear form
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;

    if (!name || !email || !password || !confirmPassword) {
        showToast('Veuillez remplir tous les champs', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showToast('Les mots de passe ne correspondent pas', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('Le mot de passe doit contenir au moins 6 caractères', 'error');
        return;
    }

    currentUser = { email, name, role: 'user' };
    closeAuthModal();
    updateAuthSection();
    showToast('Compte créé avec succès !', 'success');

    // Clear form
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-confirm').value = '';
}

function handleLogout() {
    currentUser = null;
    updateAuthSection();
    showToast('Déconnexion réussie', 'success');
    
    // Redirect to home if on protected pages
    if (window.location.pathname.includes('admin') || window.location.pathname.includes('reservations')) {
        window.location.href = 'index.html';
    }
}

function updateAuthSection() {
    const authSection = document.getElementById('auth-section');
    const mobileAuthSection = document.getElementById('mobile-auth-section');

    if (!authSection || !mobileAuthSection) return;

    if (currentUser) {
        // User is logged in
        let authHTML = '';
        
        if (currentUser.role === 'admin') {
            authHTML += `
                <a href="admin.html" class="btn btn-outline btn-sm">
                    Admin
                </a>
            `;
        }
        
        authHTML += `
            <a href="reservations.html" class="btn btn-outline btn-sm">
                <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                Mes réservations
            </a>
            <button onclick="handleLogout()" class="btn btn-outline btn-sm">
                Déconnexion
            </button>
        `;

        authSection.innerHTML = authHTML;

        // Mobile auth section
        let mobileAuthHTML = `
            <div class="border-t pt-4 mt-4 space-y-2">
        `;
        
        if (currentUser.role === 'admin') {
            mobileAuthHTML += `
                <a href="admin.html" class="w-full btn btn-outline">
                    Administration
                </a>
            `;
        }
        
        mobileAuthHTML += `
                <a href="reservations.html" class="w-full btn btn-outline">
                    <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                    Mes réservations
                </a>
                <button onclick="handleLogout()" class="w-full btn btn-outline">
                    Déconnexion
                </button>
            </div>
        `;

        mobileAuthSection.innerHTML = mobileAuthHTML;
    } else {
        // User is not logged in
        authSection.innerHTML = `
            <button onclick="openAuthModal()" class="btn btn-primary">
                <i data-lucide="user" class="w-4 h-4"></i>
                Se connecter
            </button>
        `;

        mobileAuthSection.innerHTML = `
            <div class="border-t pt-4 mt-4">
                <button onclick="openAuthModal()" class="w-full btn btn-primary">
                    <i data-lucide="user" class="w-4 h-4"></i>
                    Se connecter
                </button>
            </div>
        `;
    }

    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    
    // Set color based on type
    toast.className = `toast ${
        type === 'success' ? 'bg-green-600 text-white' : 
        type === 'error' ? 'bg-red-600 text-white' : 
        'bg-blue-600 text-white'
    }`;
    
    // Show toast
    toast.classList.add('show');
    toast.style.transform = 'translateY(0)';
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        toast.style.transform = 'translateY(100%)';
    }, 3000);
}

// Articles page functions
function initializeArticlesPage() {
    // Initialize filter functionality if on articles page
    if (window.location.pathname.includes('articles.html')) {
        filterArticles();
    }
}

function filterArticles() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const sizeFilter = document.getElementById('size-filter');
    
    if (!searchInput || !categoryFilter || !sizeFilter) return;

    const searchTerm = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    const sizeValue = sizeFilter.value;

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.name.toLowerCase().includes(searchTerm) ||
                             article.category.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryValue === 'all' || article.category === categoryValue;
        const matchesSize = sizeValue === 'all' || article.size === sizeValue;
        
        return matchesSearch && matchesCategory && matchesSize;
    });

    updateArticleStats(filteredArticles);
    showFilteredArticles(filteredArticles);
}

function updateArticleStats(filteredArticles) {
    const totalEl = document.getElementById('total-articles');
    const availableEl = document.getElementById('available-articles');
    const reservedEl = document.getElementById('reserved-articles');

    if (totalEl) totalEl.textContent = filteredArticles.length;
    if (availableEl) availableEl.textContent = filteredArticles.filter(a => !a.reserved).length;
    if (reservedEl) reservedEl.textContent = filteredArticles.filter(a => a.reserved).length;
}

function showFilteredArticles(filteredArticles) {
    const articleCards = document.querySelectorAll('.article-card');
    const noResults = document.getElementById('no-results');

    if (filteredArticles.length === 0) {
        articleCards.forEach(card => card.style.display = 'none');
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');

    // Show/hide articles based on filter
    articleCards.forEach((card, index) => {
        const article = articles[index];
        const shouldShow = filteredArticles.some(filtered => filtered.id === article.id);
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

function reserveArticle(articleId) {
    if (!currentUser) {
        openAuthModal();
        return;
    }

    const article = articles.find(a => a.id === articleId);
    if (article && !article.reserved) {
        article.reserved = true;
        showToast('Article réservé ! Vous pouvez venir le récupérer dans notre local.', 'success');
        
        // Update the button
        const button = document.querySelector(`[data-article="${articleId}"]`);
        if (button) {
            button.disabled = true;
            button.className = 'btn btn-disabled btn-sm';
            button.innerHTML = '<i data-lucide="shopping-bag" class="w-4 h-4"></i> Réservé';
        }
        
        // Add reserved badge
        const card = button.closest('.article-card');
        const badges = card.querySelector('.article-badges');
        if (badges && !badges.querySelector('.badge-warning')) {
            const reservedBadge = document.createElement('span');
            reservedBadge.className = 'badge badge-warning';
            reservedBadge.textContent = 'Réservé';
            badges.insertBefore(reservedBadge, badges.firstChild);
        }
        
        // Update stats
        filterArticles();
        
        // Reinitialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Contact form functions
function initializeContactPage() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm();
        });
    }
}

function handleContactForm(event) {
    if (event) event.preventDefault();
    
    const name = document.getElementById('contact-name')?.value;
    const email = document.getElementById('contact-email')?.value;
    const subject = document.getElementById('contact-subject')?.value;
    const message = document.getElementById('contact-message')?.value;

    if (!name || !email || !subject || !message) {
        showToast('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }

    // Simulate form submission
    showToast('Message envoyé avec succès ! Nous vous répondrons rapidement.', 'success');
    
    // Clear form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.reset();
    }
}

function handleDonation(type) {
    showToast(`Redirection vers le système de donation ${type}...`, 'info');
}

// Admin functions
function initializeAdminPage() {
    if (!currentUser || currentUser.role !== 'admin') {
        window.location.href = 'index.html';
        return;
    }
    
    renderAdminArticlesTable();
    
    const addArticleForm = document.getElementById('add-article-form');
    if (addArticleForm) {
        addArticleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleAddArticle();
        });
    }
}

function renderAdminArticlesTable() {
    const tableBody = document.getElementById('admin-articles-table');
    if (!tableBody) return;

    tableBody.innerHTML = articles.map(article => `
        <tr>
            <td class="font-medium">${article.name}</td>
            <td>${article.category}</td>
            <td><span class="tag">${article.size}</span></td>
            <td>${article.price}€</td>
            <td><span class="badge ${getConditionBadgeClass(article.condition)}">${article.condition}</span></td>
            <td><span class="badge ${article.reserved ? 'badge-warning' : 'badge-success'}">${article.reserved ? 'Réservé' : 'Disponible'}</span></td>
            <td>
                <div class="flex gap-2">
                    <button class="btn btn-outline btn-sm">
                        <i data-lucide="edit" class="w-4 h-4"></i>
                    </button>
                    <button onclick="deleteArticle(${article.id})" class="btn btn-outline btn-sm text-red-600 hover:text-red-700">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function getConditionBadgeClass(condition) {
    switch (condition) {
        case 'Excellent état': return 'badge-success';
        case 'Très bon état': return 'badge-info';
        case 'Bon état': return 'badge-warning';
        default: return 'badge-outline';
    }
}

function openAddArticleModal() {
    const modal = document.getElementById('add-article-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
}

function closeAddArticleModal() {
    const modal = document.getElementById('add-article-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

function handleAddArticle(event) {
    if (event) event.preventDefault();
    
    const name = document.getElementById('article-name')?.value;
    const category = document.getElementById('article-category')?.value;
    const size = document.getElementById('article-size')?.value;
    const price = parseFloat(document.getElementById('article-price')?.value);
    const condition = document.getElementById('article-condition')?.value;

    if (!name || !category || !size || !price || !condition) {
        showToast('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }

    const newArticle = {
        id: articles.length + 1,
        name,
        category,
        size,
        price,
        condition,
        reserved: false
    };

    articles.push(newArticle);
    renderAdminArticlesTable();
    closeAddArticleModal();
    showToast('Article ajouté avec succès !', 'success');

    // Clear form
    const addArticleForm = document.getElementById('add-article-form');
    if (addArticleForm) {
        addArticleForm.reset();
    }
}

function deleteArticle(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        const index = articles.findIndex(article => article.id === id);
        if (index > -1) {
            articles.splice(index, 1);
            renderAdminArticlesTable();
            showToast('Article supprimé !', 'success');
        }
    }
}

// Initialize page-specific functionality on page load
document.addEventListener('DOMContentLoaded', function() {
    // Update auth section on all pages
    updateAuthSection();
    
    // Initialize page-specific functions based on current page
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('articles.html')) {
        initializeArticlesPage();
    } else if (currentPath.includes('contact.html')) {
        initializeContactPage();
    } else if (currentPath.includes('admin.html')) {
        initializeAdminPage();
    } else if (currentPath.includes('reservations.html')) {
        initializeReservationsPage();
    }
});

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const authModal = document.getElementById('auth-modal');
    const addArticleModal = document.getElementById('add-article-modal');
    
    if (authModal && event.target === authModal) {
        closeAuthModal();
    }
    
    if (addArticleModal && event.target === addArticleModal) {
        closeAddArticleModal();
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileButton = event.target.closest('[onclick="toggleMobileMenu()"]');
    
    if (mobileMenu && !mobileMenu.contains(event.target) && !mobileButton) {
        closeMobileMenu();
    }
});

// Reservations page functions
function initializeReservationsPage() {
    if (currentUser) {
        showLoggedInContent();
    } else {
        showNotLoggedInContent();
    }
}

function showLoggedInContent() {
    const notLoggedIn = document.getElementById('not-logged-in');
    const loggedInContent = document.getElementById('logged-in-content');
    
    if (notLoggedIn) notLoggedIn.classList.add('hidden');
    if (loggedInContent) loggedInContent.classList.remove('hidden');
    
    // Update reservation stats
    updateReservationStats();
}

function showNotLoggedInContent() {
    const notLoggedIn = document.getElementById('not-logged-in');
    const loggedInContent = document.getElementById('logged-in-content');
    
    if (notLoggedIn) notLoggedIn.classList.remove('hidden');
    if (loggedInContent) loggedInContent.classList.add('hidden');
}

function updateReservationStats() {
    const reservedArticles = articles.filter(article => article.reserved);
    const totalValue = reservedArticles.reduce((sum, article) => sum + article.price, 0);
    
    // Update counters
    const reservedCount = document.getElementById('reserved-count');
    const totalValueEl = document.getElementById('total-value');
    const expiringCount = document.getElementById('expiring-count');
    
    if (reservedCount) reservedCount.textContent = reservedArticles.length;
    if (totalValueEl) totalValueEl.textContent = `${totalValue}€`;
    if (expiringCount) expiringCount.textContent = Math.floor(reservedArticles.length / 2); // Simulated
    
    // Show/hide reservations list
    if (reservedArticles.length > 0) {
        showReservationsList(reservedArticles);
    } else {
        showNoReservations();
    }
}

function showReservationsList(reservedArticles) {
    const noReservations = document.getElementById('no-reservations');
    const reservationsList = document.getElementById('reservations-list');
    
    if (noReservations) noReservations.classList.add('hidden');
    if (reservationsList) {
        reservationsList.classList.remove('hidden');
        reservationsList.innerHTML = reservedArticles.map(article => `
            <div class="p-6 border-b border-border last:border-b-0 flex items-center gap-4">
                <img src="${article.image || 'https://images.unsplash.com/photo-1606055059939-7e0386191381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4ODg3NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'}" 
                     alt="${article.name}" 
                     class="w-16 h-16 object-cover rounded-lg">
                <div class="flex-1">
                    <h3 class="font-semibold text-foreground">${article.name}</h3>
                    <p class="text-muted-foreground text-sm">${article.category} • Taille ${article.size}</p>
                    <p class="text-green-600 font-semibold">${article.price}€</p>
                </div>
                <div class="text-right">
                    <span class="badge badge-warning">Réservé</span>
                    <p class="text-xs text-muted-foreground mt-1">Expire dans 24h</p>
                </div>
                <button onclick="cancelReservation(${article.id})" class="btn btn-outline btn-sm text-red-600 hover:text-red-700">
                    <i data-lucide="x" class="w-4 h-4"></i>
                    Annuler
                </button>
            </div>
        `).join('');
        
        // Reinitialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

function showNoReservations() {
    const noReservations = document.getElementById('no-reservations');
    const reservationsList = document.getElementById('reservations-list');
    
    if (noReservations) noReservations.classList.remove('hidden');
    if (reservationsList) reservationsList.classList.add('hidden');
}

function cancelReservation(articleId) {
    if (confirm('Êtes-vous sûr de vouloir annuler cette réservation ?')) {
        const article = articles.find(a => a.id === articleId);
        if (article) {
            article.reserved = false;
            updateReservationStats();
            showToast('Réservation annulée', 'success');
        }
    }
}